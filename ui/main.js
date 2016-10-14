//Count of the times 'Click me ' is clicked'
var button = document.getElementById('counter');

button.onclick = function() {
  // create a request
  var request = new XMLHttpRequest();
  
  // capture the response and store it in a variable
  request.onreadystatechange = function() {
      if( request.readyState == XMLHttpRequest.DONE){
        //do something  
        if( request.status == 200){
            var counter =  request.responseText();
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
      }
      //request not served
  };
  //make a request to counter endpoint
  request.open('GET','http://varshajambunathan.imad.hasura-app.io/counter',true);
  request.send(null);
};