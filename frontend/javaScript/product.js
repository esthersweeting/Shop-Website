import {formatPrice} from "./functions.js";
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

const g100 = document.getElementById("g-100");
g100.addEventListener("click",() => {
    price.textContent=formatPrice( currentProduct.price[0]);
});

const g250 = document.getElementById("g-250");
g250.addEventListener("click",() => {
    price.textContent=formatPrice( currentProduct.price[1]);
});
const g500 = document.getElementById("g-500");
g500.addEventListener("click",() => {
    price.textContent=formatPrice( currentProduct.price[2]);
});

