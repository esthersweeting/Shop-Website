import { timeSlots } from "./products.js";
import { getDateString } from "./functions.js";
export const email = JSON.parse(localStorage.getItem("email"));

const unformattedDate = JSON.parse(localStorage.getItem("date"));

export const dateString = getDateString(unformattedDate);

const slotIndex = JSON.parse(localStorage.getItem("time"));

export const slotText = timeSlots[slotIndex];
