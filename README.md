# SHOEPAVU

## Introduction

SHOEPAVU is a static footwear storefront for Wahome&Co. The website presents a curated collection of sneakers, formal shoes, casual shoes, and sandals in a clean product-focused interface. Visitors can browse categories, inspect product details, view prices and ratings, and use the contact section to get in touch.

## Overview

The project is a front-end practice project built with semantic HTML and CSS. It is designed as a single-page shopping experience with navigation links that move between the home, about, products, and contact sections. Product details open as CSS-driven overlays using URL hash targets, so no JavaScript is required for the current interactions.

## Problem Statement

Customers need a simple way to discover footwear, compare basic product information, and find contact details without navigating through a complex store. A minimal storefront should make product categories, prices, ratings, and descriptions easy to scan while still presenting the brand in a polished way.

## Solution

SHOEPAVU solves this by combining a visual hero section with category cards and a featured product grid. Each product includes an image, name, price, rating, and order button. Selecting a product image opens a detail overlay with a larger product view and description. The about and contact sections provide brand context and a direct communication form.

## Features

- Hero section with brand messaging and a shop call to action
- Navigation links for Home, About, Products, and Contact sections
- Footwear categories for Sneakers, Formal, Casual, and Sandals
- Featured product grid with eight products
- Product images, prices in Kenyan shillings, and star ratings
- CSS-only product detail overlays opened through anchor links
- Contact information and a form for name, email, and message
- Footer with quick links and store details
- Font Awesome icons for the cart, ratings, and contact details

## Technologies Used

- HTML5
- CSS3
- Font Awesome

## File Structure

```text
SHOEPAVU/
├── index.html              # Main single-page storefront
├── style.css               # Layout, colors, components, and modal styles
├── README.md               # Project documentation
└── images/                 # Product, category, and hero images
	 ├── shoe-image.jpg
	 ├── sneaker-*.jpg
	 ├── formal-*.jpg
	 ├── casual-*.jpg
	 └── sandals-*.jpg
```

## Installation and Setup

### Steps

1. Clone the repository or download the project files.

	```bash
	git clone https://markkinus.github.io/SHOEPAVU/
	```

2. Open the project folder in Visual Studio Code or another code editor.

3. Open `index.html` directly in a browser, or start a local server. With VS Code and Live Server, right-click `index.html` and select **Open with Live Server**.

4. Browse the page and select product images to test the detail overlays.

This project has no package manager, build step, database, or server-side dependency. The order buttons and contact form are currently visual UI elements; connect them to an ordering or form-processing service before using the site in production.

## How to Contribute

Contributions are welcome. To propose a change:

1. Fork the repository.
2. Make your changes while preserving the existing HTML and CSS style.
3. Test the page in a modern browser at desktop and mobile widths.
4. Check that image paths, navigation links, product overlay targets, and form fields still work.
5. Commit your changes with a clear message and push the branch.
6. Open a pull request describing what changed and how it was tested.

## Collaboration Guidelines

- Keep pull requests small and focused.
- Use descriptive branch names and commit messages.
- Avoid changing unrelated layout or content in the same pull request.
- Reuse the existing color palette, spacing, and component patterns where possible.
- Add or update documentation when adding a new feature.
- Mention known limitations, such as the lack of backend order and form processing.

## Project Purpose

SHOEPAVU was created to practice HTML structure, CSS styling, single-page navigation, product cards, image presentation, CSS interactions, and user interface design.
