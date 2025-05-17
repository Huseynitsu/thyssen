$(document).ready(function () {
    window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 80);
    });

    $(".mobile_btn").on("click", function () {
        $("nav").toggleClass("navOpen");
        $("html, body").toggleClass("locked");
        $(".mobile_btn").toggleClass("opened");
    });

    const colorArray = [
        '#A8D5BA', // Soft green (bitki tonu)
        '#DCEFD8', // Pale mint (təzə hava hissi)
        '#F3E9DC', // Cream beige (ağac, mebel tonu)
        '#B0C4B1', // Grey green (daş, beton hissi)
        '#E6D5B8', // Light wood tone
        '#C8D5B9', // Pastel green
        '#EAE4E9', // Soft white pink
        '#D4A373', // Rustic brown
        '#ADC2A9', // Olive-grey mix
        '#C2B280'  // Natural earth (torpaq)
    ];

    // Bütün .card__bx div-lərinə random rəng ver
    document.querySelectorAll('.service_cards .card__bx').forEach(card => {
        const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        card.style.setProperty('--clr', randomColor);
    });

    $(".head-slider .sliderSlick").slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        swipe: true,
        fade: true,
        cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
        touchThreshold: 100,
        pauseOnHover: true,
        touchMove: true,
        draggable: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        arrows: false,
    });

    let swiperSertifikat = new Swiper(".swiper_products", {
        loop: true,
        slidesPerView: 1.2,
        spaceBetween: 10,
        autoplay: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 4.2,
                spaceBetween: 30,
            },
        },
    });

    // Custom ox clickləri
    $(".slider-nav .slick-prev").click(function () {
        $(".sliderSlick").slick("slickPrev");
    });

    $(".slider-nav .slick-next").click(function () {
        $(".sliderSlick").slick("slickNext");
    });

    const $options = $(".option");
    let currentIndex = 0;
    let interval;

    function activateOption(index) {
        $options.removeClass("active");
        $options.eq(index).addClass("active");
        currentIndex = index;
    }

    // Click event
    $options.click(function () {
        clearInterval(interval); // Autoplayi dayandır click olanda
        activateOption($(this).index());
        startAutoplay(); // Sonra yenidən autoplay başlasın
    });

    // Autoplay funksiyası
    function startAutoplay() {
        interval = setInterval(function () {
            let nextIndex = (currentIndex + 1) % $options.length;
            activateOption(nextIndex);
        }, 3000); // 3 saniyəlik dövr
    }

    // İlk aktiv elementi təyin et və autoplayi başlat
    activateOption(0);
    startAutoplay();
});
