const botones = document.querySelectorAll(".abrir, .cerrar");
const navegacion  = document.querySelector("nav");

botones.forEach(function(boton){
    boton.addEventListener("click", function(){
        navegacion.classList.toggle("desplegado");
    }); 
})