<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Perfume Business</title>
    <link rel="stylesheet" href="CSS.css">
    
</head>
<body>

    <!-- Navbar -->
    <nav>
        <a href="#home" class="logo">PerfumeCo</a>
        <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <h1>Experience the Essence of Luxury</h1>
        <p>Find the perfect fragrance that defines you.</p>
    </section>

    <!-- About Section -->
    <section id="about">
        <h2>About Us</h2>
        <p>We sell perfumes that are cheap and authentic.</p>
    </section>

    <!-- Product Carousel Section -->
    <section id="products">
        <h2>Our Products</h2>
        <div class="carousel">
            <div class="carousel-item active"><img src="Pic1.1.jpg" alt="Perfume 1"></div>
            <div class="carousel-item"><img src="Pic2.1.jpg" alt="Perfume 2"></div>
            <div class="carousel-item"><img src="Pic3.1.jpg" alt="Perfume 3"></div>
            <button class="carousel-prev" onclick="prevSlide()">&#10094;</button>
            <button class="carousel-next" onclick="nextSlide()">&#10095;</button>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 PerfumeCo. All rights reserved.</p>
    </footer>

    <script src="JS.js"></script>
</body>
</html>
