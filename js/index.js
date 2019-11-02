// Your code goes here
const navi = document.querySelector('.nav');
navi.addEventListener('mouseenter', () => {
    navi.style.transform='scale(1.2)';
    navi.style.transition="all 0.3s";
});

navi.addEventListener('mouseleave', () => {
    navi.style.transform = "scale(1)";
    navi.style.transition='all 0.3s';
});


const title = document.querySelector('.logo-heading');
title.addEventListener('mouseover', () => {
title.style.color='yellow';

setTimeout(function() {
    title.style.color = "";
}, 500);
}, false);


const buttons = document.querySelector('.btn');
buttons.addEventListener('focus', () => {
    buttons.style.background = 'blue';
});

buttons.addEventListener('blur', () => {
    title.style.background= '';
});


//

const name = document.querySelector('');
name.addEventListener('scroll', () => {

});




//

const name2 = document.querySelector('');
name2.addEventListener('dblclick', () => {

});