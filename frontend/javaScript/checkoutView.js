import { timeSlots } from "./products.js"


export const timeButtons = [];

export const checkoutButton = document.getElementById("c-button");

export const fn = document.getElementById("c-first-name");
export const ln = document.getElementById("c-last-name");
export const em = document.getElementById("c-email");
export const ph = document.getElementById("c-phone");

export const inputDate = document.getElementById("c-collection-date");

const timesContainer = document.getElementById("c-times");

//Create a button for each time slot and store it in the timeButtons array
timeSlots.forEach((slot) => {
   let btn = document.createElement("button");
   btn.className = "c-slot";
   btn.textContent=slot;
   timeButtons.push(btn);
   timesContainer.appendChild(btn);

});
 