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