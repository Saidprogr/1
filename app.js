let a = ["js", "front", "array", "html", "css"];

let result = a.map(word =>
  word.split("").reverse().join("")
);

console.log(result);
