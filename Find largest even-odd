//function that takes a string of digits and returns the largest even and odd numbers that can be formed from two adjacent digits
const main = (input) => {
var number = [];
var result = [];
for (let i = 0; i+1 < input.length; i++) {
    number.push(input.substring(i, i + 2));
}
number = number.sort((a,b)=>b-a);
for (let i = 0; i < number.length; i++) {
  if (parseInt(number[i]) % 2 == 0) {
    result.push(number[i]);
    break;
  }
}
for (let i = 0; i < number.length; i++) {
  if (parseInt(number[i]) % 2 != 0) {
    result.push(number[i]);
    break; 
  }
}
return result;
}

console.log(main('53449287983'))
