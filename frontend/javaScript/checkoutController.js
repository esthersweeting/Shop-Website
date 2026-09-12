import { timeButtons, addItemToCheckout, addTotal } from "./checkoutView.js";
import { date, time, phone, email, firstName,lastName, checkoutBasket ,total} from "./checkoutModel.js";

document.getElementById("c-button").onclick= function(){
    localStorage.removeItem("basket");
    location.href = "../html/thank-you.html";
};

timeButtons.forEach((btn,index)=>{
    btn.onclick = function (){
        time=index;
        console.log(time);
        
    };
})

const fn = document.getElementById("c-first-name");
const ln = document.getElementById("c-last-name");
const em = document.getElementById("c-email");
const ph = document.getElementById("c-phone");

fn.addEventListener("change",()=>{
    firstName= fn.value;
});

ln.addEventListener("change",()=>{
    lastName= ln.value;
});

em.addEventListener("change",()=>{
    email= em.value;
});

ph.addEventListener("change",()=>{
    phone= ph.value;
});

const inputDate = document.getElementById("c-collection-date");
inputDate.addEventListener("change",  function(){
    date=inputDate.value;
    console.log(date);
});

if (checkoutBasket!=null){
    checkoutBasket.forEach(addItemToCheckout);
    addTotal(total);
}
