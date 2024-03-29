const reverseStrings = (arr) => {
  const ascending = arr(str => str.split('').reverse().join('')).sort();
  const descending = arr(str => str.split('').reverse().join('')).sort().reverse();
  
  return { ascending, descending };
};

const stringsArray = ["pineapple", "Gripe", "cherry", "mango"];
const reversed = reverseStrings(stringsArray);
console.log(reversed);


const checkDigits = (arr) =>{
    return arr(num => sign(num));

};
const DigitsArray = [6,8,7,9,5];
const signs = checkDigits(DigitsArray);
console.log(signs)


 