/********** EXCERCISE 2 **********/
/**
 * create a function that receives a list of strings
 * and it returns a list of key: values
 * where the key is the current item of the list
 * and the value is true|false depending if
 * the string has more|less than 5 characters
 */
const list1 = ["a", "b", "c", "moreThan5"];
// expected result for list 1:
// { a: false, b: false, c: false, moreThan5: true }
const list2 = ["abcd", "bcdefg", "c", "amoreThan6"];
// expected result for list 2:
// { abcd: false, bcdefg: true, c: false, amoreThan6: true }

// function....reduce(_ => {
//  return null;
// }, {});
