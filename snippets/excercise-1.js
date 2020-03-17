// is this working?
// if not, fix the error
// what is the output of each print
print(NaN === NaN);
print(1 == "1");
print(1 === "1");
print(!!"false" == !!"true");
print([] + null + 1);
print([1, 2, 3] == [1, 2, 3]);

function print(str) {
  console.log(str);
}
