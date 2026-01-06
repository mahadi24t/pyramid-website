# Pyramid Tie Collection

A modern, responsive e-commerce website for Pyramid Tie Collection, a leading manufacturer of premium ties and accessories. This project showcases an elegant landing page with product listings, contact forms, and interactive features built using HTML, CSS, and JavaScript.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation and Usage](#installation-and-usage)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Description

Pyramid Tie Collection is a static website designed for a B2B and retail tie manufacturing business. The site includes a homepage with company branding, product highlights, brand history, and a contact section. A dedicated products page dynamically displays categorized products (Ties, Bow Ties, Tie Bars, Cufflinks, Pocket Squares) with images, prices, and links.

The website emphasizes elegance, responsiveness, and user engagement through smooth animations, sliders, and interactive elements.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices.
- **Interactive Navigation**: Hamburger menu for mobile, product category dropdown, and smooth scrolling.
- **Swiper Slider**: Auto-playing image carousel on the homepage with fade transitions.
- **Product Showcase**: Dynamic product grid on the products page, categorized and filterable.
- **Contact Form**: Functional contact form with email validation and submission handling.
- **Social Media Integration**: Links to Facebook and Instagram for customer engagement.
- **Animations**: ScrollReveal for smooth reveal animations on page elements.
- **SEO Optimized**: Includes meta tags, favicons, and structured content.
- **Accessibility**: Proper alt texts, semantic HTML, and keyboard navigation support.

## Technologies Used

- **HTML5**: Semantic markup for structure.
- **CSS3**: Custom styles with CSS Grid, Flexbox, and media queries for responsiveness.
- **JavaScript (ES6+)**: Interactive functionality, form handling, and dynamic content rendering.
- **Swiper.js**: For the homepage slider.
- **ScrollReveal**: For scroll-based animations.
- **Remixicon**: Icon library for UI elements.
- **Google Fonts**: 'Lora' and 'Poppins' for typography, 'Great Vibes' for branding.
- **CDNs**: Hosted libraries for Swiper and ScrollReveal to reduce load times.

## Project Structure

```
pyramid-website/
├── index.html              # Homepage with landing sections
├── products.html           # Products page with dynamic grid
├── main.js                 # Main JavaScript for navigation, forms, and Swiper
├── products.js             # Product data and rendering logic
├── styles.css              # Comprehensive CSS styles
├── assets/                 # Images and media files
│   ├── logo.jpg
│   ├── tieall.png
│   ├── cufflinks.jpg
│   └── ... (other product and UI images)
├── favicon/                # Favicon files
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── ...
└── README.md               # This file
```

## Installation and Usage

Since this is a static website, no server-side setup is required. Follow these steps to run the project locally:

1. **Clone or Download**: Download the project files to your local machine.

2. **Open in Browser**: 
   - Navigate to the project directory.
   - Open `index.html` in your web browser to view the homepage.
   - Alternatively, use a local server for better development experience:
     - If you have Python installed: `python -m http.server 8000`
     - If you have Node.js: Install `http-server` globally (`npm install -g http-server`) and run `http-server`
     - Then open `http://localhost:8000/index.html`

3. **Navigate the Site**:
   - Use the navigation menu to explore sections like Home, About, Products, and Contact.
   - On the Products page, browse categorized items and click "View Product" (links are placeholders).
   - Fill out the contact form to test form validation.

## Customization

- **Adding Products**: Edit `products.js` to add new products to the `productsData` array. Ensure images are placed in the `assets/` folder.
- **Styling**: Modify `styles.css` for color schemes, fonts, or layouts. Key variables are defined in `:root`.
- **Content**: Update text, images, and links in `index.html` and `products.html`.
- **Forms**: Customize form behavior in `main.js`, e.g., integrate with a backend API for real submissions.
- **Animations**: Adjust ScrollReveal settings in `main.js` for different effects.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/new-feature`).
3. Make your changes and test thoroughly.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/new-feature`).
6. Create a Pull Request.

Please ensure code follows best practices and is well-commented.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries or support:

- **Email**: pyramidtie129@gmail.com
- **Phone**: +8801339629068
- **Social Media**:
  - [Facebook](https://www.facebook.com/share/1BZMhnioeu/)
  - [Instagram](https://www.instagram.com/p/DIt2YG0zwSl/)

Pyramid Tie Collection - Crafting Elegance Since 1995.
