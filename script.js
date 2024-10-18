let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progressbar');
let gif = document.getElementById('gif');

let songs = [
    {songName :"Salam-e-Ishq", filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName :"tumari kasham", filePath:"song/2.mp3",coverPath:"cover/2.jpg"},
    {songName :"Isq- nachele", filePath:"song/3.mp3",coverPath:"cover/3.jpg"},
    {songName :"Ham tere bin", filePath:"song/4.mp3",coverPath:"cover/4.jpg"},
    {songName :"Bhuladiya tumene hame", filePath:"song/5.mp3",coverPath:"cover/5.jpg"},
]

masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<= 0){
        audioElement.play();
        masterPlay.classList.remove("ri-play-circle-line");
        masterPlay.classList.add("ri-arrow-right-circle-line");
        gif.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove("ri-arrow-right-circle-line");
        masterPlay.classList.add("ri-play-circle-line");
        gif. style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value  = progress;
})
myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})