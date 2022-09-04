const openBtn = document.querySelector(".header-part__nav-btn")
const siteHeader = document.querySelector("#site-header")
const headerTopList = document.querySelector(".header-top-list")
openBtn.addEventListener("click", () => {
    siteHeader.classList.toggle("header-top-list-on")
})



// Video Slider Code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay:true,
    loop:true,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});