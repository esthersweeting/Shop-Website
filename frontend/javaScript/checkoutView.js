import { timeSlots } from "./products.js"
import {getProductText, getTotalPrice, formatPrice} from "./functions.js"

export const timeButtons = [];

const timesContainer = document.getElementById("c-times");
timeSlots.forEach((slot) => {
   let btn = document.createElement("button");
   btn.className = "c-slot";
   btn.textContent=slot;
   timeButtons.push(btn);
   timesContainer.appendChild(btn);

});
const costContainer = document.getElementById("b-costs");
export function addItemToCheckout (item){
   console.log("called");
   //<p class="b-cost-type">Marshmallows</p>
   //<p class="b-cost">£11.20</p>
   const cType = document.createElement("p");
   cType.className="b-cost-type";
   cType.textContent=getProductText(item);

   const cCost = document.createElement("p");
   cCost.className="b-cost";
   cCost.textContent=formatPrice(getTotalPrice(item));
   

   costContainer.appendChild(cType);
   costContainer.appendChild(cCost);

}

export function addTotal(total){
   costContainer.appendChild(document.createElement("hr"));
   
   const totText = document.createElement("p");
   totText.className = "b-total-text";
   totText.textContent="Total";

   const totCost = document.createElement("p");
   totCost.className = "b-total-cost";
   totCost.textContent=formatPrice(total);

   const payNote = document.createElement("p");
   payNote.className = "b-pay-note";
   payNote.textContent="click & collect — pay in store on pickup";

   costContainer.appendChild(totText);
   costContainer.appendChild(totCost);
   costContainer.appendChild(payNote);
}

 