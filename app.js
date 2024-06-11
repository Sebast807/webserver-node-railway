
require('dotenv').config();
const hbs = require('hbs');
const express = require('express');
const app = express();

const port = process.env.PORT;

const args = {
    nombre: 'Sebastian',
    titulo: 'Curso NodeJs-Legacy'
}

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

app.get('/', ( _, res ) => {
    res.render('home', args)
})

app.get('/generic', ( _, res ) => {
    res.render('generic', args);
})

app.get('/elements', ( _, res ) => {
    res.render('elements', args);
})


// app.get('/elements', ( _, res ) => {
//     res.sendFile(__dirname + '/public/elements.html');
// })

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})

