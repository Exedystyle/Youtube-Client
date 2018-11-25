export function renderVideo(inputArray, idInput) {
    let container = document.querySelector('.result-inner');
    
    let prevPage = inputArray.pop();
    if(prevPage == undefined) container.innerHTML = ''; 
    
    //console.log(idInput);

    for (let i=0; i < inputArray.length; i++ ) {
        container.innerHTML += `
        <div class="list-elem">
        <section class="video-instance">
            <img class="video-preview" src="${inputArray[i].image}"></img>
            <header class="video-title" onClick="window.open('http://youtube.com/watch?v=${idInput[i].idVideo}','_blank');">${inputArray[i].title}</header>
            <div class="video-author">${inputArray[i].author}</div>
            //fix date
            <div class="video-date">${inputArray[i].uploadDate}</div>
            <div class="video-views">${idInput[i].views}</div>
            <div class="video-description">${inputArray[i].desc}</div>
        </section>
    </div>
`
    }
};    
    
    


//doesnt work, fix it when the markup will be done
//there should be onLoad
export function loadPage(){
    let page = document.getElementsByTagName("body");
    
    page.innerHTML += `
        <div class="wrapper">
        <header>youtube logo</header>
        <div class="search">
            <span>search</span> 
            <input type="text" id="search-input">
            <button class="search-button">go</button>
        </div>
        <div class="result">
        </div>  
    </div>
`
}