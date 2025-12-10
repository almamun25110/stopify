console.log("welcome to stopify");
//initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let songPlay = document.getElementById('songPlay');
let gif = document.getElementById('gif');
let myProgressBar = document.getElementById('myProgressBar');


//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    } else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})

songPlay.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        songPlay.classList.remove('fa-play');
        songPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }else {
        audioElement.pause();
        songPlay.classList.remove('fa-pause');
        songPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})
//Listen to evants

audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = ((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
