# Recipe Finder App 
A beautiful, functional web application for discovering and saving your favorite recipes.

##  Getting Started

1. **Clone the repository**
```bash
   git clone https://github.com/your-username/recipe-finder.git
   cd recipe-finder
```
2. **Install dependencies**

```bash
  npm install
  Run the development server
```
3. **Run the development server**
```bash
  npm start
```

4. **Open in browser**
```text
   http://localhost:3000
````
##  Features

###  **Search & Discover**
- Instant search with live results
- Clean grid display with recipe cards
- Mobile-responsive design
- Loading states and empty result handling

![Search Features](https://github.com/user-attachments/assets/aef191a4-4f14-45dd-bb15-e8a0bd810203)
*Default veg search results*

![Paneer Search](https://github.com/user-attachments/assets/be420b46-db5a-4ec9-80f4-60d3bf257720)
*Search results for "paneer"*

![Loading Screen](https://github.com/user-attachments/assets/1f32e8c0-edb2-4cf7-bed9-4e484d176bef)
*Loading Screen*

![No Result](https://github.com/user-attachments/assets/c565c01f-309a-474d-b222-61c62d15e636)
*No result handling*

### 📱 **Mobile Friendly**
![Mobile View](https://github.com/user-attachments/assets/d54c8f3e-cca5-4cd2-b4dc-9565fa8e614f)
*Fully responsive design*

### 📖 **Recipe Details**
- Dedicated recipe pages
- Complete ingredient lists
- Step-by-step instructions
- Back to search navigation

![Recipe View](https://github.com/user-attachments/assets/695f34bc-0fc9-4777-903c-8484291c5a16)
*Search recipe view*

The user is navigated to a dedicated page /recipe/52777</br>
![Recipe Dtetail](https://github.com/user-attachments/assets/8b4f6786-0867-453b-a2da-7f9b778c71c0) 
*Display recipe name, image, category, cuisine, ingredients and instructions*</br>
*Back to Search" Link is on the detail page that takes the user back to the home/search page*

### ❤ **Favorites System**
- Add/remove favorites
- Persistent storage
- Dedicated favorites page
- Bulk management

![Add Favorites](https://github.com/user-attachments/assets/22362876-81df-4f9b-855d-69a4366bccc7)
*In recipe detail page Add to Favorites button*

![Display favorites](https://github.com/user-attachments/assets/6689d495-f572-4f9e-a3c6-4a48d95822a8)
*A separate page at favorites that displays a list of all the user's saved recipes*


![Remove Favorites](https://github.com/user-attachments/assets/314dd2b1-e983-486e-8969-c5b9fe133989)
*A button for Remove from Favorites*


## 🛠 Tech-stack
- **Frontend**: React, React Router
- **State Management**: Context API + useReducer
- **Storage**: localStorage
- **API**: TheMealDB
- **Styling**: CSS3 (Flexbox, Grid)



