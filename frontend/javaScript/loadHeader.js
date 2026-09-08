const head = document.getElementById("header");
fetch("../html/header.html").then(response => response.text()).then(html => head.innerHTML=html);