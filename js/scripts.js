window.addEventListener("scroll" , function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky" , window .scrollY > 0)
})


const menu = document.getElementById('navbar');
const burguer = document.getElementById('burguer');


burguer.addEventListener('click', ()=>{
        menu.classList.toggle('show-menu');
})

window.addEventListener('click', e =>{
    if( menu.classList.contains('show-menu') && e.target != burguer && e.target !=menu ){
        menu.classList.remove('show-menu');
    }
})


