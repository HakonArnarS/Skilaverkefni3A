
var mainDiv = document.querySelector("#main");
mainDiv.innerHTML = `
    <button class="button">Change background color</button>
`
var button = document.querySelector(".button"); 
var body = document.querySelector("body")

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    }

random_bg_color(button);

button.onclick = random_bg_color; 