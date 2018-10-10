const anchorDate = new Date("1970-01-01");

function leapyearChecker(year) {
    //year is a number
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
};
const monthObj = {
    1: 31,
    2: 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
}
const DayObj = {
    0: "Thursday",
    1: "Friday",
    2: "Saturday",
    3: "Sunday",
    4: "Monday",
    5: "Tuesday",
    6: "Wednesday",
}
class WeekdayCalculator {
    
    constructor(inputDate, inputMonth, inputYear) {
        this.inputDate = inputDate;
        this.inputMonth = inputMonth;
        this.inputYear = inputYear;
    }
    DayCal() {
        let dateDiff = this.inputDate - anchorDate.getDate();
        let totalDays = 0;
        for (let year = anchorDate.getFullYear(); year < this.inputYear; year++) {
            if (leapyearChecker(year) == true) {
                totalDays += 366;
            }
            else {
                totalDays += 365;
            }
        }
        for (let month = anchorDate.getMonth(); month < this.inputMonth; month++) {
            totalDays += monthObj[month];
        }
        if (this.inputMonth > 2 && leapyearChecker(this.inputYear) == true) {
            totalDays++;
        }
        totalDays += dateDiff;
        let outputDate = totalDays % 7;
        let result = DayObj[outputDate];
        return result;
    }
}