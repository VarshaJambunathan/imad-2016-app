console.log('Loaded!');

//Change the text of the my-text div
var element = document.getElementById('my-text');
element.innerHTML= 'New Value' ;

//Move the image
var image = document.getElementById('madi');
image.onClick = function () {
  
  image.style.marginleft= '100px';  
};