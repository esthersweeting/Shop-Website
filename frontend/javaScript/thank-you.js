import { email, dateString,slotText } from "./thankYouModel.js";
import { setEmail, backButton, timeSlot } from "./thankYouView.js";

backButton.onclick= function(){
    location.href = "../html/shop.html";
    localStorage.removeItem("basket");
};


setEmail(email);

timeSlot.textContent = dateString +", " + slotText;