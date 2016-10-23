var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = { 
    'article-one' : {
     title:' Article One | Varsha J',
     head:'Article One',
     date:'Sept 5, 2015',
     content:`<p>
                    This the content of my first article
                    This the content of my first article
                This the content of my first article
                This the content of my first article
                This the content of my first article
                </p>
    },
    'article-two' :{
        title:' Article One | Varsha J',
     head:'Article One',
     date:'Sept 5, 2015',
     content:`<p>
     This the content of my second article.
                This the content of my second article.
                This the content of my second article.
                This the content of my second article.
            </p>
    },
    'article-three' :{
        title:' Article One | Varsha J',
     head:'Article One',
     date:'Sept 5, 2015',
     content:`<p>
     This the content of my third article.
                 This the content of my third article.
                  This the content of my third article.
                   This the content of my third article.
            </p>
    }
};

function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var content=data.content;
    var head=data.head;
    
    var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="viewport" content="width-device-width,initial-scale-1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${head}
                </h3>
                <div>
                   ${date}
                </div>
                ${content}
            </div>
        </body>
    </html>`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/resume', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'resume.html'));
});

var names=[];
app.get('/submit-name', function (req, res) {
  //get the current name from the request object
  
  var name=req.query.name;
  names.push(name);
  res.send(JSON.stringify(names));
});

var counter= 0; 
app.get('/counter', function (req, res) {
  counter = counter+1;
  res.send(counter.toString());
});

app.get('/:articleName', function (req, res) { 
    var articleName = req.params.articleName; 
    res.send(createTemplate(articles[articleName])); 
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
