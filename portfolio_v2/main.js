// fullscreen navigation
function openNav(){
  document.getElementById('nav').style.width="100%";
}

function closeNav(){
  document.getElementById('nav').style.width = "0%";
}
// fullscreen navigation
let isDone = false;

let elem = document.getElementById('img_pos');
let bounding = elem.getBoundingClientRect();

if (
	bounding.top >= 0 &&
	bounding.left >= 0 &&
	bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
	bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
) {
	console.log('In the viewport!');
} else {
	console.log('Not in the viewport... whomp whomp');
}

var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

console.log(isInViewport(elem));

elem.style.position = "relative";
elem.style.opacity = "0";

function move(){
  let elem = document.getElementById('img_pos');
  elem.style.opacity = "1";
  pos = -500;
  let id = setInterval(slideIn, 1);
  function slideIn(){
    if (pos === 0){
      clearInterval(id);
    } else {
      pos ++;
      elem.style.left = pos + 'px';
    }
  }
}

// fade in 이 어떻까...
function move2(){
  let elem = document.getElementById('img_pos');
  elem.style.opacity = "1";
  pos = -500;
  let id = setInterval(slideIn, 1);
  function slideIn(){
    if (pos === 0){
      clearInterval(id);
    } else {
      pos ++;
      elem.style.left = pos + 'px';
    }
  }
}

function check(){
  if (isInViewport(elem) && isDone == false){
    move();
    isDone = true;
  }
}