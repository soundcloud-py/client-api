// Define Dependencies
const Express = require('express');
const app = Express();

// Define Variables
const { port } = require('./settings/config.json');

// Define Listeners
app.get('/', (req, res) => {
    res.status(200).sendDate();
});

app.use('*', (req, res) => {
    res.status(404).send("File was not found on the server.");
});

// Define Listener Starter
const listener = app.listen(port, () => {
    console.log('Service API has started.');
});