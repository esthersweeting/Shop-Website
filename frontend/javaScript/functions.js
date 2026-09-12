import { sizes, Item } from "./products.js";
export function formatPrice(num){
    return ("£" + num.toFixed(2));
}

export function getPricePerUnit (basketItem){
    return basketItem.product.price[basketItem.size];
}

export function getProductText (basketItem){
    return basketItem.quantity +"x "+ basketItem.product.name + " "+  sizes[basketItem.size];
}

export function getTotalPrice (basketItem){
    return basketItem.quantity*getPricePerUnit(basketItem);
}