# SHOEPAVU

## Introduction

SHOEPAVU is a full-stack shoe store web application designed to provide users with a simple and interactive way to browse footwear products, search and filter shoes, manage a shopping cart, register and sign in, and view product information.

The project combines a frontend built with HTML, CSS, and JavaScript with a Node.js and Express backend that provides product data through an API.

## Overview

The website allows users to:

* Browse different footwear categories
* View product names, prices, ratings, and descriptions
* Search for products
* Filter products by category
* View product details
* Add products to a shopping cart
* Increase or decrease product quantities
* Remove products from the cart
* View the total cart value
* Register an account
* Sign in and sign out
* Checkout after signing in
* Submit a contact form
* Store cart and authentication information using browser `localStorage`

## Problem Statement

Customers need a simple and convenient way to browse different footwear styles and access essential product information such as prices, ratings, categories, and descriptions without visiting a physical store.

## Solution

SHOEPAVU provides an interactive online footwear store where customers can browse different shoe categories, search and filter products, view product details, add shoes to a shopping cart, manage quantities, register and sign in, and proceed through a simulated checkout process.

The application uses JavaScript to provide dynamic functionality and communicates with an Express backend to retrieve product information through an API.

## Features

### Product Browsing

* Sneakers, Formal, Casual, and Sandals categories
* Dynamic product cards
* Product names and descriptions
* Product prices
* Product ratings
* Product images
* CSS-based product detail modals

### Search and Filtering

* Search for products by name
* Case-insensitive product searching
* Filter products by category

### Shopping Cart

* Add products to the cart
* Increase product quantity
* Decrease product quantity
* Remove products from the cart
* Display the cart item count
* Calculate the total cart value
* Store cart data using `localStorage`
* Display a notification when a product is added to the cart

### User Authentication

* User registration
* User sign in
* Display the logged-in user's name
* Logout functionality
* Store demonstration authentication information using `localStorage`

### Checkout

* Check whether the cart contains products
* Check whether the user is signed in
* Display an order confirmation message
* Clear the cart after checkout

### Contact

* Contact form
* Required form fields
* Success message after form submission

### User Interface

* Home, About, Products, and Contact sections
* Navigation links
* Hover effects
* Styled buttons
* Font Awesome icons
* Product cards
* Shopping cart sidebar
* Product detail modals
* Footer with store information and quick links

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* CORS

### Browser Storage

* `localStorage`

### Data Format

* JSON

### Version Control

* Git
* GitHub

## How the Application Works

SHOEPAVU follows a frontend-backend architecture where the frontend communicates with the backend through an API.

```text
User
  |
  v
Frontend
HTML + CSS + JavaScript
  |
  v
Fetch API
  |
  v
Express Backend
  |
  v
Products API
  |
  v
JSON Product Data
  |
  v
Frontend
  |
  v
Products displayed to the user

## File Structure

```text
SHOEPAVU/
├── index.html
├── style.css
├── LICENSE
└── images/
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/markkinus/SHOEPAVU.git
```
### 2. Navigate to the Project Folder

Open Git Bash and navigate to the SHOEPAVU project folder:

```bash
cd SHOEPAVU
```
### 3. Navigate to the Backend Folder

Navigate into the backend folder:

```bash
cd backend
```

### 4. Install Dependencies

Install the required Node.js dependencies:

```bash
npm install
```

### 5. Start the Backend Server

Start the Express backend server:

```bash
node server.js
```

### 6. Open the Frontend

Open the `frontend` folder in Visual Studio Code.

Open `index.html` using the **Live Server** extension.

The frontend will open in your web browser.

### 7. View the Website

Once the backend server is running and the frontend is opened with Live Server, the SHOEPAVU website will be displayed in your web browser.

The frontend retrieves product data from the backend API:

```text
http://localhost:3000/api/products
```

## API

SHOEPAVU uses an Express API to provide product information to the frontend.

### Get All Products

```text
GET /api/products
```

## Local Storage

SHOEPAVU uses the browser's `localStorage` to store cart and demonstration authentication information.

The shopping cart is stored using:

```text
cart
```


## Contributing and Collaboration

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Test your changes locally.
5. Commit your changes.
6. Push your changes to your branch.
7. Create a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
