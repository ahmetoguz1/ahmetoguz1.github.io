// create variables for 
var levelInLevel = 1;
var level = 1;

// set timeout 500ms
var timeout = 500;

function levelManager()
{    
    // increase local level count when click the button
    levelInLevel++;

    // if clicked 3 times, go to next level with different timeout
    if(levelInLevel % 4 == 0)
    {
        levelInLevel = 1;
        level++;
        timeout -= 100;
    }
    // change text
    document.getElementById("level").innerHTML = "Level: " + level;
    document.getElementById("inLevel").innerHTML = "Stage in Current level: " + levelInLevel;
}

// set timer for mouseover to change button location
function setTimer()
{
    setTimeout(function(){
    var btn = document.getElementById("btnClickMe");
    btn.style.marginLeft = Math.random() * 695 + "px";
    btn.style.marginTop = Math.random() * 800 + "px";
  },
  timeout);
}