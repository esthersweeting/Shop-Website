import { email } from "./thankYouModel.js";
import { setEmail, backButton } from "./thankYouView.js";

backButton.onclick= function(){
    location.href = "../html/shop.html";
    localStorage.removeItem("basket");
};


setEmail(email);