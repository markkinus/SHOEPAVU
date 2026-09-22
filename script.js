console.log("your project is connected");

// Cart functionality
let cart = []

// get the cart elements in js
const cartButton = document.querySelector(".cart");
const cartContainer = document.getElementById("cart-container");
const cartItems = document.getElementById("cart-items");
const closeCart = document.getElementById("close-cart");

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
    })
    console.log(cart)
}


// Search functionality
const searchInput = document.getElementById("searchInput");
const productCards = document.querySelectorAll(".product-card");

// Function to search for products
function searchProducts() {
    // Get the search term
    const searchTerm = searchInput.value.toLowerCase();
    productCards.forEach(function(product)  {
        // Get the product name
        const productName = product.querySelector("h3").textContent.toLowerCase();
        // Check if the product name includes the search term
        if (productName.includes(searchTerm)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
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