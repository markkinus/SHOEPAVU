console.log("your project is connected");
const products = [
    {
        name: "Wahome Vanta",
        price: 27000,
        category: "Sneakers",
        rating: 4.5,
        image: "images/sneaker-1.jpg",
        description: "Clean, contemporary sneakers with a comfortable fit for everyday movement and effortless street style."
    },
    {
        name: "Air Yeezy",
        price: 32000,
        category: "Sneakers",
        rating: 4.5,
        image: "images/sneaker-2.jpg",
        description: "Bold statement sneakers with a distinctive silhouette, cushioned comfort, and standout urban appeal."
    },
    {
        name: "Noir",
        price: 30850,
        category: "Formal",
        rating: 4,
        image: "images/formal-1.jpg",
        description: "Sleek black formal shoes that bring refined style and polished confidence to workdays and special occasions."
    },
    {
        name: "Wahome Royale",
        price: 117000,
        category: "Formal",
        rating: 4.5,
        image: "images/formal-2.jpg",
        description: "Premium formal shoes with an elegant finish, crafted to make a sophisticated impression at every occasion."
    },
    {
        name: "Elegance",
        price: 23790,
        category: "Casual",
        rating: 4,
        image: "images/casual-1.jpg",
        description: "Versatile casual shoes with a graceful profile and dependable comfort for relaxed days and smart outings."
    },
    {
        name: "Urban",
        price: 27000,
        category: "Casual",
        rating: 4.5,
        image: "images/casual-2.jpg",
        description: "Easygoing everyday shoes with a modern urban look, made for comfort from morning plans to evening walks."
    },
    {
        name: "Sol",
        price: 3600,
        category: "Sandals",
        rating: 4,
        image: "images/sandals-1.jpg",
        description: "Lightweight sandals with an open, breezy design for warm days, casual plans, and comfortable daily wear."
    },
    {
        name: "Don Tire",
        price: 4300,
        category: "Sandals",
        rating: 4.5,
        image: "images/sandals-2.jpg",
        description: "Relaxed, easy-to-wear sandals offering dependable comfort and a simple style for sunny everyday adventures."
    }
    
]

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