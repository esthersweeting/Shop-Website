export const hashBasket = new Map();
export const json = localStorage.getItem("basket");
export let basket = null;
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
    
}