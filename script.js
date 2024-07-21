function myFunctionTest(expected, func) {
    const result = func();
    if (expected === result) {
        return "TEST SUCCEEDED";
    } else {
        return `TEST FAILED. Expected ${expected} but got ${result}`;
    }
}

function max(a, b) {
    return a > b ? a : b;
}

console.log("Expected output of max(20, 10) is 20 and " +
    myFunctionTest(20, function() { return max(20, 10); }));
console.assert(max(20, 10) === 20, "TEST FAILED");

console.log("Expected output of max(3, 5) is 5 and " +
    myFunctionTest(5, function() { return max(3, 5); }));
console.assert(max(3, 5) === 5, "TEST FAILED");

function maxOfThree(a, b, c) {
    return Math.max(a, b, c);
}

console.log("Expected output of maxOfThree(3, 7, 5) is 7 and " +
    myFunctionTest(7, function() { return maxOfThree(3, 7, 5); }));
console.assert(maxOfThree(3, 7, 5) === 7, "TEST FAILED");

console.log("Expected output of maxOfThree(1, 2, 3) is 3 and " +
    myFunctionTest(3, function() { return maxOfThree(1, 2, 3); }));
console.assert(maxOfThree(1, 2, 3) === 3, "TEST FAILED");

function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase());
}

console.log("Expected output of isVowel('a') is true and " +
    myFunctionTest(true, function() { return isVowel('a'); }));
console.assert(isVowel('a') === true, "TEST FAILED");

console.log("Expected output of isVowel('b') is false and " +
    myFunctionTest(false, function() { return isVowel('b'); }));
console.assert(isVowel('b') === false, "TEST FAILED");

function sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}

function multiply(numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}


console.log("Expected output of sum([1, 2, 3, 4]) is 10 and " +
    myFunctionTest(10, function() { return sum([1, 2, 3, 4]); }));
console.assert(sum([1, 2, 3, 4]) === 10, "TEST FAILED");

console.log("Expected output of multiply([1, 2, 3, 4]) is 24 and " +
    myFunctionTest(24, function() { return multiply([1, 2, 3, 4]); }));
console.assert(multiply([1, 2, 3, 4]) === 24, "TEST FAILED");

function reverse(str) {
    return str.split('').reverse().join('');
}

console.log("Expected output of reverse('jag testar') is 'ratset gaj' and " +
    myFunctionTest('ratset gaj', function() { return reverse('jag testar'); }));
console.assert(reverse('jag testar') === 'ratset gaj', "TEST FAILED");

function findLongestWord(words) {
    return Math.max(...words.map(word => word.length));
}

console.log("Expected output of findLongestWord(['one', 'two', 'three']) is 5 and " +
    myFunctionTest(5, function() { return findLongestWord(['one', 'two', 'three']); }));
console.assert(findLongestWord(['one', 'two', 'three']) === 5, "TEST FAILED");

function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}

console.log("Expected output of filterLongWords(['one', 'two', 'three'], 3) is ['three'] and " +
    myFunctionTest(['three'], function() { return filterLongWords(['one', 'two', 'three'], 3); }));
console.assert(JSON.stringify(filterLongWords(['one', 'two', 'three'], 3)) === JSON.stringify(['three']), "TEST FAILED");

function multiplyByTen(numbers) {
    return numbers.map(num => num * 10);
}
function allElementsEqualThree(numbers) {
    return numbers.filter(num => num === 3);
}

function productOfAllElements(numbers) {
    return numbers.reduce((acc, num) => acc * num, 1);
}
console.log("Expected output of multiplyByTen([1, 2, 3, 4]) is [10, 20, 30, 40] and " +
    myFunctionTest(JSON.stringify([10, 20, 30, 40]), function() { return JSON.stringify(multiplyByTen([1, 2, 3, 4])); }));
console.assert(JSON.stringify(multiplyByTen([1, 2, 3, 4])) === JSON.stringify([10, 20, 30, 40]), "TEST FAILED");

console.log("Expected output of allElementsEqualThree([1, 3, 3, 4]) is [3, 3] and " +
    myFunctionTest(JSON.stringify([3, 3]), function() { return JSON.stringify(allElementsEqualThree([1, 3, 3, 4])); }));
console.assert(JSON.stringify(allElementsEqualThree([1, 3, 3, 4])) === JSON.stringify([3, 3]), "TEST FAILED");

console.log("Expected output of productOfAllElements([1, 2, 3, 4]) is 24 and " +
    myFunctionTest(24, function() { return productOfAllElements([1, 2, 3, 4]); }));
console.assert(productOfAllElements([1, 2, 3, 4]) === 24, "TEST FAILED");

console.log(`
    Assignment Report:
    ------------------
    Time taken: Approximately 2 hours
    Lessons Learned: Gained knowledge of JavaScript functions, arrays, and higher-order functions like map, filter, and reduce.
    Problems Encountered: Initially, I had trouble with the syntax for defining anonymous functions inside test cases, but I quickly resolved it by reviewing the documentation.
`);
