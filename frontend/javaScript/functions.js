//sizes needed for getProductText
import { sizes} from "./products.js"; 

//Takes a number
// Returns it as a string with 2 d.p. and a £ in front
export function formatPrice(num){
    return ("£" + num.toFixed(2));
}

//Takes an item as an argument
//Gets the appropriate price for the appropriate size of that product
// returns a numer i.e the unit cost of the product
export function getPricePerUnit (basketItem){
    return basketItem.product.price[basketItem.size];
}

//Takes an Item as an argument
//Returns a string in the format like "1x Mint Imperials 100g"
export function getProductText (basketItem){
    return basketItem.quantity +"x "+ basketItem.product.name + " "+  sizes[basketItem.size];
}
//Takes an item as an argument
//Returns a number i.e the total amount the user will spend on that item type
export function getTotalPrice (basketItem){
    return basketItem.quantity*getPricePerUnit(basketItem);
}

export function getDateString(oldDate){
    const newDate = oldDate.split("-");
    
    newDate[2] = parseInt(newDate[2]);

    const monthTextMap = new Map();
    monthTextMap.set("01", "Jan");
    monthTextMap.set("02", "Feb");
    monthTextMap.set("03", "Mar");
    monthTextMap.set("04", "Apr");
    monthTextMap.set("05", "May");
    monthTextMap.set("06", "Jun");
    monthTextMap.set("07", "Jul");
    monthTextMap.set("08", "Aug");
    monthTextMap.set("09", "Sep");
    monthTextMap.set("10", "Oct");
    monthTextMap.set("11", "Nov");
    monthTextMap.set("12", "Dec");

    const endOfString =" "+ newDate[2] +" "+ monthTextMap.get(newDate[1]);

    const dayString = getDay(newDate);

    return (dayString + endOfString);

    


    

    
}


function getDay (dateArray){
    const monthDaysMap = new Map();
    monthDaysMap.set("01", 0);
    monthDaysMap.set("02", 31); 
    // This assumes the year isn't a leap year
    monthDaysMap.set("03", 59);
    monthDaysMap.set("04", 90);
    monthDaysMap.set("05", 120);
    monthDaysMap.set("06", 151);
    monthDaysMap.set("07", 181);
    monthDaysMap.set("08", 212);
    monthDaysMap.set("09", 243);
    monthDaysMap.set("10", 273);
    monthDaysMap.set("11", 304);
    monthDaysMap.set("12", 334);

    
    //Get the year of the selected date as an integer
    const year = parseInt(dateArray[0]);
    //True if the current year is a leap year
    const leap = (year%4 ==0 && (year%100!=0 || year%400==0));
    //Counts the number of leap years between 2000 and the selected date inclusive
    let leaps = Math.floor((year -2000)/  4)+1;
    leaps=leaps- Math.floor((year -2000)/  100);
    leaps = leaps + Math.floor((year -2000)/  400);
    //Adds 365 days for each year between the selected date and 2000 
    //Then adds 1 day for each leap year and the number of days that'll have passed to reach that day of that month
    let days =365*(year-2000) + leaps + monthDaysMap.get(dateArray[1])+dateArray[2];
    
    //The above assumes that the leap day for the current year has already happened by the date
    //If it hasn't then it needs removing
    if (leap && parseInt(dateArray[1])<3){
        days =days-1;
    }

    //The reference point for this algorithm is the first of Jan 2000
    //That's a saturday so if only 1 day had happened you'd need to add 4 to get to 5 representing Sat
    //hence an extra addtion of 4
    const offset = (days+4)%7;

    const numDayMap = new Map();
    numDayMap.set(0, "Mon");
    numDayMap.set(1, "Tue");
    numDayMap.set(2, "Wed");
    numDayMap.set(3, "Thu");
    numDayMap.set(4, "Fri");
    numDayMap.set(5, "Sat");
    numDayMap.set(6, "Sun");

    return numDayMap.get(offset);

}
