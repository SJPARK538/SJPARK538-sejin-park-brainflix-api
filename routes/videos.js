const express = require("express");
const videosFile = __dirname + "/../data/videos.json";
const videos = require(videosFile);
const router = express.Router();
const { v4: uuidv4 } = require('uuid')
const fs = require("fs");


router.get ("/", (req, res)=>{
    const videoLists = videos.map(video => {
        return {
            id: video.id,
            title: video.title, 
            channel: video.channel,
            image: video.image,
        }
    })
    res.json(videoLists);
});

router.get ("/:id", (req, res) => {
    console.log('req', req.params.id)
    const item = videos.find(video => video.id === req.params.id);
    if(item){
        res.status(200)
            .json(item)
    }else {
        res.status(400)
        .json({errorMessage: `Video ID ${req.params.id} not found`})
    }
    }
)

function writeJson(filename, content){
    fs.writeFileSync(filename, JSON.stringify(content), "utf-8", err => {
        if(err){
            throw err;
        } else {
            console.log("trasnferred!")
        }
    })
}

router.post("/", (req, res) => {
    const newVideo = {
        id: uuidv4(),
        title: req.body.title,
        channel: req.body.channel,
        description: req.body.description,
        image: req.body.image,
        views: "12",
        likes: "5",
        timestamp: new Date().toLocaleDateString(),
        comments: []
    }
    videos.push(newVideo);
    writeJson(videosFile, videos);
    res.json(newVideo);
})

module.exports = router;