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

var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //make a request to the server and send the name
    // create a request
  var request = new XMLHttpRequest();
  
  // capture the response and store it in a variable
  request.onreadystatechange = function() {
      if( request.readyState === XMLHttpRequest.DONE){
        //do something  
        if( request.status === 500){
            //capture a set of names and render it as a list
            var names = request.responseText;
            names = JSON.parse(names);
            var list = '';
            for( var i=0;i<names.length;i++) {
                list += '<li>' + names[i] + '</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
        }
      }
      //request not served
  };
  
  //send name
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  //make a request to counter endpoint
  request.open('GET','http://varshajambunathan.imad.hasura-app.io/submit-name' +name ,true);
  request.send(null);
    
};