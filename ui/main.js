console.log('Loaded!');

//Change the text of the my-text div
var element = document.getElementById('my-text');
element.innerHTML= 'New Value' ;

//Move the image
var img = document.getElementById('madi');
img.onclick = function () {
  
  img.style.marginleft= '100px';  
};