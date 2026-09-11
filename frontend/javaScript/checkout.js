document.getElementById("c-button").onclick= function(){
    localStorage.removeItem("basket");
    location.href = "../html/thank-you.html";
};