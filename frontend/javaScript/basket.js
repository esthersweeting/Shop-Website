import { formatPrice,getPricePerUnit,getProductText,getTotalPrice } from "./functions.js";
import { sizes, Item} from "./products.js";

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
const hashBasket = new Map();
const json = localStorage.getItem("basket");
let basket = null;
if (json != null){
    basket = JSON.parse(json);
    
    
    basket.forEach(element => {
        if (hashBasket.get(element.key) ==null){
            hashBasket.set(element.key,element);
        }
        else{
        const num = parseInt(element.quantity)+parseInt(hashBasket.get(element.key).quantity);
        element.quantity=num;
        
        hashBasket.set(element.key,element);
        }
    });
    if (productsDiv!= null){
        hashBasket.forEach(createBasketProd);
    }
    
}


const checkoutButton= document.getElementById("b-checkout-btn");
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
     checkoutButton.onclick = function (){location.href = "../html/checkout.html";} 
}
   

