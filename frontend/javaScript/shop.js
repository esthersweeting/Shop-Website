
 
import { products, productTypes} from "./products.js";
import { formatPrice} from "./functions.js";

let everythingType = "All";
let lastType= everythingType;

const productTypeButtons = document.getElementById("sh-type-buttons-id");
const prodBox = document.getElementById("sh-product-id");

function setupWithType (type){
      if (type==lastType){
        //Do nothing, just leave the products the same as before
      }
      else if (type == everythingType ){
        products.filter(product => product.type!=lastType).forEach(createProductBox);
        lastType=type;
      } else {
        prodBox.replaceChildren();
        products.filter(product => product.type==type).forEach(createProductBox);
        lastType=type;

      }
  }

function addTypeButton (type){
  const button = document.createElement("button");
  button.className = "sh-product-type";
  button.textContent = type;
  button.onclick =() => setupWithType(type);
  productTypeButtons.appendChild(button);
}
addTypeButton (everythingType);
productTypes.forEach(addTypeButton);




 function createProductBox (product){

    const btn = document.createElement ("button");
    btn.className = "sh-product";
    btn.onclick = function (){
      localStorage.setItem("currentProduct",JSON.stringify(product));
      location.href = "../html/product.html";
    };
    

    const img = document.createElement("img");
    img.src = "../images/temp.jpg";
    
    const title = document.createElement("p");
    title.textContent = product.name;

    const price = document.createElement("p");
    price.textContent = formatPrice(product.price[0]);


    btn.appendChild(img);
    btn.appendChild(title);
    btn.appendChild(price);
    prodBox.appendChild(btn);
    
 }
 
let jsonType = localStorage.getItem("type");
let typeFromProduct = null;
if (jsonType != null){
  typeFromProduct=JSON.parse(jsonType);
}
addEventListener("pageshow", () => { 
  if (typeFromProduct === null ){
    products.forEach(createProductBox);
    console.log("null")
  }
  else{
    setupWithType (typeFromProduct);
    localStorage.setItem("type",JSON.stringify(null));
    console.log("not null");
  }

})



 
 
