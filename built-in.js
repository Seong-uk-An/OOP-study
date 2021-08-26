console.log(Math.PI);
console.log(Math.random());
console.log(Math.round(4.6));

const MyMath = {
  PI: Math.PI,
  random: () => Math.random(),
  round: (val) => Math.round(val),
};

console.log(MyMath.PI);
console.log(MyMath.random());
console.log(MyMath.round(4.6));
