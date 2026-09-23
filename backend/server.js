const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

const shoeProducts = [
    {
        id: 1,
        name: "Wahome Vanta",
        category: "Sneakers",
        price: 27000,
        rating: 4.5,
        image: "/images/sneaker-1.jpg",
        description: "Clean, contemporary sneakers with a comfortable fit for everyday movement and effortless street style."
    },
    {
        id: 2,
        name: "Air Yeezy",
        category: "Sneakers",
        price: 32000,
        rating: 4.5,
        image: "/images/sneaker-2.jpg",
        description: "Stylish sneakers designed for comfort and a bold everyday look."
    },
    {
        id: 3,
        name: "Noir",
        category: "Formal",
        price: 30850,
        rating: 4.5,
        image: "/images/formal-1.jpg",
        description: "Sleek black formal shoes that bring refined style and polished confidence to workdays and special occasions."
    },
    {
        id: 4,
        name: "Wahome Royale",
        category: "Formal",
        price: 117000,
        rating: 4.5,
        image: "/images/formal-2.jpg",
        description: "Premium formal shoes designed for a sophisticated and elegant appearance."
    },
    {
        id: 5,
        name: "Elegance",
        category: "Casual",
        price: 23790,
        rating: 4.5,
        image: "/images/casual-1.jpg",
        description: "Classic casual footwear combining comfort with timeless style."
    },
    {
        id: 6,
        name: "Urban",
        category: "Casual",
        price: 27000,
        rating: 4.5,
        image: "/images/casual-2.jpg",
        description: "Comfortable casual shoes made for everyday urban adventures."
    },
    {
        id: 7,
        name: "Sol",
        category: "Sandals",
        price: 3600,
        rating: 4.5,
        image: "/images/sandals-1.jpg",
        description: "Lightweight sandals designed for relaxed everyday comfort."
    },
    {
        id: 8,
        name: "Don Tire",
        category: "Sandals",
        price: 4300,
        rating: 4.5,
        image: "/images/sandals-2.jpg",
        description: "Durable and comfortable sandals suitable for casual everyday wear."
    }
];

app.get("/api/products", (req, res) => {
    res.json(shoeProducts);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});