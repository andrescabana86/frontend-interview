// is this working?
print(NaN === NaN);
print(1 == "1");
print(1 === "1");
print(!!"false" == !!"true");
print([] + null + 1);
print([1, 2, 3] == [1, 2, 3]);

function print(str) {
  console.log(str);
}

/********** EXCERCISE 1 **********/
const result = ["a", "b", "c", "moreThan5"].reduce(_ => {
  return null;
}, {});

// expected result:
// {a: false, b: false, c: false, moreThan5: true}

/********** EXCERCISE 2 **********/
function arrow() {
  const thisIsConst = "value";
  let thisIsLet = "value2";

  {
    const thisIsConst = "other value";
    let thisIsLet = "value2";
  }

  console.log(thisIsConst);
  console.log(thisIsLet);
}
// result??
arrow();

/********** EXCERCISE 3 **********/
var arr = [3, 2, 1];
var arr = [3, 2, 1];
arr.sort();
// value of arr?
arr.concat(4);
// value of arr?
arr.slice(0);
// value of arr?
arr.splice(0);
// value of arr?

/********** EXCERCISE 4 **********/
function aaa(txt) {
  setTimeout(function() {
    console.log("a -> ", txt);
  }, 500);
}

function bbb(txt) {
  requestAnimationFrame(function() {
    console.log("b -> ", txt);
  });
}

function ccc(txt) {
  setInterval(function() {
    console.log("c -> ", txt);
  }, 1000);
}

aaa("1");
bbb("2");
ccc("3");
