// products.js

// --- Product Data ---
// To add a new product, simply add a new object to this array.
// Ensure image paths are correct relative to your products.html file.
// IMPORTANT: Ensure the 'category' matches one of your desired categories exactly.
const productsData = [
    {
        name: "Classic Silk Tie - Navy Blue",
        imagePath: "assets/tieall.png",
        price: "৳ 1250",
        productLink: "product-details-navy.html",
        category: "Ties"
    },
    {
        name: "Modern Slim Tie - Charcoal Grey",
        imagePath: "assets/23tie.jpg",
        price: "৳ 1100",
        productLink: "product-details-charcoal.html",
        category: "Ties"
    },
    {
        name: "Elegant Cufflinks - Silver",
        imagePath: "assets/family-crest-cufflinks.jpg",
        price: "৳ 850",
        productLink: "product-details-cufflinks.html",
        category: "Cufflinks"
    },
    {
        name: "Sleek Tie Bar - Gunmetal",
        imagePath: "assets/gunmetal.png",
        price: "৳ 600",
        productLink: "product-details-tiebar.html",
        category: "Tie Bars"
    },
    {
        name: "Patterned Pocket Square - Floral",
        imagePath: "assets/pocket-square.png",
        price: "৳ 450",
        productLink: "product-details-pocketsquare.html",
        category: "Pocket Squares"
    },
    {
        name: "Luxury Bow Tie - Velvet Black",
        imagePath: "assets/bow-tie.jpg", // Ensure you have this image
        price: "৳ 980",
        productLink: "product-details-bow-black.html",
        category: "Bow Ties"
    },
    {
        name: "Striped Business Tie - Burgundy",
        imagePath: "assets/striped-tie.jpg", // Ensure you have this image
        price: "৳ 1300",
        productLink: "product-details-striped.html",
        category: "Ties"
    },
    {
        name: "Paisley Silk Tie - Green",
        imagePath: "assets/paisley-tie.jpg", // Ensure you have this image
        price: "৳ 1400",
        productLink: "product-details-paisley.html",
        category: "Ties"
    },
    {
        name: "Geometric Bow Tie - Blue",
        imagePath: "assets/geometric-bow-tie.jpg", // Ensure you have this image
        price: "৳ 1050",
        productLink: "product-details-geometric-bow.html",
        category: "Bow Ties"
    },
    {
        name: "Engraved Tie Bar - Silver",
        imagePath: "assets/engraved-tie-bar.jpg", // Ensure you have this image
        price: "৳ 700",
        productLink: "product-details-engraved-tiebar.html",
        category: "Tie Bars"
    },
    {
        name: "Mother of Pearl Cufflinks",
        imagePath: "assets/mother-of-pearl-cufflinks.jpg", // Ensure you have this image
        price: "৳ 950",
        productLink: "product-details-mother-of-pearl.html",
        category: "Cufflinks"
    },
    {
        name: "Solid Color Pocket Square - White",
        imagePath: "assets/white-pocket-square.jpg", // Ensure you have this image
        price: "৳ 380",
        productLink: "product-details-white-pocketsquare.html",
        category: "Pocket Squares"
    }
    // Add more products here following the same structure:
    // {
    //     name: "New Product Name",
    //     imagePath: "path/to/new-product-image.jpg",
    //     price: "৳ 999",
    //     productLink: "new-product-details.html",
    //     category: "New Category" // Must match a category in your nav or a new one you define
    // },
];

// --- Product Rendering Function ---
function renderProducts() {
    const productsCategoriesContainer = document.getElementById('products-categories-container');
    if (!productsCategoriesContainer) {
        console.error('Products categories container not found!');
        return;
    }

    productsCategoriesContainer.innerHTML = ''; // Clear existing content

    // Group products by category
    const categorizedProducts = productsData.reduce((acc, product) => {
        const category = product.category || 'Uncategorized'; // Default to 'Uncategorized' if no category is set
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {});

    // Define a preferred order for categories (optional, but good for consistency)
    const categoryOrder = ["Ties", "Bow Ties", "Tie Bars", "Cufflinks", "Pocket Squares", "Uncategorized"];

    // Get all unique categories and sort them by preferred order
    const sortedCategories = Object.keys(categorizedProducts).sort((a, b) => {
        const indexA = categoryOrder.indexOf(a);
        const indexB = categoryOrder.indexOf(b);

        if (indexA === -1 && indexB === -1) return a.localeCompare(b); // Both not in order, sort alphabetically
        if (indexA === -1) return 1; // A not in order, B is, so B comes first
        if (indexB === -1) return -1; // B not in order, A is, so A comes first
        return indexA - indexB; // Sort by defined order
    });


    sortedCategories.forEach(category => {
        const categorySection = document.createElement('section');
        categorySection.classList.add('category-section');
        // Create an ID for direct linking from navigation (e.g., #Ties)
        categorySection.id = category.replace(/\s+/g, '-'); // Replaces spaces with hyphens for ID

        const categoryHeading = document.createElement('h2');
        categoryHeading.classList.add('category-heading');
        categoryHeading.textContent = category;

        const productsGrid = document.createElement('div');
        productsGrid.classList.add('products__grid'); // Reuse existing grid style

        categorizedProducts[category].forEach(product => {
            // Create product card element
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            // Create image element
            const productImage = document.createElement('img');
            productImage.src = product.imagePath;
            productImage.alt = product.name;
            // Add onerror to display a placeholder if image fails to load
            productImage.onerror = function() {
                this.src = 'https://placehold.co/400x200/cccccc/333333?text=Image+Not+Found';
                this.alt = 'Image not available';
            };

            // Create product name element
            const productName = document.createElement('h3');
            productName.textContent = product.name;

            // Create product price element
            const productPrice = document.createElement('p');
            productPrice.classList.add('product-price');
            productPrice.textContent = product.price;

            // Create product link button
            const productLinkBtn = document.createElement('a');
            productLinkBtn.href = product.productLink;
            productLinkBtn.classList.add('product-link-btn');
            productLinkBtn.textContent = 'View Product';
            // Open in new tab if it's an external link or a full details page
            if (product.productLink.startsWith('http') || product.productLink.endsWith('.html')) {
                productLinkBtn.target = '_blank';
            }

            // Append elements to the product card
            productCard.appendChild(productImage);
            productCard.appendChild(productName);
            productCard.appendChild(productPrice);
            productCard.appendChild(productLinkBtn);

            // Append the product card to the grid
            productsGrid.appendChild(productCard);
        });

        // Append heading and grid to the category section
        categorySection.appendChild(categoryHeading);
        categorySection.appendChild(productsGrid);

        // Append the category section to the main container
        productsCategoriesContainer.appendChild(categorySection);
    });
}

// --- Initialize Products on Page Load ---
document.addEventListener('DOMContentLoaded', renderProducts);

// Optional: If you want ScrollReveal animations on product cards
// ScrollReveal().reveal(".product-card", {
//     distance: "50px",
//     origin: "bottom",
//     duration: 1000,
//     interval: 100 // Stagger animation for each card
// });
