var express = require('express');
var app = express();

var mustache = require('mustache-express'), path = require('path');

app.engine('mustache', mustache());
app.set('view engine', 'mustache');
app.set('views', path.resolve(__dirname, 'mustache'));

app.set('port', process.env.PORT || 3000);

//Landing Page
app.get("/", function (request, response) {
    response.status(200);
    response.type('text/html');
    response.send('<h1>Landing Page</h1>');
});

//Page page
app.get("/page", function(request, response) 
{
    response.render("page",
    {
        'title':'Guest Book',
        'entries': 
        [
            {
                'subject':'Good day out',
                'review' : 'We had a really good time visiting the museum.'
            },
            {
                'subject':'Entry 2',
                'review' : 'Rev 2'
            },
            {
                'subject':'Ent 3',
                'review' : 'Sauroman'
            }
        ]
    });
});

//Page page
app.get("/store", function(request, response) 
{
    response.render("store",
    {
        'title':'Store',
        'entries': 
        [
            {
                'Item':'Cool program skills',
                'Price' : 'Time.'
            },
            {
                'Item':'Digital lock',
                'Price' : '£3.00'
            },
            {
                'Item':'Shoelaces',
                'Price' : '£0.00'
            }
        ]
    });
});

//404 Page
app.use(function(request, response)
{
    response.type('text/plain');
    response.status(404);
    response.send('Bad Luck, 404');
});

app.listen(app.get('port'), function() 
{
    console.log('Server Running, ctrl+c to stop');
});