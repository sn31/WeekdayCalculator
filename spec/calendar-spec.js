import {WeekdayCalculator, leapyearChecker } from "../src/calendar.js";

describe ("calendar test", function() {
  it('should correctly determine if a year is a leap year', function(){
    expect(leapyearChecker(2018)).toEqual(false);
  });
  it('should correctly determine which day of the week is the input date', function() {
    let input = new WeekdayCalculator(4,6,2000);
    expect(input.DayCal()).toEqual("Sunday");
  });
});