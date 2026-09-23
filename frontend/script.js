console.log("your project is connected");

let allProducts = []

// Cart functionality
// get the cart from local storage
let cart =  JSON.parse(localStorage.getItem("cart")) || []

// save the cart to local storage
function saveCart() {
    //convert the cart to a string to store in local storage
    localStorage.setItem("cart", JSON.stringify(cart))
}

// get the cart elements in js
const cartButton = document.querySelector(".cart");
const cartContainer = document.getElementById("cart-container");
const cartItems = document.getElementById("cart-items");
const closeCart = document.getElementById("close-cart");
const cartTotal = document.getElementById("cart-total")

const cartCount = document.getElementById("cart-count");

// Function to update the cart count
function updateCartCount() {
    let totalQuantity = 0

    //loop through each item in the cart
    cart.forEach(function(item) {
        //add the quantity to the total
        totalQuantity += item.quantity
    })

    //update the cart count
    cartCount.textContent = totalQuantity
}

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
        <p>Price: ${item.price.toLocaleString()}</p>
        <div class="quantity-controls">
        <button class="decrease-button">-</button>
        <span class="quantity">${item.quantity}</span>
        <button class="increase-button">+</button>
        </div>
        <button class="remove-button">Remove</button>
        `
        //put the cart item to the cart container
        cartItems.appendChild(cartItem)

       //get the decrease button
        const decreaseButton = cartItem.querySelector(".decrease-button")

        //add a click event to the decrease button
        decreaseButton.addEventListener("click", function() {

            //check if the quantity is greater than 1
            if (item.quantity > 1) {
            //decrease the quantity
            item.quantity--
            saveCart()
            //display the cart
            displayCart()
            updateCartCount()
            }
        })
        
        //get the increase button
        const increaseButton = cartItem.querySelector(".increase-button")

        //add a click event to the increase button
        increaseButton.addEventListener("click", function() {
            //increase the quantity
            item.quantity++
            saveCart()
            //display the cart
            displayCart()
            updateCartCount()
        })
        
        //get the remove button
        const removeButton = cartItem.querySelector(".remove-button")

        //add a click event to the remove button
        removeButton.addEventListener("click", function() {
            //remove the product from the cart
            cart = cart.filter(function(product) {
                return product.name !== item.name
            })
            saveCart()
            //display the cart
            displayCart()
            updateCartCount()
        })


        //calculate the product subtotal
        const subtotal = item.price * item.quantity

        //add the subtotal to the total
        total = total + subtotal
    })

    //display the total price in the cart
    cartTotal.textContent = total.toLocaleString()
    console.log(cart)
}

// Checkout functionality
// Get the checkout button
const checkoutButton = document.getElementById("checkout-button");

// Add a click event to the checkout button
checkoutButton.addEventListener("click", function() {
    // Check if the cart is empty
    if (cart.length === 0) {
        alert("Your cart is empty")
        return
    }
    // Display a success message
    alert("Your order has been placed successfully!")
    // Clear the cart
    cart = []
    saveCart()
    displayCart()
    updateCartCount()
})


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
        //  console.log(categoryName);

        //create an empty array for filtered products
        const filteredProducts = []

        //loop through all products
        allProducts.forEach(function(product) {

            // Check if the product category matches the category name
            if (product.category === categoryName) {
                // Add the product to the filteredProducts array
                filteredProducts.push(product)
            }
        })
        // Display the matching products
        displayProducts(filteredProducts)

    })

})


// Fetch products
fetch("http://localhost:3000/api/products")
// Convert the response to JSON
    .then(function(response) {
        return response.json()
    })
    // Display the products
    .then(function(products) {

        // store the products
        allProducts = products

        // Display the products
        displayProducts(allProducts)
    })

    // Handle errors
    .catch(function(error) {
        console.log("Error fetching products:", error)
    })

    // Get the product grid
    const productGrid = document.getElementById("product-grid");

    // Function to display products
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
            <div class="rating-stars">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            </div>
            <p>${product.description}</p>
            <button>Order Now</button>
            `
            //append the product card to the product grid
            productGrid.appendChild(productCard)

            //get the order button
            const orderButton = productCard.querySelector("button")

            //add a click event to the order button
            orderButton.addEventListener("click", function() {

                //check if the product is already in the cart
                const existingProduct = cart.find(function(item) {
                    return item.name === product.name
                })

                //if the product is in the cart, increase the quantity
                if (existingProduct) {
                    existingProduct.quantity++
                } else {

                    //create a new cart product
                    const cartProduct = {
                        name: product.name,
                        image: product.image,
                        price: product.price,
                        quantity: 1
                    }

                    //add the cart product to the cart
                    cart.push(cartProduct)
                }
                
                console.log("Cart:", cart)
                saveCart()
                displayCart()

                //update the cart count
                updateCartCount()

                //show ordered message
            alert("Product added to cart successfully")
            })
        })
    }

    displayCart()
    updateCartCount()

    //contact functionality
    // Get the contact form
    const contactForm = document.querySelector(".contact-form");

    // Get the contact message
    const contactMessage = document.getElementById("contact-message");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        contactMessage.textContent = "Your message has been sent successfully!"

        contactForm.reset();
    })