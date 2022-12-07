//function that orders a string of digits from large to small
const mainFunction = (input) => {
  var string = Array.from(input);
  var x = string.sort((a,b)=>b-a);
  return x.join("");
}

console.log(mainFunction('04852')); 
