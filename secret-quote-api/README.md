# secret-quote-api

##  Getting Started

1. **Clone the repository**
```bash
   git clone  https://github.com/avanishsah/secret-quote-api.git
   cd secret-quote-api
```
2. **Install dependencies**

```bash
  npm install
```
3. **Run the development server**
```bash
  node index.js
```

4. **Open in browser**
```text
   http://localhost:3000
````
## API Testing Guide

#### Postman:[signup]
1. Set method to **POST**
2. URL: `http://localhost:3000/register`
3. Go to **Body** → **raw** → **JSON**
4. Enter JSON body:
```json
{
    "username": "your_username",
    "password": "your_password"
}
```
5. Click Send

![New User](https://github.com/user-attachments/assets/6ff75756-1c8b-4ecf-b3f9-de7549a2412d)
**Successful Response (201 Created) For new user**</br>

![Existing User](https://github.com/user-attachments/assets/65c77e98-50dd-41f4-a1db-cfb15d92fece)
**For existing user (409 Conflict)**

#### Postman:[login]
1. Set method to **POST**
2. URL: `http://localhost:3000/login`
3. Go to **Body** → **raw** → **JSON**
4. Enter JSON body:
```json
{
    "username": "your_username",
    "password": "your_password"
}
```
5. Click Send


![Login](https://github.com/user-attachments/assets/c3dcd010-1fdb-42f9-b5a3-0062cecc9477)
**Successful Response (200 OK) **

#### Postman:[login]
1. Set method to **GET**
2. URL: `http://localhost:3000/api/secret-quote`
3. Go to **Header**
```text
{
    Key: Authorization,
    Value: Bearer <copied_token>
}
```
4. Click Send </br>


![Secret Quote Success](https://github.com/user-attachments/assets/3e4d98db-aaa2-4b80-99f7-52f384c72d9c)
**Successful Response (200 OK) **

![Secret Quote Failure](https://github.com/user-attachments/assets/ad5cf4b4-2daa-46a7-8e9d-f10f18c5473d)
**Unsuccessful Response (403 Forbidden) **
