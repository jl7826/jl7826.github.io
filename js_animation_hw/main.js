function move(){
  let crown = document.getElementById('crown');
  crown.style.opacity = "1";
  pos = -150;
  let id = setInterval(slideIn, 10);
  function slideIn(){
    if (pos === 160){
      clearInterval(id);
    } else {
      pos ++;
      crown.style.left = pos + 'px';
    }
  }
}
