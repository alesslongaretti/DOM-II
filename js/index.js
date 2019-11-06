// mouseenter, mouseleave
const navi = document.querySelector('.nav');
navi.addEventListener('mouseenter', () => {
    navi.style.transform='scale(1.2)';
    navi.style.transition="all 0.3s";
});

navi.addEventListener('mouseleave', () => {
    navi.style.transform = "scale(1)";
    navi.style.transition='all 0.3s';
});

// mouseover

const title = document.querySelector('.logo-heading');
title.addEventListener('mouseover', () => {
title.style.color='yellow';


setTimeout(function() {
    title.style.color = "";
}, 500);
}, false);

// click

const intro = document.querySelector('.intro');
const introP = document.querySelector('.intro p');

intro.addEventListener('click', () => {
    intro.style.color = 'lightpink';
});

introP.addEventListener('click', (e) => {
    e.stopPropagation();
});


// scroll

window.addEventListener('scroll', function() {
    document.querySelector('h1').innerHTML = pageYOffset + 'px';
  });


// Mouse Out

let noBorder = document.querySelector('.footer');
noBorder.addEventListener('mouseout', function(event) {
  event.target.style.border = '2px solid lightblue';
});


// resize

const heightOutput = document.querySelector('.content-destination h2');
const widthOutput = document.querySelector('.content-destination p');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.addEventListener('resize', reportWindowSize);


// Load

// window.addEventListener('load', (event) => {
//     alert('Welcome to our page')
// });


// Double Click
const bold = document.querySelector('html');
bold.addEventListener("dblclick", (event) => {
  event.target.style.background= "lightgrey";
});


//Wheel
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.8, scale), 1);

    el.style.transform = `scale(${scale})`;
}
let scale = 1;
const el = document.querySelector('.intro h2');
el.addEventListener('wheel', zoom);


//Focus
const focused = document.querySelector('a');

focused.addEventListener('focus', (event) => {
  event.target.style.border = '1px solid #17A2B8';
});

//
TweenMax.to(document.querySelector('.img-content'), 1, {x:50, rotation:360, scale:1});





  









