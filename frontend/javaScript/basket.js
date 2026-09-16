import { formatPrice,getPricePerUnit,getProductText,getTotalPrice } from "./functions.js";
import { sizes, Item} from "./products.js";
import {hashBasket, json, basket} from "./mapBasket.js";

const totalP= document.getElementById("b-total-cost");
let total = 0;

const productsDiv = document.getElementById("b-products")
function createBasketProd(basketItem){
    
    const prodDiv = document.createElement("div");
    prodDiv.className="b-product";

    const prodImg = document.createElement("img");
    prodImg.src="../images/temp.jpg";
    prodImg.alt="temp";

    const prodInfo = document.createElement("div");
    prodInfo.className = "b-product-info";

    const prodName = document.createElement("p");
    prodName.className="b-product-name";
    

    const unitPrice = document.createElement("p");
    unitPrice.className = "b-unit-price";
    const pricePerUnit = getPricePerUnit(basketItem);
    
    const totalPrice = document.createElement("p");
    totalPrice.className = "b-price";
    

    function setText () {
        prodName.textContent= getProductText(basketItem);
        unitPrice.textContent= formatPrice(pricePerUnit);
        totalPrice.textContent=formatPrice(getTotalPrice(basketItem));
        totalP.textContent=formatPrice(total);
    }

    const qty = document.createElement("input");
    qty.type=Number;
    qty.className="b-quantity";
    qty.value=basketItem.quantity;
    qty.addEventListener("change",()=>{
        const max = basketItem.product.stock[basketItem.size];
        if (parseInt(qty.value) > max) {
            qty.value = max;
        }
        if (parseInt(qty.value) < 0) {
            qty.value = 0;
        }
        total=total+(qty.value-basketItem.quantity)*pricePerUnit;
        basketItem.quantity=qty.value
        setText();
        console.log("called");

    });

    total=total+pricePerUnit*basketItem.quantity;

    setText();

    
    prodInfo.appendChild(prodName);
    prodInfo.appendChild(unitPrice);

    prodDiv.appendChild(prodImg);
    prodDiv.appendChild(prodInfo);
    prodDiv.appendChild(qty);
    prodDiv.appendChild(totalPrice);


    productsDiv.appendChild(prodDiv);



}

if (json != null){
    if (productsDiv!= null){
        hashBasket.forEach(createBasketProd);
    }
    
}



window.addEventListener("pagehide", () =>{
    
    if (checkoutButton!=null){
        if (hashBasket.size >0){
            let basketArray = [];
            hashBasket.forEach((basketItem) =>{
                const tempProduct = basketItem;
                tempProduct.quantity = basketItem.quantity;
                basketArray.push(tempProduct);
            });
            localStorage.setItem("basket",JSON.stringify(basketArray));
            localStorage.setItem("total",JSON.stringify(total));
        }
        
    }
});

const checkoutButton= document.getElementById("b-checkout-btn");
checkoutButton.onclick = function (){location.href = "../html/checkout.html";} 
   

