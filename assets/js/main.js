AOS.init();

const clientHeight = document.documentElement.clientHeight;

const hero = document.getElementById('hero');
hero.style.height = clientHeight;
alert(clientHeight);