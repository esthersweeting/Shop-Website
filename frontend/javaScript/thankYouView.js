export const backButton =document.getElementById("t-back-button");

const message = document.getElementById("t-email-confirm");


export function setEmail(email){
    message.textContent = "A confirmation has been sent to " + email;
}

export const timeSlot = document.getElementById("t-slot");

//<p class="t-slot" id="t-slot">Fri 12 Sep, 11:00 – 1:00</p>

