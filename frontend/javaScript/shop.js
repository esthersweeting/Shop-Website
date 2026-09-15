
 
import { products, productTypes} from "./products.js";
import { formatPrice} from "./functions.js";

//Everthing type is the text that will be displayed on the page if you want to see all the proucts
//lastType is the previously clicked type
let everythingType = "All";
let lastType= everythingType;

//This is the container for the type buttons
const productTypeButtons = document.getElementById("sh-type-buttons-id");
//This is the container for the products
const prodBox = document.getElementById("sh-product-id");

//Creates boxes for the appropriate products based on their types
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

//Add buttons for each different type
const typeButtonArray =[]; 
function addTypeButton (type){
  const button = document.createElement("button");
  button.className = "sh-product-type";
  button.textContent = type;
  button.onclick =() => {
    setupWithType(type);
    typeButtonArray.forEach(el => {
      el.className = "sh-product-type";
    })
    button.className= "sh-product-type sh-product-type-selected";
  }
  typeButtonArray.push(button);
  productTypeButtons.appendChild(button);
}
addTypeButton (everythingType);
productTypes.forEach(addTypeButton);



// Create a box with the product name to display
//Add an event handler so that when it is clicked it takes you to the product page
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


 //If there is a previously selected type in local storage
 //Load the appropriate stuff for that type
 //Otherwise just load all the products
let jsonType = localStorage.getItem("type");
let typeFromProduct = null;
if (jsonType != null){
  typeFromProduct=JSON.parse(jsonType);
}
addEventListener("pageshow", () => { 
  if (typeFromProduct === null ){
    products.forEach(createProductBox);
  }
  else{
    setupWithType (typeFromProduct);
    localStorage.setItem("type",JSON.stringify(null));
  }

})



 
 
