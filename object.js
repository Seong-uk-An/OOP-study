const memberArray = ["seongwook", "chaewon", "sebin"];

console.group("Array Loop");
let i = 0;
while (i < memberArray.length) {
  console.log(i, memberArray[i]);
  i += 1;
}
console.groupEnd("Array Loop");

const memberObject = {
  manager: "seongwook",
  developer: "chaewon",
  designer: "sebin",
};

console.group("Object Loop");
for (const name in memberObject) {
  console.log(name, memberObject[name]);
}
console.groupEnd("Object Loop");
