// Daniel Davis, dowConversion, converts the day of the week given into a number or vice versa //

  function dowConversion(day) { // hard coded the inputs and outputs
    if(day === 1) { // if the input is a number, then return that corresponding day of the week
      return "Monday";
    }// end of if statement
    if(day === 2) {
      return "Tuesday";
    }
    if(day === 3) {
      return "Wednesday";
    }
    if(day === 4) {
      return "Thursday";
    }
    if(day === 5) {
      return "Friday";
    }
    if(day === 6) {
      return "Saturday";
    }
    if(day === 7) {
      return "Sunday";
    }
    if(day === "Monday" || day === "monday") { // if the input is a day of the week, return the corresponding number in the week in which that day appears
      return 1;
    }// end of if statement
    if(day === "Tuesday" || day === "tuesday") {
      return 2;
    }
    if(day === "Wednesday" || day === "wednesday") {
      return 3;
    }
    if(day === "Thursday" || day === "thursday") {
      return 4;
    }
    if(day === "Friday" || day === "friday") {
      return 5;
    }
    if(day === "Saturday" || day === "saturday") {
      return 6;
    }
    if(day === "Sunday" || day === "sunday") {
      return 7;
    }
    else {
      return "error, please input correct day or number of the week of that day"
    }
  } // end of fucntion
