const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const cors = require('cors');


const videos = require('./data/videos.json');

app.use(cors());


app.use(express.json());

const videoRoutes = require("./routes/videos")
app.use("/api/videos", videoRoutes);

app.use(express.static(__dirname + "./data/videos.json", "public"));

console.log("hi");




app.listen(port, () => console.log(`Listening on ${port}`));

