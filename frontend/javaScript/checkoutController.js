import { timeButtons,checkoutButton, fn, ln, em, ph, inputDate} from "./checkoutView.js";
import { getDate, getTime, getPhone, getEmail, getFirstName,getLastName, setDate, setTime, setPhone, setEmail, setFirstName,setLastName,} from "./checkoutModel.js";


//Link to the thank you page after checkout is pressed
checkoutButton.onclick= function(){ 
    location.href = "../html/thank-you.html";
};

//Add an event handler for each timeslot button so when it is clicked it updates the time
timeButtons.forEach((btn,index)=>{
    btn.onclick = function (){
        setTime(index);
        localStorage.setItem("time",JSON.stringify(getTime()));
        
    };
})


//Add event handlers to the boxes where the user enters data
//Update the corresponding part of the model and save it to local storage if needed
fn.addEventListener("change",()=>{
    setFirstName(fn.value);
});

ln.addEventListener("change",()=>{
    setLastName(ln.value);
});

em.addEventListener("change",()=>{
    setEmail(em.value);
    localStorage.setItem("email",JSON.stringify(getEmail()));
});

ph.addEventListener("change",()=>{
    setPhone(ph.value);
});


inputDate.addEventListener("change",  function(){
    setDate(inputDate.value);
    localStorage.setItem("date",JSON.stringify(getDate()));
});


