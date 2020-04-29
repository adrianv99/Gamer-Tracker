const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

//put your api key on config.env ( API_KEY variable )
const headers = { 
    'TRN-Api-Key': process.env.API_KEY
};


//apex route
router.get('/apex/:plataform/:gamertag', async (req,res)=>{
    try {
       const { plataform, gamertag } = req.params;

       const response = await fetch(`${process.env.TRACKER_API_APEX}/profile/${req.params.plataform}/${req.params.gamertag}`,  { headers }  );
       const data = await response.json(); 

        if(data.errors && data.errors.length > 0){
            return res.status(404).json({ message: 'Profile not found'});
        }

        res.status(200).json(data);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
});

//overwatch
router.get('/overwatch/:plataform/:gamertag', async (req,res)=>{
    try {
       const { plataform, gamertag } = req.params;

       const response = await fetch(`${process.env.TRACKER_API_OVERWATCH}/profile/${req.params.plataform}/${req.params.gamertag}`,  { headers }  );
       const data = await response.json(); 

        if(data.errors && data.errors.length > 0){
            return res.status(404).json({ message: 'Profile not found'});
        }

        res.status(200).json(data);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
});

//division-2 routes
router.get('/division-2/:plataform/:gamertag', async (req,res)=>{
    try {
       const { plataform, gamertag } = req.params;

       const response = await fetch(`${process.env.TRACKER_API_DIVISION_2}/profile/${req.params.plataform}/${req.params.gamertag}`,  { headers }  );
       const data = await response.json(); 

        if(data.errors && data.errors.length > 0){
            return res.status(404).json({ message: 'Profile not found'});
        }

        res.status(200).json(data);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
});



module.exports = router;