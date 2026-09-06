
 
import { products, productTypes} from "./products.js";
import { formatPrice} from "./functions.js";

let everythingType = "All";
let lastType= everythingType;

const productTypeButtons = document.getElementById("sh-type-buttons-id");
const prodBox = document.getElementById("sh-product-id");

function addTypeButton (type){
  const button = document.createElement("button");
  button.className = "sh-product-type";
  button.textContent = type;
  button.onclick = function (){
    console.log(lastType+type)
      if (type==lastType){
        //Do nothing, just leave the products the same as before
        console.log(1);
      }
      else if (type == everythingType ){
        products.filter(product => product.type!=lastType).forEach(createProductBox);
        lastType=type;
        console.log(2);
      } else {
        prodBox.replaceChildren();
        products.filter(product => product.type==type).forEach(createProductBox);
        lastType=type;
        console.log(3);

      }
  };
  productTypeButtons.appendChild(button);
}
console.log(productTypeButtons);
addTypeButton (everythingType);
productTypes.forEach(addTypeButton);



//<button class="sh-product-type">All</button>
//"sh-type-buttons-id"

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

 function createIfType (product,type){
    if (product.type == type){
      createProductBox(product);
    }
 }

products.forEach(createProductBox);


 
 
