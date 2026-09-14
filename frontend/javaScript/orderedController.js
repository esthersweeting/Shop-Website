import { addItemToCheckout, addTotal } from "./orderedView.js";
import { checkoutBasket ,total} from "./orderedModel.js";

//If there's stuff in the basket, display each item in the appropriate area
//Then display the total
if (checkoutBasket!=null){
    checkoutBasket.forEach(addItemToCheckout);
    addTotal(total);
}