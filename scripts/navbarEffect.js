//Sticky Navbar
window.onscroll = function() {stickyNavBar()};

const header = document.getElementById('header');
const catalogueBand = document.getElementById('catalogueBand');

function stickyNavBar() {
    if (window.pageYOffset >= catalogueBand.offsetTop) {
        header.classList.add('sticky');
        catalogueBand.style.paddingTop = '100px';
    } else {
        header.classList.remove('sticky');
        catalogueBand.style.paddingTop = '0px';
    }
}


//Menu Déroulant Mobile
let hiddenMenuMobile = document.getElementById('hiddenMenuMobile');

function openHiddenMenuMobile(){
    if(hiddenMenuMobile.classList.contains('hidden-menu-mobile')){
        hiddenMenuMobile.classList.remove('hidden-menu-mobile');
        hiddenMenuMobile.classList.add('hidden-menu-mobile-opened');
    }else{
        hiddenMenuMobile.classList.remove('hidden-menu-mobile-opened');
        hiddenMenuMobile.classList.add('hidden-menu-mobile');
    }
}