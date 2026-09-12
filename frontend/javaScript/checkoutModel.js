
import { timeSlots } from "./products.js";

export const jsonBasket = localStorage.getItem("basket");
export let checkoutBasket=null;

const jsonTotal = localStorage.getItem("total");

export let firstName="";
export let lastName="";
export let email="";
export let phone=""
export let date = "";
export let time = 0;

export let total= 0;

if (jsonBasket!=null){
     checkoutBasket = JSON.parse(jsonBasket); 
}

if (jsonTotal!=null){
     total = JSON.parse(jsonTotal); 
}