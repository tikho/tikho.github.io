
var width = document.getElementById('body').offsetWidth;

var height = document.getElementById('body').offsetHeight;

document.getElementById('width-in-pixels').innerHTML = width + '&nbsp';

document.getElementById('height-in-pixels').innerHTML = height + '&nbsp';

console.log(height);

$(window).resize(function(){

var width = document.getElementById('body').offsetWidth;

var height = document.getElementById('body').offsetHeight;

document.getElementById('width-in-pixels').innerHTML = width + '&nbsp';
document.getElementById('height-in-pixels').innerHTML = height + '&nbsp';

})

