const menu = document.querySelector('.header__navigation');
const menuBtn = document.querySelector('.header__hamburger');
const body = document.body;
const menuBG = document.querySelector('.header__menu-box');

if (menu && menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.removeAttribute('data-aos'); 
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('lock');
        menuBG.classList.toggle('menu-bg');
    })

    menuBG.addEventListener('click', e => {
        if (e.target.classList.contains('menu-bg')) {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            body.classList.remove('lock');
            menuBG.classList.remove('menu-bg');
        }
        
    })

    menu.querySelectorAll('.header__menu-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menuBtn.classList.remove('active');
            body.classList.remove('lock');
            menuBG.classList.remove('menu-bg');
        })
    })
}

/*=======================================================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        event.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})