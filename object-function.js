const kim = { name: "kim", first: 10, second: 20 };
const lee = { name: "kim", first: 10, second: 10 };
function sum(potato) {
  return potato + (this.first + this.second);
}
console.log(sum.call(kim, "=> "));
console.log(sum.call(lee, ": "));
const kimSum = sum.bind(kim, "-> ");

console.log(kimSum());
