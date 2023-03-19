AOS.init();

const height = document.documentElement.clientHeight;
console.log(height);

const hero = document.getElementById('hero');
hero.style.height = height;