const currentDate = new Date();

// Get methods
const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();
const dayOfWeek = currentDate.getDay();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log("Current Date:", currentDate);
console.log("Year:", year);
console.log("Month:", month);
console.log("Day:", day);
console.log("Day of Week:", dayOfWeek);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);

// Formatting
const dateString = currentDate.toLocaleDateString();
const timeString = currentDate.toLocaleTimeString();

console.log("Formatted Date:", dateString);
console.log("Formatted Time:", timeString);

// Setting methods
currentDate.setFullYear(2022);
currentDate.setMonth(10);
currentDate.setDate(15);
currentDate.setHours(12);
currentDate.setMinutes(30);
currentDate.setSeconds(45);

console.log("Updated Date:", currentDate);
/*
In the above program, the following operations are demonstrated:

Getting methods: The program uses various get methods, such as getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes(), and getSeconds(), to retrieve different components of the current date and time.

Formatting: The toLocaleDateString() and toLocaleTimeString() methods are used to format the date and time into localized string representations.

Setting methods: The program uses set methods, such as setFullYear(), setMonth(), setDate(), setHours(), setMinutes(), and setSeconds(), to modify the date and time values of the currentDate object.
*/