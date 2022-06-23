const express = require("express");
const videosFile = __dirname + "/../data/videos.json";
const videos = require(videosFile);
const router = express.Router();


// router.get("/:id", (req, res) => {

//     console.log('req', req.params)
//     const item = videos.find(video => video.id === req.params.id);
//     console.log('item', item);
//     res.json(item)
//     }
// )

router.get ("/", (req, res)=>{
    const videoLists = videos.map(video => {
        return {
            id: video.id,
            title: video.title, 
            channel: video.channel,
            image: video.image,
        }
    })
    console.log('videoLists', videoLists);
    res.json(videoLists);
});

router.get ("/:id", (req, res) => {
    console.log('req', req.params.id)

    const item = videos.find(video => video.id === req.params.id);
    console.log('item', item);
    // res.send(item)
    if(item){
        res.status(200)
            .json(item)
    }else {
        res.status(400)
        .json({errorMessage: `Video ID ${req.params.id} not found`})

    }
    }
)


module.exports = router;