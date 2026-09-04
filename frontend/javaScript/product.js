
let currentProduct = JSON.parse(localStorage.getItem("currentProduct"));

const type = document.getElementById("p-link-type-id");
type.textContent = currentProduct.type;

const pageName = document.getElementById("p-link-page-id");
pageName.textContent = currentProduct.name;

const name = document.querySelector(".p-name");
name.textContent = currentProduct.name;

const price = document.querySelector(".p-price");
price.textContent = "£" + currentProduct.price[0].toFixed(2);

const description = document.querySelector(".p-description");
description.textContent = currentProduct.description;

const g100 = document.getElementById("g-100");
const g250 = document.getElementById("g-250");
const g500 = document.getElementById("g-500");

