
 
import { products} from "./products.js";


 function createProductBox (product){
    const pr = product;
    const prodBox = document.getElementById("sh-product-id");
    const p = document.querySelector(".sh-products");

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
    price.textContent = "£"+product.price[0].toFixed(2);


    btn.appendChild(img);
    btn.appendChild(title);
    btn.appendChild(price);
    prodBox.appendChild(btn);
    
 }

products.forEach(createProductBox);


 
 
