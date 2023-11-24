class Mydate {
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this. year = year;
    }
    getDay(){
        return this.day;
    }
    getMonth(){
        return this.month;
    }
    getYear(){
        return this.year;
    }
    setDay(newDay) {
        this.day = newDay;
    }
setMonth(newMonth) {
    this.month = newMonth;
}
setYear(newYear) {
    this.year = newYear;
}
}
let  myDate = new Mydate(1, 2, 2023);
console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getYear());
myDate.setDay(10);
myDate.setMonth(5);
myDate.setYear(2025);
console.log(myDate.getDay());
console.log(myDate.getMonth());
console.log(myDate.getYear());
