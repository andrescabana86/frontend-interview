/********** EXCERCISE 3 **********/
function arrow() {
  const thisIsConst = "value1";
  let thisIsLet = "value2";
  var thisIsVar = "value3";

  {
    const thisIsConst = "other value 1";
    let thisIsLet = "other value 2";
    var thisIsVar = "other value 3";
  }

  console.log(thisIsConst);
  console.log(thisIsLet);
  console.log(thisIsVar);
}

// what is the output?
arrow();
