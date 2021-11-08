//imports express into the server
const express = require("express");
//sets app variable to function express
const app = express();
//sets port variable to local port to view the server on
let port = process.env.PORT || 5000;

//sets up a static server
app.use(express.static("./public"));


//routes to restaurants' id for client-side to pull from, can visit in localhost:5000 by json file name, i.e. "localhost:5000/singlepebble"
app.get('/api/:id', (req, res) => {
    res.sendFile(__dirname + `/api/${req.params.id}.json` );
})

//routes to restaurants' names
app.get('/api/restaurants-id', (req, res) => {
    res.sendFile(__dirname + "/api/restaurants-id.json")
})

//routes to restaurants.json file 
 app.get('/api', (req, res) => {
     res.sendFile(__dirname + "/api/restaurants.json")
 })

//sets route to homepage in server
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/client/public/index.html");
})

//catch all error route
app.get('*', (req, res) => {
    res.send("Uh-oh! Looks like what you're trying to find isn't here!")
})

//sets up to listen on port 5000
app.listen(port, () => {
    console.log("The server is running!");
})
