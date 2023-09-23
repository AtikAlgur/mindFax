const mongoServer = require("./db");
const express = require("express");

mongoServer();
const app = express();
const port = 8000;

// These are Routing Paths that are resolved in routes folder
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
app.use('/api/createStory', require('./routes/stories'));
// app.use('/api/feedback', require('./routes/feedback'));

app.listen(port, ()=>{
    console.log("Connected at 8000 Port")
})

