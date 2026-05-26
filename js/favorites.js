export function getFavorites(){

return JSON.parse(

localStorage.getItem(
"favorites"
)

)||[];

}

export function addFavorite(
book
){

const favorites =
getFavorites();

favorites.push(
book
);

localStorage.setItem(

"favorites",

JSON.stringify(
favorites
)

);

}