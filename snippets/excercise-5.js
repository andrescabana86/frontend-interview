/********** EXCERCISE 5 **********/
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

// what is the output?
aaa("1");
bbb("2");
ccc("3");
