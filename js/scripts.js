let menu = document.getElementById('navbar');
let burguer = document.getElementById('menu--burguer');

burguer.addEventListener('click', function(){
    menu.classList.toggle("show-menu");
})



window.addEventListener("scroll" , function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky" , window .scrollY > 0)
})




