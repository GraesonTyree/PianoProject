function playAudio(noteLet = 'a') {
    try {
        var audio = new Audio('Notes/' + noteLet + ".wav");
        audio.play();
    }
    catch(e) {
        alert("Audio is not supported by this browser");
    }
    

}

document.addEventListener("keypress", (event) => {
    try {
        playAudio(event.key)
    }
    catch(e) {
        alert("Key pressed is not associated with the piano");
    }
});
