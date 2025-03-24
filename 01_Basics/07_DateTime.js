//Date

let MyDate = new Date();
console.log(MyDate);
// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toLocaleDateString());
// console.log(MyDate.toLocaleString());

// console.log(MyDate.toISOString());
// console.log(MyDate.getDay()); //get the day of the week
// console.log(MyDate.getDate());  //get the day of the month
// console.log(MyDate.getMonth() + 1); //get the month number

// console.log(MyDate.getFullYear()); //get the year
// console.log(MyDate.getHours()); //get the hour
// console.log(MyDate.getMinutes()); //get the minutes
// console.log(MyDate.getSeconds()); //get the seconds


let janm = new Date(2022, 3, 2, 12, 32, 50);
// console.log(janm.toLocaleString());

let now = Date.now();
// console.log(now);


console.log(MyDate.toLocaleString('default',{
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
}));
