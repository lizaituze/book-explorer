const URL =
"https://openlibrary.org/search.json?q=";

export async function fetchBooks(
search="programming"
){

try{

const response =
await fetch(
URL + search
);

const data =
await response.json();

return data.docs;

}

catch(error){

console.log(error);

return [];

}

}