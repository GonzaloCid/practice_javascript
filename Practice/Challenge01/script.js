import Bookorg from "./forbooks.js";

const book1 = new Bookorg(
    "Count of Montecristo",
    "Alexander Dumas",
    "Historical Novel",
    "January 3, 1985",
    "used",
    1250
);
const book2 = new Bookorg(
    "Three little pigs",
    "Unknown",
    "Children book",
    "June 2 1995",
    "New",
    44
)
const book3 = new Bookorg(
    "De Zevende Zus",
    "Lucinda Riley",
    "novel",
    "15 June 2015",
    "Used",
    "698"
)
console.log(book1);
console.log(book1.bookage());
console.log(book2);
console.log(book2.bookage());
console.log(book3);
console.log(book3.bookage());