//Insert into the dive with the header id the header
//The header html is fetched from header.html converted into text and inserted into the header div
const head = document.getElementById("header");
fetch("../html/header.html").then(response => response.text()).then(html => head.innerHTML=html);