const fs = require('fs');
const filePath = './mensaje.txt';
const mensaje = fs.readFileSync(filePath, 'utf-8');


const { peliculas } = require ("./peliculas.js");
const prompt = require ('prompt-sync')();


const listadodepeliculas= peliculas;

const infopeliculas= function(){
 for (let i = 0; i < peliculas.length; i++)

    console.log ("El id de esta pelicula esta", peliculas[i].id);
    console.log ("E rating de esta pelicula es",peliculas[i].rating);
    console.log ("los premios que sean ganado estas peliculas son",peliculas[i].awards);
    console.log ("La duracion de minutos de la peliculas", peliculas[i].length);
    console.log ("El valor de las peliculas es:", peliculas[i].price);
    console.log ("El genro de la pelicula es:",peliculas[i].genre);
    
}

infopeliculas();
console.log(mensaje);
