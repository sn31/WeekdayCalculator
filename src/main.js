import {WeekdayCalculator} from './calendar';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $('#input').submit(function(event){
    event.preventDefault();
    let inputStr = new Date($('#inputDate').val());
    let inputDate = inputStr.getUTCDate();
    let inputMonth = inputStr.getMonth()+1;
    let inputYear = inputStr.getFullYear();
    let inputDateObj = new WeekdayCalculator(inputDate, inputMonth,inputYear);
    let result = inputDateObj.DayCal();
    $('#output').text(result);
  });
});
