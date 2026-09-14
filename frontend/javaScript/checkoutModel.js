import { timeSlots } from "./products.js";

let firstName = "";
let lastName = "";
let email = "";
let phone = "";
//In the format YYYY-MM-DD
let date = "";
//the index corresponding to the correct slot
//the slots are in products.js
let time = 0; 
export function getFirstName() {
    return firstName;
}
export function setFirstName(newFirstName) {
    firstName = newFirstName;
}

export function getLastName() {
    return lastName;
}
export function setLastName(newLastName) {
    lastName = newLastName;
}

export function getEmail() {
    return email;
}
export function setEmail(newEmail) {
    email = newEmail;
}

export function getPhone() {
    return phone;
}
export function setPhone(newPhone) {
    phone = newPhone;
}

export function getDate() {
    return date;
}
export function setDate(newDate) {
    date = newDate;
}

export function getTime() {
    return time;
}
export function setTime(newTime) {
    time = newTime;
}