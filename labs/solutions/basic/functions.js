/*
   functions can be passed around

   Write a function that executes a list of funcitons, it's
   passed, in the order they appear.

   And returns the results of each in a list.

   The indexes should match the function list.
*/

module.exports = function function_dispatcher(function_list, args_list) {
   /* Your code goes here */
   return function_list.map((f, i) => f(...args_list[i]));
};
