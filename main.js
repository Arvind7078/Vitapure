//Menu-bar Toggle

const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
const searchBox = document.querySelector('.header .search-form');

toggle.addEventListener('click', ()=>{
    nav.classList.toggle('show-menu')
    searchBox.classList.remove('show-search')
});

//Search bar display

const search = document.querySelector('.right-menu .search');
search.onclick = () =>{
    searchBox.classList.toggle('show-search')
    nav.classList.remove('show-menu')
}

//Remove Menu Bar

const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    nav.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click',linkAction))

//change active link

const linkColor = document.querySelectorAll('.nav-link');
function colorLink(){
    if(colorLink){
        linkColor.forEach(l => l.classList.remove('active'))
        this.classList.add('active')
    }
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

//Slider home section

var swiper = new Swiper(".home-container", {
    loop : true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });