// Your code goes here
const image = document.querySelector('.bus')

image.addEventListener('click', function() {
  const imageSource = event.target.src;
  document.body.style.background = `url(${imageSource})`;
})

image.addEventListener('dblclick', function() {
  imageSource = event.target.src;
  document.body.style.background = 'white'
})

const anchor = document.querySelector('.nav')

anchor.addEventListener('mouseover', function() {
  document.querySelector('.nav').style.background = 'grey'
})

const type = document.querySelector('body')

type.addEventListener('keydown', function(event) {
  console.log(event)
})



const wheel = document.querySelector('.text-content')
wheel.addEventListener("wheel", wheelFunction);

function wheelFunction() {
  this.style.width = '200px';
}

document.querySelector("a").onfocus = function() {
  myFunction()
};

function myFunction() {
  document.querySelector("a").style.color = "red";
}