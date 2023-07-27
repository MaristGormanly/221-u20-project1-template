document.getElementById('portal_button').addEventListener('click', (event) =>{
    goToLocation('http://my.marist.edu');
})

let feedItem1 = {
    title : "Marist Story 1",
    body : "This is the body of the story, it may be longer",
    linkUrl : "https://www.marist.edu/",
    imageUrl :  "/images/campus.png",
}

let feedItem2 = {
    title : "Marist Story 2" ,
    body : "This is the body of the story, it may be longer",
    linkUrl : "https://www.marist.edu/" ,
    imageUrl :  "/images/hancock.jpeg" ,
}

let feedItem3 = {
    title : 'Marist Story 3'; 
    body : 'This is the body of the story, it may be longer',
    linkUrl : 'https://www.marist.edu/',
    imageUrl :  '/images/news_pic.jpg'
}
 
var currentStories = [feedItem1, feedItem2, feedItem3]

window.addEventListener("load", () => {
    for(let i=0; i< currentStories.length; i++){
        displayFeed(currentStories[i]);
    }
});

function displayFeed(currentStories){
    let feed = document.getElementById('newsFeed');
    feed.innerHTML += "<span><img class = 'myImage' scr = '" + currentStories.imageUrl +"' >" + "</span>";
    feed.innerHTML += "<span><h2><a href = '"+ currentStories.linkUrl + "'>" + currentStories.Title + "</a></h2></span>";
    feed.innerHTML += "<p>" + currentStories.Body + "</p>";
    feed.innerHTML += "</hr>";
}

