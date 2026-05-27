import { addFavorite } from "./favorites.js";

export function displayBooks(books){

const container =
document.getElementById(
"booksContainer"
);

container.innerHTML = "";

books.forEach(
(book,index)=>{

let displayBook = book;
if (
	(book.title?.toLowerCase().includes("pre-release") ||
		book.title?.toLowerCase().includes("pre release")) &&
	!book.cover_i
) {
	const replacement = books.find(
		(b) => b.cover_i && b.title?.toLowerCase() !== book.title?.toLowerCase()
	);
	if (replacement) displayBook = replacement;
}

const image =
	displayBook.cover_i
		? `https://covers.openlibrary.org/b/id/${displayBook.cover_i}-L.jpg`
		: "https://via.placeholder.com/200x300?text=No+Cover";

container.innerHTML += `

<div class="
card
flex
flex-col
h-full
">

<img
src="${image}"

class="
w-full
h-72
object-cover
rounded-xl
">

<div class="
p-4
flex
flex-col
flex-grow
">

<h3 class="
text-xl
font-bold
min-h-[70px]
">

${displayBook.title}

</h3>

<p class="
text-gray-600
mb-4
">

${displayBook.author_name?.[0] || "Unknown"}

</p>

<button

class="
saveBtn
bg-yellow-400
text-black
font-bold
rounded-xl
p-3
w-full
mt-auto
hover:bg-yellow-500
transition
"

data-index="${index}"

>

❤️ Add Favorite

</button>

</div>

</div>

`;

});

document
.querySelectorAll(
".saveBtn"
)

.forEach(
button=>{

button.addEventListener(
"click",

()=>{

const index = button.dataset.index;
addFavorite(books[index]);

alert(
"Book added to favorites"
);

}

);

}

);

}