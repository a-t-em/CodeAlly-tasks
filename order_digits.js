const mainFunction = (input) => {
  var string = Array.from(input);
  var x = string.sort((a,b)=>b-a);
  return x.join("");
}

console.log(mainFunction('04852')); 
