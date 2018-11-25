import {searchVideos as goSearch}  from './queries.js';

function loadPage(){
    let page = document.querySelector("body");
    page.innerHTML += `
    <div class="wrapper">
        <header class="logo"></header>
        <div class="search">
            <input class="search-input" type="text" id="search-input" ">
            <button class="search-button" id="first-search">Search</button>
        </div>
        <div class="result-inner">
        </div> 
    </div>
`
};
loadPage();

let searchButton = document.getElementById('first-search');
let searchMore = document.getElementById('more-search');

searchButton.addEventListener("click", goSearch);
document.addEventListener("keydown", function(e){
   if (e.keyCode == 13) goSearch();
});

const container = document.querySelector('.result-inner');
                
let startX;
let scrollLeft;
let isDown;

container.addEventListener('mousedown',e => mouseIsDown(e));  
container.addEventListener('mouseup',e => mouseUp(e))
container.addEventListener('mouseleave',e=>mouseLeave(e));
container.addEventListener('mousemove',e=>mouseMove(e));

container.addEventListener('touchstart',e => mouseIsDown(e));  
container.addEventListener('touchend',e => mouseUp(e))
container.addEventListener('touchcancel',e=>mouseLeave(e));
container.addEventListener('touchmove',e=>mouseMove(e));

function mouseIsDown(e){
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    if (container.scrollLeft > container.scrollWidth - 3000){
        console.log("LOAD MORE");
            goSearch();
    }
}
function mouseUp(e){
  isDown = false;
}
function mouseLeave(e){
  isDown = false;
}
function mouseMove(e){
  if(isDown){
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walkX = x - startX;
    container.scrollLeft = scrollLeft - walkX;      
  }}
