document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM Loaded!"); // Debugging: Cek apakah script berjalan

    // **1. Menangani klik tombol WhatsApp**
    const whatsappButton = document.querySelector(".whatsapp-button");
    if (whatsappButton) {
        whatsappButton.addEventListener("click", function () {
            window.open("https://wa.me/628XXXXXXXXXX", "_blank"); // Ganti dengan nomor WhatsApp yang benar
        });
    } else {
        console.warn("Tombol WhatsApp tidak ditemukan!"); // Debugging jika elemen tidak ada
    }

    // **2. Navbar Scroll Effect**
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.classList.add("navbar-scrolled");
            } else {
                navbar.classList.remove("navbar-scrolled");
            }
        });
    } else {
        console.warn("Navbar tidak ditemukan!");
    }

    // **3. Inisialisasi Swiper.js**  
    if (document.querySelector(".mySwiper")) {
        var swiper = new Swiper(".mySwiper", {
            loop: true, // Infinite loop
            autoplay: {
                delay: 3000, // Auto-slide setiap 3 detik
                disableOnInteraction: false, // Auto-slide tetap berjalan meskipun user berinteraksi
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            grabCursor: true,
            slidesPerView: 1,
            spaceBetween: 30,
        });
    } else {
        console.warn("Swiper container tidak ditemukan!");
    }
});
