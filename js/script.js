const controls = document.querySelectorAll(".abrir, .cerrar"); // navbar controls
const navegacion  = document.querySelector("nav");

/* To close the sidebar (if visible) directly when clicking on a section, without having to
click the "cerrar / X" button, we'll have to select hyperlinks from the navbar */ 
const links = document.querySelectorAll("nav a");  

/* shop cards: select content (img, plant names, description 
and price) to then use it in the fullscreen card (referred as modal). */ 

const miniaturas = document.querySelectorAll(".galeria a"); 
const modal = document.querySelector(".modal");
const modalCard = document.querySelector(".modalCard")
const imgModal = document.querySelector(".modal img");

const plantNames = document.querySelectorAll(".galeria h3")
const plantNameModal = document.querySelector(".modal h3");

const plantInfo = document.querySelectorAll(".galeria .info");
const plantInfoModal = document.querySelector(".modal .info");

const plantPrices = document.querySelectorAll(".galeria .price");
const plantPriceModal = document.querySelector(".modal .price");

const botones = document.querySelectorAll(".modal > button"); // left-right buttons

/* Content from the products (urls or text) will be stored in arrays so the modal card
changes as we click left and right buttons */

let imgActiva = 0;
let rutasImg = [];

let titleActivo = 0;
let titlesContent = [];

let infoActivo = 0;
let infosContent = [];

let priceActivo = 0;
let pricesContent = [];

controls.forEach(function(control){
    control.addEventListener("click", function(){
        navegacion.classList.toggle("desplegado");
    }); 
})

links.forEach(function(link){
    link.addEventListener("click", function(){
        navegacion.classList.toggle("desplegado");
    }); 
})

/* Store values in arrays */

miniaturas.forEach(function(miniatura, index){
    rutasImg.push(miniatura.getAttribute("href"));
    titlesContent.push(miniatura.getElementsByTagName("h3").innerHTML);
    infosContent.push(miniatura.getElementsByClassName("info").innerHTML);
    pricesContent.push(miniatura.getElementsByClassName("price").innerHTML);
    

    /* Clicking a card opens the FS view and takes that card's content to the FS card */

    miniatura.addEventListener("click", function(evento){
        evento.preventDefault();
        imgActiva = index;
        titleActivo = index;
        infoActivo = index;
        priceActivo = index;
        imgModal.setAttribute("src",miniatura.getAttribute("href"));
        modal.classList.add("visible");
      
        plantNameModal.innerHTML = plantNames[index].innerHTML;
        plantInfoModal.innerHTML = plantInfo[index].innerHTML;
        plantPriceModal.innerHTML = plantPrices[index].innerHTML;
    });
})

if(modal){
    modal.addEventListener("click", function(){
        modal.classList.remove("visible");
    });
}

/* Once fullscreen view is visible, clicking left-right buttons navigates throught the cards 
using the arrays created before and index features */

botones.forEach(function(boton, index){
    boton.addEventListener("click", function(evento){
        evento.stopPropagation();

        if(index == 0){
            imgActiva = imgActiva > 0 ? imgActiva - 1 : miniaturas.length - 1;
            titleActivo = titleActivo > 0 ? titleActivo - 1 : miniaturas.length - 1;
            infoActivo = infoActivo > 0 ? infoActivo - 1 : miniaturas.length - 1;
            priceActivo = priceActivo > 0 ? priceActivo - 1 : miniaturas.length - 1;
        } else {
            imgActiva = imgActiva < miniaturas.length - 1 ? imgActiva + 1 : 0;
            titleActivo = titleActivo < miniaturas.length - 1 ? titleActivo + 1 : 0;
            infoActivo = infoActivo < miniaturas.length - 1 ? infoActivo + 1 : 0;
            priceActivo = priceActivo < miniaturas.length - 1 ? priceActivo + 1 : 0;
        }
        imgModal.setAttribute("src", rutasImg[imgActiva]);
        plantNameModal.innerHTML = plantNames[titleActivo].innerHTML;
        plantInfoModal.innerHTML = plantInfo[infoActivo].innerHTML;
        plantPriceModal.innerHTML = plantPrices[priceActivo].innerHTML;

    });
})

/* Clicking the fullscreen modal card won't close it */

modalCard.addEventListener("click", function(evento){
    evento.stopPropagation();
});