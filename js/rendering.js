export function renderVideo(inputArray, idInput) {
    let container = document.querySelector('.result-inner');
    let prevPage = inputArray.pop();
    if(prevPage == undefined) container.innerHTML = ''; 

    for (let i=0; i < inputArray.length; i++ ) {
        container.innerHTML += `
        <div class="list-elem">
        <section class="video-instance">
            <img class="video-preview" src="${inputArray[i].image}"></img>
            <header class="video-title" onClick="window.open('http://youtube.com/watch?v=${idInput[i].idVideo}','_blank');">${inputArray[i].title}</header>
            <div class="video-author"><i class="fa fa-user" aria-hidden="true"></i> ${inputArray[i].author}</div>
            <div class="video-date"><i class="fa fa-calendar" aria-hidden="true"></i> ${inputArray[i].uploadDate}</div>
            <div class="video-views"><i class="fa fa-eye" aria-hidden="true"></i> ${idInput[i].views}</div>
            <div class="video-description">${inputArray[i].desc}</div>
        </section>
    </div>
`
    }
};    