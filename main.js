// makes lissteners for menu <li> click, open site for any


// audio control
const audiobar = document.getElementById("audiobar");
const audioPause = document.getElementById("audioPause");

function addBottomStickyBar() {
     let audio = document.createElement("audio");
     audio.title = "*Nastrojowy efekt*"
     audio.type = "audio/mpeg";
     audio.src = "soft-rain.mp3";
     audio.controls = "a";
     audio.controlsList = "nofullscreen nodownload noplaybackrate"; // TODO
     audio.loop = "yes";
     audio.volume = "0.05";
     audio.style.position = "fixed";
     audio.style.right = "0";
     audio.style.bottom = "0";
     audio.style.height = "40px";
     audio.style.width = "300px";
     audio.style.zIndex = "2";
     audio.pause;
     document.getElementById("controlAudio").appendChild(audio);
}
addBottomStickyBar();


// jump to section
function moveToSection(e) {
     const section = document.getElementsByClassName('spaceBar');
     section[e].scrollIntoView()
}

// remove tooltip when click
const tooltip = document.getElementById('audio-description');
tooltip.addEventListener('click', function handleClick(e) {
     tooltip.style.display = "none";
     document.getElementById('controlAudio').style.height = "40px";
     tooltip.removeEventListener;
});