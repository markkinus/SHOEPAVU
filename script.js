console.log("your project is connected");

let allProducts = []

// Cart functionality
let cart = []

// get the cart elements in js
const cartButton = document.querySelector(".cart");
const cartContainer = document.getElementById("cart-container");
const cartItems = document.getElementById("cart-items");
const closeCart = document.getElementById("close-cart");
const cartTotal = document.getElementById("cart-total")

// console.log(cartButton);
// console.log(cartContainer);
// console.log(cartItems);
// console.log(closeCart);

// add a click event to the cart button
cartButton.addEventListener("click", function(event) {
    event.preventDefault()

    // display the cart container
    cartContainer.style.display = "block"
})

// add a click event to the close cart button
closeCart.addEventListener("click", function() {
    //hide the cart container
    cartContainer.style.display = "none"
})

// Get the order buttons
const orderButtons = document.querySelectorAll(".product-card button")

// Add event listener to each order button
orderButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        // Get the product card that contains the button
        const productCard = button.closest(".product-card");
        // console.log(productCard);

        // get teh product name
        const productName = productCard.querySelector("h3").textContent
        // console.log(productName)

        // get the product price
        const productPrice = productCard.querySelector(".price").textContent
        // console.log(productPrice)

        //get the product iamge
        const productImage = productCard.querySelector("img").src
        // console.log(productImage)

        //create the cart product
        const cartProduct = {
            name: productName, 
            price: productPrice, 
            image: productImage,
            quantity: 1
        }

        // check if the product being ordered already exists
        const existingProduct = cart.find(function(item) {
            return item.name === productName
        })
        console.log(existingProduct)

        //using if...else to add or increase quantity
        if (existingProduct) {
            existingProduct.quantity++
        } else {
            cart.push(cartProduct)
        }
        //add products to cart
        // cart.push(cartProduct)
        console.log(cart)

        displayCart()
    })
})

// function to display products inside cart
function displayCart() {
    //clear the cart area before displaying the products
    cartItems.innerHTML = ""

    //start the total at 0
    let total = 0;

    // to go through each product in cart
    cart.forEach(function(item) {
        // create a new div for the cart product
        const cartItem = document.createElement("div")
        // add the class item class to the div
        cartItem.classList.add("cart-item")
        // place the product information inside
        cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>Quantity: ${item.quantity}</p>
        `
        //put the cart item to the cart container
        cartItems.appendChild(cartItem)

        // make the price only numeric by removing KSH and comma
        const price = Number(item.price.replace("KSH ", "").replace(",", ""))

        //calculate the product subtotal
        const subtotal = price * item.quantity

        //add the subtotal to the total
        total = total + subtotal
    })

    //display the total price in the cart
    cartTotal.textContent = total.toLocaleString()
    console.log(cart)
}


// Search functionality
const searchInput = document.getElementById("searchInput");

// Function to search for products
function searchProducts() {
    // Get the search term
    const searchTerm = searchInput.value.toLowerCase();

    // Filter the products
    const filteredProducts = []

    // Loop through all products
    allProducts.forEach(function(product)  {
        // Get the product name
        const productName = product.name.toLowerCase();
        // Check if the product name includes the search term
        if (productName.includes(searchTerm)) {
            // Add the product to the filteredProducts array
            filteredProducts.push(product)
        }
    });
    displayProducts(filteredProducts)
}

searchInput.addEventListener("input", searchProducts);

// Category functionality
// Get the category links
const categoryLinks = document.querySelectorAll(".category");
// console.log(categoryLinks);
categoryLinks.forEach(function(categoryLink) {
    categoryLink.addEventListener("click", function(event){
        event.preventDefault();
        // Get the category name
        const categoryName = categoryLink.querySelector("h3").textContent;
         console.log("Selected category:", categoryName);
        //use the category name to filter the products
        productCards.forEach(function(product) {
            // Get each product's category 
            const productCategory = product.dataset.category;
            console.log(productCategory);
            if (productCategory === categoryName) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        })
    })
    
})


fetch("products.json")
    .then(function(response) {
        return response.json()
    })
    .then(function(products) {
        
        allProducts = products

        displayProducts(allProducts)
    })

    .catch(function(error) {
        console.log("Error fetching products:", error)
    })

    const productGrid = document.getElementById("product-grid");

    function displayProducts(products) {

        //clear the product area
        productGrid.innerHTML = "";

        //loop through each product
        products.forEach(function(product) {

            //create a product card div
            const productCard = document.createElement("div");
            //add the product-card class
            productCard.classList.add("product-card");

            //place the product information inside
            productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">KSH ${product.price.toLocaleString()}</p>
            <p>Category: ${product.category}</p>
            <p>Rating: ${product.rating}</p>
            <p>${product.description}</p>
            <button>Order Now</button>
            `
            //append the product card to the product grid
            productGrid.appendChild(productCard)
        })
    }