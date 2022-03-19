// CURSOR
const cursor = document.querySelector('.cursor');
const arrow = document.querySelector('.arrow');
const links = document.body.querySelectorAll('.link');
const black = document.querySelectorAll('.black');

document.body.addEventListener('mousemove', e => {
    let x, y;
    x = e.clientX;
    y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y  + "px";
});

links.forEach((item)=> {
    item.addEventListener("mousemove", e => {
        cursor.style.background = "#A9A32A";
    });
    item.addEventListener("mouseleave", e => {
        cursor.style.background = "transparent";
    });
});

black.forEach((item) => {
    item.addEventListener("mousemove", e => {
        cursor.style.border = "2px solid #303030";
        arrow.style.fill = "#303030";
    });
    item.addEventListener("mouseleave", e => {
        cursor.style.border = "2px solid #fff";
        arrow.style.fill = "#fff";
    });
});

// TABS
const itemsTab = document.querySelectorAll('.rate__content--list-item');
const tabsItems = document.querySelectorAll('.grid');
itemsTab.forEach((item) => {
    item.addEventListener('click', e => {
        let tabId = item.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);
        itemsTab.forEach((item) => {
            item.classList.remove('active');
        });
        tabsItems.forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
        currentTab.classList.add('active');
    });
});

//SLIDER
const swiper = new Swiper('.swiper', {
    // arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

//SLISER CLIENTS
const swiperClients = new Swiper('.slider__swiper', {
    //new class
    slideClass: 'slider__wrapper--item',
    wrapperClass: 'slider__wrapper',
    // arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
