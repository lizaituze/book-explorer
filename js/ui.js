import {
addFavorite
}

from "./favorites.js";

export function displayBooks(
books
){

const container =
document.getElementById(
"booksContainer"
);

container.innerHTML="";

books.forEach(
book=>{

container.innerHTML += `

<div class="bg-white p-4 shadow rounded">

<h3>

${book.title}

</h3>

<p>

${book.author_name?.[0]
|| "Unknown"}

</p>

<button
class="saveBtn bg-green-500 text-white p-2"

data-title="${book.title}"

>

Favorite

</button>

</div>

`;

});

}