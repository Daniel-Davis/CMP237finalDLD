// Daniel Davis, max, finds the maximum value of a given array using the reduce function //

var arry = [7,4,21,42]; // construct the array

arry.reduce(function(element){ // reduce function that uses an anonymous function on each element 
  var max = 0; // holds the return maximum value
  if(element > max){ // if an element is greater than the current max
    max = element; // max gets the new maximum value
  }// end of if statement 
  return max;
} // end of function
)// end of reduce function
