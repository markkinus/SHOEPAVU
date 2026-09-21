console.log("your project is connected");

// Cart functionality
let cart = []

// Get the order buttons
const orderButtons = document.querySelectorAll(".product-card button")

// Add event listener to each order button
orderButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Get the product card that contains the button
        const productCard = button.closest(".product-card");
        console.log(productCard);
    })
})


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