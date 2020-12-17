(function () {
    let header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

// berger func
(function () {
    let burgerItem = document.querySelector('.burger');
    let menu = document.querySelector('.header__nav');
    let menuCloseItem = document.querySelector('.header__nav-close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
         menu.classList.remove('header__nav_active');
    });
}());


