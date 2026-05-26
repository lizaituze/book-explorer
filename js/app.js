import { fetchBooks }
from "./fetchBooks.js";

import { renderBooks }
from "./ui.js";

async function loadBooks(){

const books =
await fetchBooks();

renderBooks(
books.slice(0,12)
);

}

loadBooks();

const searchBtn =
document.getElementById(
"searchBtn"
);

searchBtn.addEventListener(
"click",
async ()=>{

const value =
document.getElementById(
"searchInput"
).value;

const books =
await fetchBooks(
value
);

renderBooks(
books
);

});