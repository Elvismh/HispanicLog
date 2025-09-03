// Mobile menu toggle & smooth anchors
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');
if (toggle) toggle.addEventListener('click', ()=> menu.classList.toggle('open'));

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      document.querySelector(href).scrollIntoView({behavior:'smooth'});
      menu?.classList.remove('open');
    }
  })
});
console.log('Hispanic Logistics • UI loaded');
