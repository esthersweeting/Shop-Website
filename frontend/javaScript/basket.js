import { formatPrice } from "./functions.js";
export function Item (product,size,quantity){
    this.product = product;
    this.size= size;
    this.quantity = quantity;

    this.key = "p"+ this.product.id + "s"+ this.size;
}

export function BasketValue(quantity,item){
    this.quantity = quantity;
    this.item= item;
}

function createBasketProd(basketVal){
    const outer = document.getElementById("b-products")

    const prodDiv = document.createElement("div");
    prodDiv.className="b-product";

    const prodImg = document.createElement("img");
    prodImg.src="../images/temp.jpg";
    prodImg.alt="temp";

    const prodInfo = document.createElement("div");
    prodInfo.className = "b-product-info";

    const prodName = document.createElement("p");
    prodName.className="b-product-name";
    prodName.textContent= basketVal.quantity +"x "+ basketVal.item.product.name;

    const unitPrice = document.createElement("p");
    unitPrice.className = "b-unit-price";
    const pricePerUnit = basketVal.item.product.price[basketVal.item.size];
    unitPrice.textContent= formatPrice(pricePerUnit);

    const qty = document.createElement("input");
    qty.type=Number;
    qty.className="b-quantity";
    qty.value=basketVal.quantity;

    const totalPrice = document.createElement("p");
    totalPrice.className = "b-price";
    totalPrice.textContent=formatPrice(basketVal.quantity*pricePerUnit);

    prodInfo.appendChild(prodName);
    prodInfo.appendChild(unitPrice);

    prodDiv.appendChild(prodImg);
    prodDiv.appendChild(prodInfo);
    prodDiv.appendChild(qty);
    prodDiv.appendChild(totalPrice);


    outer.appendChild(prodDiv);



}

const json = localStorage.getItem("basket");
let basket = null;
if (json != null){
    basket = JSON.parse(json);
    const hashBasket = new Map();

    basket.forEach(element => {
    if (hashBasket.get(element.key) ==null){
        hashBasket.set(element.key,new BasketValue(parseInt(element.quantity),element));
    }
    else{
        const num = parseInt(element.quantity)+parseInt(hashBasket.get(element.key).quantity);
        const basketValue = new BasketValue (num,element);
        
        hashBasket.set(element.key,basketValue);
    }
    });

    
    // <div class="b-product">
    //         <div class="b-product-info">
    //           <p class="b-product-name">Salted caramel fudge</p>
    //           <p class="b-unit-price">£3.50 each</p>
    //         </div>
    //         <input class="b-quantity" type="number" value="1">
    //         <p class="b-price">£7.00</p>
    //       </div>

    hashBasket.forEach(createBasketProd);
    
}

addEventListener("pageShow", setup);

function setup(){
    const checkoutButton= document.getElementById("b-checkout-btn");
    checkoutButton.onclick = function (){
        location.href = "../html/checkout.html";
    };
}


