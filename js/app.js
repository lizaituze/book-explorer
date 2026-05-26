import {
fetchBooks
}

from "./fetchBooks.js";

import {
displayBooks
}

from "./ui.js";

async function load(){

const books =
await fetchBooks();

displayBooks(
books.slice(
0,
12
)
);

}

load();

document
.getElementById(
"searchBtn"
)

.addEventListener(
"click",

async()=>{

const search =
document
.getElementById(
"searchInput"
)

.value;

const books =
await fetchBooks(
search
);

displayBooks(
books
);

}

);