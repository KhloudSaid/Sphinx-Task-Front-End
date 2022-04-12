
// Handling preloading animation 

const container = document.getElementById('container');
const wrapper = document.getElementById('wrap');
const loader = document.getElementById('loader');
const card = document.getElementById('card');

function showData(){
  setTimeout(showContent, 500);
}

function showContent() {
  loader.style.display = "none";
  card.style.display = "block";
}

showData();

// Handling resize 

const contentWidth  = container.clientWidth;
const contentHeight = container.clientHeight;

window.addEventListener("resize", resize);

function resize(){   
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let max = windowWidth >= contentWidth && windowHeight >= contentHeight;

    let scale = Math.min(
        windowWidth / contentWidth, 
        windowHeight / contentHeight 
    );
     setTimeout(() => {
      wrapper.style.transform = max ? "" : "scale(" + scale + ")"
    }, 200);
}
resize();

// Global Variables (DOM)

const choiceA = document.getElementById("ch1");
const choiceP = document.getElementById("ch2");
const qtns = document.getElementsByClassName("qtn");

const ans1 = document.getElementById("ans1");
const ans2 = document.getElementById('ans2');
const ans3 = document.getElementById('ans3');

const right1 = document.getElementById('right1');
const right2 = document.getElementById('right2');
const right3 = document.getElementById('right3');

const wrong1 = document.getElementById('wrong1');
const wrong2 = document.getElementById('wrong2');
const wrong3 = document.getElementById('wrong3');

const overlay = document.getElementById('overlay');
const model = document.getElementById('model');
const closeBtn = document.getElementById('close');

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');

const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');


// Handling two choices a , p  

choiceA.addEventListener('click', backColorA ) 
function backColorA (){
  choiceA.style.backgroundColor = "rgb(15, 160, 197)";
  choiceP.style.backgroundColor = "";
  for(let qtn of qtns)
  {
    qtn.style.cursor = "pointer"
  }
}

choiceP.addEventListener('click', backColorP )
function backColorP (){
  choiceP.style.backgroundColor = "rgb(15, 160, 197)";
  choiceA.style.backgroundColor = "";
  for(let qtn of qtns)
  {
    qtn.style.cursor = "pointer"
  }
}


// Handling three Questions and putting Answers //

ans1.addEventListener('click', putAnswer1);
ans2.addEventListener('click', putAnswer2);
ans3.addEventListener('click', putAnswer3);

function putAnswer1(){
  let ch1Color = choiceA.style.backgroundColor;
  let ch2Color = choiceP.style.backgroundColor;

  if ( ch1Color === "rgb(15, 160, 197)" )
  { 
    ans1.innerHTML = "a";
  } 
  else if ( ch2Color === "rgb(15, 160, 197)" )
  {
    ans1.innerHTML = "p";
  }
  if ( ans1.getAttribute('data-Answer') === ans1.innerHTML ){
    choiceA.style.backgroundColor = "";
    right1.style.visibility = "visible";
    audio1.play();
    for(let qtn of qtns){
      qtn.style.cursor = "default"
      ans1.removeEventListener('click', putAnswer1)
    }
  } 
  else if (ans1.innerHTML === "&nbsp;")
   {
    wrong1.style.visibility = "hidden";
  } 
  else 
  {
    wrong1.style.visibility = "visible";
    audio2.play();
    setTimeout(() => {
      ans1.innerHTML = "&nbsp;"
      wrong1.style.visibility = "hidden"
    }, 1000 );
  }

  if (ans1.innerHTML === ans1.getAttribute('data-Answer') && ans2.innerHTML === ans2.getAttribute('data-Answer') && ans3.innerHTML === ans3.getAttribute('data-Answer'))
  {
    allDone();
  }
}


function putAnswer2(){
  let ch1Color = choiceA.style.backgroundColor;
  let ch2Color = choiceP.style.backgroundColor;

  if ( ch1Color === "rgb(15, 160, 197)" )
  { 
    ans2.innerHTML = "a";
  } 
  else if ( ch2Color === "rgb(15, 160, 197)" )
   {
    ans2.innerHTML = "p";
  }

  if ( ans2.getAttribute('data-Answer') === ans2.innerHTML )
  {
    choiceP.style.backgroundColor = "";
    right2.style.visibility = "visible";
    audio1.play();
    for(let qtn of qtns)
    {
      qtn.style.cursor = "default"
    }
    ans2.removeEventListener('click', putAnswer2)
  } else if (ans2.innerHTML === "&nbsp;")
   {
    wrong2.style.visibility = "hidden";
  } 
  else
   {
    wrong2.style.visibility = "visible";
    audio2.play();
    setTimeout(() => {
      ans2.innerHTML = "&nbsp;"
      wrong2.style.visibility = "hidden"
    }, 1000 );
  }

  if (ans1.innerHTML === ans1.getAttribute('data-Answer') && ans2.innerHTML === ans2.getAttribute('data-Answer') && ans3.innerHTML === ans3.getAttribute('data-Answer')){
    allDone();
  }
}


function putAnswer3(){
  let ch1Color = choiceA.style.backgroundColor;
  let ch2Color = choiceP.style.backgroundColor;

  if ( ch1Color === "rgb(15, 160, 197)" )
  { 
    ans3.innerHTML = "a";
  } else if ( ch2Color === "rgb(15, 160, 197)" )
  {
    ans3.innerHTML = "p";
  }
  if ( ans3.getAttribute('data-Answer') === ans3.innerHTML )
  {
    choiceA.style.backgroundColor = "";
    right3.style.visibility = "visible";
    audio1.play();
    for(let qtn of qtns){
      qtn.style.cursor = "default";
      ans3.removeEventListener('click', putAnswer3)
    }
  } 
  else if (ans3.innerHTML === "&nbsp;") {
    wrong3.style.visibility = "hidden";
  } 
  else
   {
    wrong3.style.visibility = "visible";
    audio2.play();
    setTimeout(() => {
      ans3.innerHTML = "&nbsp;"
      wrong3.style.visibility = "hidden"
    }, 1000 );
  }

  if (ans1.innerHTML === ans1.getAttribute('data-Answer') && ans2.innerHTML === ans2.getAttribute('data-Answer') && ans3.innerHTML === ans3.getAttribute('data-Answer')){
    allDone();
  }
}

// Handling close button  

function closeButton(){
  overlay.style.display = "none";
  model.style.display = "none";
  closeBtn.style.display = "none";
}

function overlayModel(){
  overlay.style.display = "block";
  model.style.display = "block";
  closeBtn.style.display = "block";
}


// Handling dummy and help

button1.addEventListener('click', dummyImage);
button2.addEventListener('click', helpWindow);

function dummyImage(){
  overlayModel();
  document.getElementById('dummy').style.display = "block";

  closeBtn.addEventListener('click', closeDummyWindow);

  function closeDummyWindow(){
    closeButton();
    document.getElementById('dummy').style.display = "none";
  }
}

function helpWindow(){
  overlayModel();
  document.getElementById('help').style.display = "block";

  closeBtn.addEventListener('click', closeWindow);

  function closeWindow(){
    closeButton();
    document.getElementById('help').style.display = "none";
  }
}


// Handling buttons on footer 

button3.addEventListener('click', refresh);
button4.addEventListener('click', showAns);

function refresh(){
  ans1.innerHTML = "&nbsp;";
  ans2.innerHTML = "&nbsp;";
  ans3.innerHTML = "&nbsp;";
  
  right1.style.visibility = "hidden";
  right2.style.visibility = "hidden";
  right3.style.visibility = "hidden";
  
  wrong1.style.visibility = "hidden";
  wrong2.style.visibility = "hidden";
  wrong3.style.visibility = "hidden";

  button4.style.opacity = "1";
  choiceA.style.opacity = "1";
  choiceP.style.opacity = "1";

  choiceA.style.cursor = "pointer";
  choiceP.style.cursor = "pointer";
  button4.style.cursor = "pointer";

  choiceA.style.backgroundColor = "";
  choiceP.style.backgroundColor = "";

  for(let qtn of qtns){
    qtn.style.cursor = "default";
  }

  choiceA.addEventListener('click', backColorA);
  choiceP.addEventListener('click', backColorP);
  ans1.addEventListener('click', putAnswer1);
  ans2.addEventListener('click', putAnswer2);
  ans3.addEventListener('click', putAnswer3);
}

function showAns(){
  ans1.innerHTML = ans1.getAttribute('data-Answer');
  ans2.innerHTML = ans2.getAttribute('data-Answer');
  ans3.innerHTML = ans3.getAttribute('data-Answer');


  right1.style.visibility = "visible";
  right2.style.visibility = "visible";
  right3.style.visibility = "visible";

  allDone();
}

function allDone(){
  button4.style.opacity = "0.5";
  choiceA.style.opacity = "0.4";
  choiceP.style.opacity = "0.4";
  choiceA.style.cursor = "default";
  choiceP.style.cursor = "default";
  
  // Removing events to stop any clicks 

  choiceA.removeEventListener('click', backColorA);
  choiceP.removeEventListener('click', backColorP);
  ans1.removeEventListener('click', putAnswer1);
  ans2.removeEventListener('click', putAnswer2);
  ans3.removeEventListener('click', putAnswer3);
  
  button4.style.cursor = "default"
}
