const express = require('express');
const data = require('./data');

const app = express();
const port = 8080;

// Kom ihåg att installera express och pug!

// För att läsa artiklarna: Fråga databasen:
// data.getArticles(callback)
// callback får argumentet articles
// var article innehåller:
//  - title
//  - content
//  - link
//  - image
// (se data.json om du är nyfiken)

// Uppgift:
// Skapa en sida ('/') som visar alla artiklarna (6 st).
// Var artikel ska visa överskrift (title) och innehåll (content).
// Dessutom ska den vara klickbar (link) och visa bilden (länken image)
// Sist men inte minst: Gör den snygg. Helst med en css-fil på din server

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  // Här skriver du din kod för artiklarna
  res.send("Nyhetssidan kommer snart...");
});

// Här kanske du måste kunna tillhandahålla css-filer

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
