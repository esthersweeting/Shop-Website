//Adding event handlers so when the about and shop buttons are pressed the user is taken to the right place
const shopButton=document.getElementById("i-enter-shop");
shopButton.onclick= function (){
    location.href="../html/shop.html";
};

const aboutButton=document.getElementById("i-view-profile");
aboutButton.onclick= function (){
    location.href="../html/about-me.html";
};
