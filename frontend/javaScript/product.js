import {formatPrice} from "./functions.js";
import {sizes, products,Item, calcKey} from "./products.js";
import { hashBasket } from "./mapBasket.js";

// Stores the index of the most recently clicked size
//This aligns with sizes in products.js 
let clickedSizeIndex= 0;

let currentProduct = JSON.parse(localStorage.getItem("currentProduct"));


let pStatusText = document.getElementById("p-status-text");

const quantControl = document.getElementById("p-quantity-id");

//Stores how many have already been ordered of each product
const orderedArray=[];
sizes.forEach((size,index)=>{
    if (hashBasket.get(calcKey(currentProduct,index))!= null){
        orderedArray.push(hashBasket.get(calcKey(currentProduct,index)).quantity);
    }
    else{
        orderedArray.push(0);
    }
    console.log(orderedArray);
    console.log(hashBasket.get(calcKey(currentProduct,index)));
    
});
let productStatus = document.getElementById("p-status");
//Sets the thing to say in stock or out of stock
function checkStatus(){
    if (currentProduct.stock[clickedSizeIndex]-orderedArray[clickedSizeIndex]<=0){
        productStatus.className= "p-status p-status-out-of-stock";
        pStatusText.textContent = "Out of Stock"
        quantControl.value=0;
    }
    else{
        productStatus.className= "p-status";
        pStatusText.textContent = "In Stock"
        quantControl.value=1;
    }      

}
checkStatus();

quantControl.addEventListener('blur', () => {
  const max = currentProduct.stock[clickedSizeIndex]-orderedArray[clickedSizeIndex]
  if (parseInt(quantControl.value) > max) {
    quantControl.value = max;
  }
  if (parseInt(quantControl.value) < 0) {
    quantControl.value = 0;
  }
});




//Setup a link to the shop page where when clicked only shows elements of the current type
//Shop renders the page based of "type" in local storage
const type = document.getElementById("p-link-type-id");
type.textContent = currentProduct.type;
type.onclick = function (){
    localStorage.setItem("type",JSON.stringify(currentProduct.type));
};

//If the shop link is clicked though all types should be shown
const shopLink = document.getElementById("p-link-shop-id");
shopLink.onclick = function (){
    localStorage.setItem("type",JSON.stringify(null));
};

//Set the text attributes of the page to match the actual product
const pageName = document.getElementById("p-link-page-id");
pageName.textContent = currentProduct.name;

const name = document.querySelector(".p-name");
name.textContent = currentProduct.name;

const price = document.querySelector(".p-price");
price.textContent = formatPrice( currentProduct.price[0]);

const description = document.querySelector(".p-description");
description.textContent = currentProduct.description;


//Dynamically creating the size buttons based on the sizes in proudcts
const sizeButtons= document.getElementById("p-size-buttons-id");
const sizeButtonArray = [];

function setupSizeButton (size,index){
    const btn = document.createElement ("button");
    btn.className = "p-size-button";
    btn.textContent=size;
    btn.id = "g-" + size;
    btn.addEventListener("click",() => {
        price.textContent=formatPrice( currentProduct.price[index]);
        clickedSizeIndex = index;
        checkStatus();
        sizeButtonArray.forEach(el => {
            el.className = "p-size-button"
        })
        btn.className = "p-size-button p-size-button-selected";
    });
    sizeButtonArray.push(btn);
    sizeButtons.appendChild(btn);
    
}


sizes.forEach(setupSizeButton);

//Setting up the basket button 
//when clicked it either creates an array of items or pushes the new item to the end of the list
const basketButton = document.getElementById("p-add-id");

function addToBasket(){
    const quantity = quantControl.value;
    const basket = localStorage.getItem("basket");
    const basketItem = new Item(currentProduct,clickedSizeIndex,quantity);
    orderedArray[clickedSizeIndex]=orderedArray[clickedSizeIndex]+quantity;
    
    if (basket == null){
        localStorage.setItem("basket",JSON.stringify([basketItem]));
    }
    else{
        const newBasket = JSON.parse(basket);
        newBasket.push(basketItem);
        localStorage.setItem("basket",JSON.stringify(newBasket));
    }
    checkStatus();
    
}
basketButton.onclick= addToBasket;

//Setting up the bottom of the page that offers more products
const moreProducts = document.getElementById("p-extra-products-id");

function createExtraProduct (product){
    let div = document.createElement("div");
    div.className= "p-extra-product";

    const img = document.createElement("img");
    img.src = "../images/temp.jpg";

    const extraName = document.createElement("p");
    extraName.textContent=product.name;

    div.onclick = function (){
        localStorage.setItem("currentProduct",JSON.stringify(product));
        location.href = "../html/product.html";
    };

    div.appendChild(img);
    div.appendChild(extraName);
    moreProducts.appendChild(div);

}

for (let i = 0; i<4; i++){
    createExtraProduct(products[i]);
}





