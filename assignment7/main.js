function squareNumber (number){
  let ans = number ** 2;
  console.log(`The result of squaring the number ${number} is ${ans}`);
  return ans;
}

function halfNumber (number){
  let ans = number / 2;
  console.log(`Half of ${number} is ${ans}`);
  return ans;
}

function percentOf (fraction, whole){
  let ans = (fraction / whole) * 100;
  console.log(`${fraction} is ${ans}% of ${whole}`);
  return ans;
}

function areaOfCircle (radius){
  let ans = Math.PI * (radius ** 2);
  ans = ans.toFixed(2);
  console.log(`The area of a circle with radius ${radius} is ${ans}`);
  return ans;
}

let display = document.getElementById('solution');

document.getElementById('square-button').addEventListener('click',function(){
  let user = document.getElementById('square-input').value;
  solution.innerHTML = `<h1> ${squareNumber(user)} </h1>`;
})

document.getElementById('half-button').addEventListener('click',function(){
  let user = document.getElementById('half-input').value;
  solution.innerHTML = `<h1> ${halfNumber(user)} </h1>`;
})

document.getElementById('percent-button').addEventListener('click',function(){
  let user1 = document.getElementById('percent1-input').value;
  let user2 = document.getElementById('percent2-input').value;
  solution.innerHTML = `<h1> ${percentOf(user1, user2)} </h1>`;
})

document.getElementById('area-button').addEventListener('click',function(){
  let user = document.getElementById('area-input').value;
  solution.innerHTML = `<h1> ${areaOfCircle(user)} </h1>`;
})
