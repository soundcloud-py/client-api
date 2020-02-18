// Define Dependencies
const Express = require('express');
const app = Express();

// Define Variables
const { port } = require('./settings/config.json');

// Define Listeners
app.get('/', (req, res) => {
    res.status(200).sendDate();
});

app.get('/api/artists/', (req, res) => {
    res.status(200).send({ "error": "Unable to fetch data." });
});

app.get('/api/verified', (req, res) => {
    res.status(200).send({ "error": "Unable to fetch data." });
});

app.get('/api/developers', (req, res) => {
    res.status(200).send({ "success": "BookishWaffle" });
});

app.get("/api/contributors", (req, res) => {
    res.status(200).send({ "success": "Artucuno1234" });
});

app.use('*', (req, res) => {
    res.status(404).send("File was not found on the server.");
});

/*
# Example
- To return the service developers: `http://localhost:3000/api/developers/`
- To return the service contributors: `http://localhost:3000/api/contributors/`
*/

// Define Listener Starter
const listener = app.listen(port, () => {
    console.log('Service API has started.');
});