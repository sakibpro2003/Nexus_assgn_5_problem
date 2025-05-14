//Q1:
const people = [
  { name: "Alice", age: 25, gender: "Female" },
  { name: "Bob", age: 30, gender: "Male" },
  { name: "Charlie", age: 22, gender: "Male" },
  { name: "Diana", age: 28, gender: "Female" },
  { name: "Evan", age: 35, gender: "Male" },
];

const getMaleNames = (people) =>
  people
    .filter((person) => person.gender === "Male")
    .map((person) => person.name);

console.log(getMaleNames(people));

//Q2:
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
];

const extractTitles = (books) => books.map((book) => book.title);

console.log(extractTitles(books));

//Q3:
const square = (n) => n * n;
const double = (n) => n * 2;
const addFive = (n) => n + 5;

const composed = (n) => addFive(double(square(n)));

console.log(composed(4));

//Q4:
const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "Chevrolet", model: "Camaro", year: 2018 },
];

const sortCarsByYear = (carList) =>
  [...carList].sort((a, b) => a.year - b.year);

console.log(sortCarsByYear(cars));

//Q5:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvenNumbers = (arr) =>
  arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);

console.log(sumEvenNumbers(numbers));
