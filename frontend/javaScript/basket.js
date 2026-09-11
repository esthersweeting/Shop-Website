import { formatPrice } from "./functions.js";
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
    const pricePerUnit = basketItem.product.price[basketItem.size];
    

    const totalPrice = document.createElement("p");
    totalPrice.className = "b-price";
    

    function setText () {
        prodName.textContent= basketItem.quantity +"x "+ basketItem.product.name + " "+  sizes[basketItem.size];
        unitPrice.textContent= formatPrice(pricePerUnit);
        totalPrice.textContent=formatPrice(basketItem.quantity*pricePerUnit);
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
        
        hashBasket.set(element);
        }
    });
    if (productsDiv!= null){
        hashBasket.forEach(createBasketProd);
    }
    
}


const checkoutButton= document.getElementById("b-checkout-btn");
if (checkoutButton!=null){
    let basketArray = [];
    if (hashBasket.size >0){
        hashBasket.forEach((basketItem) =>{
            const tempProduct = basketItem.item.product;
            tempProduct.quantity = basketItem.quantity;
            basketArray.append(tempProduct);
        });
        localStorage.setItem("basket",JSON.stringify(basketArray));
    }
     checkoutButton.onclick = function (){location.href = "../html/checkout.html";} 
}
   

