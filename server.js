const express = require('express');
const app = express();
const port = process.env.PORT || process.argv[2] || 8080;
const cors = require('cors');
const path = require('path')


const videos = require('./data/videos.json');

app.use(cors());


app.use(express.json());

const videoRoutes = require("./routes/videos")
app.use("/api/videos", videoRoutes);

const dir = path.join(__dirname + "./data/videos.json", 'public' )
app.use(express.static(dir));



app.listen(port, () => console.log(`Listening on ${port}`));

