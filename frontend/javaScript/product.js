import {formatPrice} from "./functions.js";
import {sizes} from "./products.js";
let currentProduct = JSON.parse(localStorage.getItem("currentProduct"));

const type = document.getElementById("p-link-type-id");
type.textContent = currentProduct.type;

const pageName = document.getElementById("p-link-page-id");
pageName.textContent = currentProduct.name;

const name = document.querySelector(".p-name");
name.textContent = currentProduct.name;

const price = document.querySelector(".p-price");
price.textContent = formatPrice( currentProduct.price[0]);

const description = document.querySelector(".p-description");
description.textContent = currentProduct.description;

const sizeButtons= document.getElementById("p-size-buttons-id");

function setupSizeButton (size,index){
    const btn = document.createElement ("button");
    btn.className = "p-size-button";
    btn.textContent=size;
    btn.id = "g-" + size;
    btn.addEventListener("click",() => {
        price.textContent=formatPrice( currentProduct.price[index]);
    });
    sizeButtons.appendChild(btn);
    
}


sizes.forEach(setupSizeButton);


