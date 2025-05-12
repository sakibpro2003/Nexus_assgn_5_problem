//Q: 1
const people = [
  { name: "Alice", age: 25, gender: "Female" },
  { name: "Bob", age: 30, gender: "Male" },
  { name: "Charlie", age: 22, gender: "Male" },
  { name: "Diana", age: 28, gender: "Female" },
  { name: "Evan", age: 35, gender: "Male" },
];

const filterOut = () => {
  const filter = people.filter((male) => male.gender !== "Female");
  const names = filter.map((singleMale) => singleMale.name);
  console.log(names);
};

filterOut();

//Q: 2
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
];

const getBookTitles = (books) => {
  return books.map((book) => book.title);
};

const title = getBookTitles(books);
console.log(title);

//Q:3
const squareTheNumber = (number) => {
  return number * number;
};
const doubleTheNumber = (number) => {
  return number * 2;
};
const addTheNumber = (number) => {
  return number + 5;
};

const composeFun = (number) => {
  const sqrFunRes = squareTheNumber(number);
  const doubleFunRes = doubleTheNumber(sqrFunRes);
  return addTheNumber(doubleFunRes);
};

const squareResult = squareTheNumber(4);
const doubleResult = doubleTheNumber(4);
const addResult = addTheNumber(4);
const composeResult = composeFun(4);

console.log(composeResult);

//Q:4
const cars = [
  { make: "Toyota", model: "Corolla", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2021 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "Chevrolet", model: "Camaro", year: 2018 },
];

const sortByYear = (cars) => {
  return cars.sort((car1, car2) => car1.year - car2.year);
};

const sortedArray = sortByYear(cars);
console.log(sortedArray);

//Q:5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const calculateFun = (numbers) => {
  const to = numbers.reduce((a, c) => {
    if (c % 2 == 0) {
      return a + c;
    }
    return a;
  }, 0);

  console.log(to);
};

const res = calculateFun(numbers);
