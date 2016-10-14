//Count of the times 'Click me ' is clicked'
var button = document.getElementById('counter');

button.onclick = function() {
  // create a request
  var request = new XMLHttpRequest();
  
  // capture the response and store it in a variable
  request.onreadystatechange = function() {
      if( request.readyState === XMLHttpRequest.DONE){
        //do something  
        if( request.status === 200){
            var counter =  request.responseText;
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

//send name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //make a request to the server and send the name
    
    //capture a set of names and render it as a list
    var name = ['name 1*', 'name 2*','name 3*' ]
}