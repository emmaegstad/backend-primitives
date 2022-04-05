//challenge 1
function reverseWords(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word.split('').reverse().join('');
    })
    .join(' ');
}
console.log(reverseWords('alchemy rocks gold'));

//challenge 2
function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}
console.log(titleCase('alchemy ROCKS goLD'));

//challenge 3
function oddishOrEvenish(number) {
  const numberArray = number.toString().split('');
  const sum = numberArray.reduce(
    (previousValue, currentValue) =>
      Number(previousValue) + Number(currentValue),
    0
  );
  return sum % 2 === 0 ? 'evenish' : 'oddish';
}
console.log(oddishOrEvenish(121));

//challenge 4
const array = ['a', 'b', 'c', 'd'];
function at(arr, index) {
  if (index >= 0) {
    return arr[index];
  } else {
    return arr[arr.length + index];
  }
}
console.log(at(array, -3));

//challenge 5
function fizzBuzz(number) {
  const array = [];
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push('fizzbuzz');
    } else if (i % 5 === 0) {
      array.push('buzz');
    } else if (i % 3 === 0) {
      array.push('fizz');
    } else {
      array.push(i);
    }
  }
  return array;
}
console.log(fizzBuzz(15));

//challenge 6
function anagrams(wordOne, wordTwo) {
  const oneSorted = wordOne.split('').sort().join();
  const twoSorted = wordTwo.split('').sort().join();
  return oneSorted === twoSorted ? true : false;
}
console.log(anagrams('dusty', 'study'));
