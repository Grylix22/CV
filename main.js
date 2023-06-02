// makes lissteners for menu <li> click, open site for any
// localStorage.setItem("tooltipOff");

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

// // remove tooltip when click
// const tooltip = document.getElementById('audio-description');
// tooltip.addEventListener('click', function handleClick(e) {
//      if(localStorage.getItem("tooltipOff") != "true") {
//           tooltip.style.display = "none";
//           document.getElementById('controlAudio').style.height = "40px";
//           localStorage.setItem("tooltipOff", true);
//           tooltip.removeEventListener;
//      }
// });

// zrób funkcję która sprawdza czy tooltipOff jest true or false
// jeżeli false wrzuć do html diva z id audio-description

// add to website audio tooltip
function checkTooltipOff() {
     // if(localStorage.getItem("tooltipOff") != "true") {
          let audioTooltip = document.createElement("div");
          audioTooltip.innerHTML = "*nastrojowy efekt*";
          audioTooltip.id = "audio-description";
          document.getElementById("controlAudio").appendChild(audioTooltip);
     // }
     // console.log(localStorage.getItem("tooltipOff"));
}
checkTooltipOff();