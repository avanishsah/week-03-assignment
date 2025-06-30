const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const PORT = 3000;


let users = [
    {
        id: 1,
        username: 'avanish',
        password: 'avanish123'
    }
];
let userIdCounter = 2;

const JWT_SECRET = 'Svlf/rIAAJ6MeCJUSS+/oPzocXBAjIjA7JYLBT9d5Tk=';
const TOKEN_EXPIRY = '1h';

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Authorization token required' });
    }
    
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid or expired token' });
        }
        req.user = user;
        next();
    });
}

app.get('/', (req, res) => {
    res.send('Secret Quote API is running!');
});

// Signup
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            error: 'Both username and password are required'
        });
    }

    const existingUser = users.find(user => user.username.toLowerCase() === username.toLowerCase());
    
    if (existingUser) {
        return res.status(409).json({
            error: `Username '${username}' already exists. Try a different username.`,
            existingUsers: users.map(u => u.username)
        });
    }

    const newUser = {
        id: userIdCounter++,
        username,
        password
    };

    users.push(newUser);

    res.status(201).json({
        message: `User '${username}' registered successfully`,
        user: { id: newUser.id, username: newUser.username }
    });
});

// login 
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            error: 'Both username and password are required'
        });
    }

    const user = users.find(
        user => user.username === username && user.password === password
    );

    if (!user) {
        return res.status(401).json({
            error: 'Invalid username or password'
        });
    }

    const payload = {
        id: user.id,
        username: user.username
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: TOKEN_EXPIRY });

    res.json({
        accessToken: token,
        expiresIn: '1 hour',
        user: { id: user.id, username: user.username }
    });
})

app.get('/api/secret-quote', authenticateToken, (req, res) => {
    res.json({
        quote: "The secret to getting ahead is getting started.",
        user: req.user  
    });
});

app.get('/users', (req, res) => {
    res.json(users.map(user => ({ 
        id: user.id, 
        username: user.username 
    })));
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Initial user count: ${users.length}`);
});
