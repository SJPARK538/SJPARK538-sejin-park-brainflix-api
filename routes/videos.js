const express = require("express");
const videosFile = __dirname + "/../../data/videos.json";
const videos = require(videosFiles);
const router = express.Router();

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

router.get("/:id", (req, res) => {
    const find = videos.filter
})

module.exports = router;