//                                                  No_1

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ] 

// function getNamesByGrade(students, grade) {
//   const updatedStudents = students.map(student => {
//     let studentGrade;
//     if (student.percent >= 85 && student.percent <= 100) {
//       studentGrade = 5;
//     } else if (student.percent >= 70 && student.percent < 85) {
//       studentGrade = 4;
//     } else if (student.percent >= 60 && student.percent < 70) {
//       studentGrade = 3;
//     } else {
//       studentGrade = 2;
//     }
//     return { ...student, grade: studentGrade };
//   });

//   return updatedStudents
//     .filter(student => student.grade === grade)
//     .map(student => student.name);
// }

// console.log(getNamesByGrade(students, 5))


//                                                  No_2


// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// const elementsCount = animals.reduce((acc, animal) => {
//   acc[animal] = (acc[animal] || 0) + 1;
//   return acc;
// }, {});

// console.log(elementsCount);


//                                                  No_3

// let arr =  [1, 2, 3, 4, 5]
// let newArr = []

// arr.map((value, index, array) => {
//   newArr.push(value**2)
// })
// console.log(newArr);


//                                                  No_4


// let arr = [ 1, -4, 12, 0, -3, 29, -150]

// const onlyPositive = arr.filter((v, i, a) => {
//   return v > 0
// })

// const sum = onlyPositive.reduce((acc, cur) => {
//   return acc + cur
// }, 0)

// console.log(`Natija ${sum}`);


//                                                  No_5


// let str = 'George Raymond Richard Martin'
// let arr = str.split(" ")

// const newArr = arr.map((v, i, a) => {
//   return v.slice(0, 1)
// })

// console.log(newArr.join(""));


//                                                  No_6


// function getAgeDifference(people) {
//   people.sort((a, b) => a.age - b.age);

//   const youngest = people[0].age;
//   const oldest = people[people.length - 1].age;

//   return oldest - youngest;
// }

// const people = [
//   { name: 'John', age: 13 },
//   { name: 'Mark', age: 56 },
//   { name: 'Rachel', age: 45 },
//   { name: 'Nate', age: 67 },
//   { name: 'Jeniffer', age: 65 }
// ];

// console.log(getAgeDifference(people));


//                                                  No_7


// function getEvenOdd(arr) {
//   const evenNumbers = arr.filter(num => num % 2 === 0);
//   const oddNumbers = arr.filter(num => num % 2 !== 0);

//   return { evenNumbers, oddNumbers };
// }

// console.log(getEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


//                                                  No_8


// function removeDuplicates(arr) {
//   return arr.reduce((unique, current) => {
//     if (!unique.includes(current)) {
//       unique.push(current);
//     }
//     return unique;
//   }, []);
// }

// console.log(removeDuplicates([1, 1, 2, 3, 4, 4, 5, 6, 2, 7, 8, 8, 9, 10]))


//                                                  No_9


const products = [
  { id: 3, name: "Redmi", price: 300, rating: 4.0, discount: 10 },
  { id: 1, name: "IPhone", price: 1200, rating: 4.9, discount: 15 },
  { id: 4, name: "Samsung", price: 1000, rating: 4.8, discount: 12 },
  { id: 2, name: "Honor", price: 350, rating: 4.1, discount: 8 }
];


const sortById = [...products].sort((a, b) => a.id - b.id);
const sortByName = [...products].sort((a, b) => a.name.localeCompare(b.name));
const sortByPrice = [...products].sort((a, b) => a.price - b.price);
const sortByRating = [...products].sort((a, b) => b.rating - a.rating);
const sortByDiscount = [...products].sort((a, b) => b.discount - a.discount);

console.log("ID bo'yicha:", sortById)
// console.log("Name bo'yicha:", sortByName);
// console.log("Price bo'yicha:", sortByPrice);
// console.log("Rating bo'yicha:", sortByRating);
// console.log("Discount bo'yicha:", sortByDiscount);


//                                                  No_10
//                                                  No_11
//                                                  No_12
//                                                  No_13
//                                                  No_14
//                                                  No_15
//                                                  No_16
//                                                  No_17
//                                                  No_18
//                                                  No_19
//                                                  No_20