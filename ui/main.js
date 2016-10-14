console.log('Loaded!');

//Change the text of the my-text div
var element = document.getElementById('my-text');
element.innerHTML= 'New Value' ;

//Move the image
var img = document.getElementById('madi');

function () {
    marginLeft=  marginLeft+ 10;
    img.style.marginLeft= marginLeft + 'px'; 
}

img.onclick = function () {
    var interval = setInterval(moveRight,100);
};