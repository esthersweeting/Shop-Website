import {formatPrice} from "./functions.js";
import {sizes, products} from "./products.js";
let clickedSizeIndex= 0;
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
        clickedSizeIndex = index;
    });
    sizeButtons.appendChild(btn);
    
}


sizes.forEach(setupSizeButton);

const basketButton = document.getElementById("p-add-id");

function addToBasket(){
    const quantity = document.getElementById("p-quantity-id").value;
    const basket = localStorage.getItem("basket");
    const basketItem = [currentProduct,clickedSizeIndex,quantity];
    
    if (basket == null){
        localStorage.setItem("basket",JSON.stringify([basketItem]));
    }
    else{
        console.log(basket);
        const newBasket = JSON.parse(basket);
        newBasket.push(basketItem);
        localStorage.setItem("basket",JSON.stringify(newBasket));
    }
    
}
basketButton.onclick= addToBasket;

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

//<div class="p-extra-product">
//           <img src="../images/temp.jpg">
//           <p> Rhubarb bonbons</p>
//         </div>




