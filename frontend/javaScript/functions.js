//sizes needed for getProductText
import { sizes} from "./products.js"; 

//Takes a number
// Returns it as a string with 2 d.p. and a £ in front
export function formatPrice(num){
    return ("£" + num.toFixed(2));
}

//Takes an item as an argument
//Gets the appropriate price for the appropriate size of that product
// returns a numer i.e the unit cost of the product
export function getPricePerUnit (basketItem){
    return basketItem.product.price[basketItem.size];
}

//Takes an Item as an argument
//Returns a string in the format like "1x Mint Imperials 100g"
export function getProductText (basketItem){
    return basketItem.quantity +"x "+ basketItem.product.name + " "+  sizes[basketItem.size];
}
//Takes an item as an argument
//Returns a number i.e the total amount the user will spend on that item type
export function getTotalPrice (basketItem){
    return basketItem.quantity*getPricePerUnit(basketItem);
}