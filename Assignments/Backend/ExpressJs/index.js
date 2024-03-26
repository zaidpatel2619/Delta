const express = require('express');
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`Listening to the ${port}`);
});

app.get('/', (req, res) => {
    const htmltags = "<h1>Avengers</h1><ul><li>Captain America</li><li>Ironman</li><li>Thor</li><li>Hulk</li><li>Black Widow</li><li>Hawkeye</li></ul>"
    res.send(htmltags);
});

app.get('/:avengerName/:id', (req, res) => {
    let { avengerName } = req.params; 
    const htmltags = `Page dedicated to ${avengerName}`;
    res.send(htmltags);
});

app.get('/search', (req, res) => {
    let { q } = req.query;
    let htmltags;
    if (q) {
        res.send(`<h1>Search result found for ${q}</h1>`);
    }
    else {
        htmltags = `No query to search`;
    }
});

app.get('/captain', (req, res) => {
    res.send("Page dedicated to Cap");
});

app.get('/ironman', (req, res) => {
    res.send("Page dedicated to Ironman");
});

app.get('*', (req, res) => {
    res.send("Page does not exist");
});