const controls = document.querySelectorAll(".abrir, .cerrar");
const navegacion  = document.querySelector("nav");

const miniaturas = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");

const plantNames = document.querySelectorAll(".galeria h3")
const plantNameModal = document.querySelector(".modal h3");

const plantInfo = document.querySelectorAll(".galeria .info");
const plantInfoModal = document.querySelector(".modal .info");

const plantPrices = document.querySelectorAll(".galeria .price");
const plantPriceModal = document.querySelector(".modal .price");

const botones = document.querySelectorAll(".modal button");
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

miniaturas.forEach(function(miniatura, index){
    rutasImg.push(miniatura.getAttribute("href"));
    titlesContent.push(miniatura.getElementsByTagName("h3").innerHTML);
    infosContent.push(miniatura.getElementsByClassName("info").innerHTML);
    pricesContent.push(miniatura.getElementsByClassName("price").innerHTML);
    

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