import {renderVideo as toRender} from './rendering.js';
let nextPageToken = '';
let saveInput;

export function searchVideos(){
let input = document.querySelector("#search-input").value;

if(saveInput != input) nextPageToken = '';
saveInput = input;

fetch(`https://www.googleapis.com/youtube/v3/search?pageToken=${nextPageToken}&key=AIzaSyAywPAQmtJ1zukV8EGqyS_d8UXO8oESiH4&type=video&part=snippet&maxResults=15&q=${input}`)
.then(res => res.json())
.then(res => {
    let idArray=[];
    let infoArray=[];
    nextPageToken = res.nextPageToken;
    for (let i of res.items){
        infoArray.push({
            'title': i.snippet.title, 
            'author': i.snippet.channelTitle,
            'desc': i.snippet.description,
            'image': i.snippet.thumbnails.medium.url,
            'uploadDate': i.snippet.publishedAt});
        idArray.push(i.id.videoId);
        
            }
    infoArray.push(res.prevPageToken);
    
    let str = idArray.join();
    idArray = [];
   
    fetch(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyAywPAQmtJ1zukV8EGqyS_d8UXO8oESiH4&id=${str}&part=snippet,statistics`)
    .then(res => res.json())
    .then(res => { 
          for(let i of res.items){
            idArray.push({
                'idVideo': i.id,
                'views': i.statistics.viewCount});
    }
})
    .then(res =>{
        toRender(infoArray, idArray);
          });
});
}
