// 1. Start with an array of numbers and create a new array with each number times 3.
//    For example, [1, 2, 3] becomes [3, 6, 9].

// while loop:
// var numbers = [3, 6, 9];
// var newNumbers = [];
// var index = 0;

// while (index < numbers.length) {
//   var number = numbers[index];
//   newNumbers.push(number * 3);
//   index += 1;
// }

// console.log(newNumbers);

// forEach loop:




// 2. Start with an array of strings and create a new array with each string upcased.
//    For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].

// while loop:
// var words = ["car", "I'm not screaming"];
// var bigWords = [];
// index = 0;

// while (index < words.length) {
//   // var word = words[index];
//   bigWords.push(words[index].toUpperCase());
//   index += 1;
// }

// console.log(bigWords);

// 3. Start with an array of hashes and create a new array of string values from each hash's :name key.
//    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

// while loop:
// var people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
// var namesOnly = [];
// var index = 0;

// while (index < people.length) {
//   namesOnly.push(people[index].name);
//   index += 1;
// }

// console.log(namesOnly);



// 4. Start with an array of numbers and create a new array with each number plus 7.
//    For example, [1, 2, 3] becomes [8, 9, 10].

// while loop:
// var numbers = [4, 5, 10];
// var luckyNumberSleven = [];
// var index = 0;

// while (index < numbers.length) {
//   luckyNumberSleven.push(numbers[index] + 7);
//   index ++;
// }

// console.log(luckyNumberSleven);



// 5. Start with an array of strings and create a new array with each string's length.
//    For example, ["hello", "goodbye"] becomes [5, 7].

// while loop:
// var strings = ["what is up", "oh man oh god oh no"];
// var stringLength = [];
// var index = 0;

// while (index < strings.length) {
//   stringLength.push(strings[index].length);
//   index ++;
// }

// console.log(stringLength);


// 6. Start with an array of hashes and create a new array of number values from each hash's :age key.
//    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].

// while loop:
// var people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
// var peoplesAge = [];
// var index = 0;

// while (index < people.length) {
//   peoplesAge.push(people[index].age);
//   index ++;
// }

// console.log(peoplesAge);


// 7. Start with an array of numbers and create a new array with each number divided by 2.
//    For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].

// while loop:
// var numbers = [10, 100, 25];
// var divided = [];
// var index = 0;

// while (index < numbers.length) {
//   divided.push(numbers[index] / 2.0);
//   index ++;
// }

// console.log(divided);

// 8. Start with an array of strings and create a new array with each string's first letter only.
//    For example, ["hello", "goodbye"] becomes ["h", "g"].

// while loop:
// var words = ["hello", "elephant", "lego", "pancakes", "measles", "eggplant"];
// var hiddenMessage = [];
// var index = 0;

// while (index < words.length) {
//   hiddenMessage.push(words[index][0]);
//   index ++;
// }

// console.log(hiddenMessage);

//9.  Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
//    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// while loop:
// var people = [{name: "Alice", age: 30}, {name: "Blane", age: 26}];
// var doubleTheAge = [];
// var index = 0;

// while (index < people.length) {
//   doubleTheAge.push(people[index].age * 2);
//   index ++;
// }

// console.log(doubleTheAge);

//10. Start with an array of numbers and create a new array with each number converted into a string.
//    For example, [1, 2, 3] becomes ["1", "2", "3"].

// while loop:
var numbers = [5, 6, 52];
var stringNumbers = [];
var index = 0;

while (index < numbers.length) {
  stringNumbers.push(numbers[index].toString());
  index ++;
}

console.log(stringNumbers);