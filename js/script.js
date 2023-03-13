window.onscroll = function showHeader () {
    let header = document.querySelector(".header");

    if(window.pageYOffset > 200) {
        header.classList.add('header_fixed');
    }
    if(window.pageYOffset < 200) {
        header.classList.remove('header_fixed');
    }
}
