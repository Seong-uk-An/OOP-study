const superObj = {
  superVal: "super",
};
// const subObj = {
//   subVal: "sub",
// };
// subObj.__proto__ = superObj;
const subObj = Object.create(superObj);
subObj.subVal = "sub";

console.log(subObj.subVal);
console.log(subObj.superVal);
subObj.superVal = "sub";
console.log(superObj.superVal);
console.log(subObj.superVal);

const kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

const lee = Object.create(kim);
lee.name = "lee";
lee.first = 10;
lee.second = 10;
lee.avg = function () {
  return (this.first + this.second) / 2;
};

// const lee = {
//   name: "lee",
//   first: 10,
//   second: 10,
//   avg: function () {
//     return (this.first + this.second) / 2;
//   },
// };
// lee.__proto__ = kim;

console.log(lee.sum());
console.log(lee.avg());
