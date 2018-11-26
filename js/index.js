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
        
<div class="additional-buttons">
    <button class="slide-left"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
    <button class="slide-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>
</div>
    </div>
`
};
loadPage();

let searchButton = document.getElementById('first-search');
let goLeft = document.querySelector('.slide-left');
let goRight = document.querySelector('.slide-right');

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


function checkWidth(){
    if (container.scrollLeft > container.scrollWidth - 3000){
        console.log("LOAD MORE");
            goSearch();
    }
}

function mouseIsDown(e){
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    checkWidth();
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

goLeft.addEventListener('click', function(){
    container.scrollLeft -= 300;})

goRight.addEventListener('click', function(){
    container.scrollLeft += 300;
    checkWidth();})
