import {searchVideos as goSearch}  from './queries.js';

let searchButton = document.getElementById('first-search');
let searchMore = document.getElementById('more-search');


searchButton.addEventListener("click", goSearch);
document.addEventListener("keydown", function(e){
   if (e.keyCode == 13) goSearch();
});

searchMore.addEventListener("click", goSearch);


