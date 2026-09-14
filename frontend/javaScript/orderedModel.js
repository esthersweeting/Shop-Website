export const jsonBasket = localStorage.getItem("basket");
const jsonTotal = localStorage.getItem("total");

export let checkoutBasket=null;
export let total= 0;

if (jsonBasket!=null){
     checkoutBasket = JSON.parse(jsonBasket); 
}

if (jsonTotal!=null){
     total = JSON.parse(jsonTotal); 
}