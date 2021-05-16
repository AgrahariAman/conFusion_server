const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter  = express.Router();
leaderRouter.use(bodyParser.json());

leaderRouter.route('/').all((req,res,next)=>{
    
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        next();
    
    })
    
    .get((req,res,next)=>{
        res.end("Will send all Leaders to you!");
    })
    
    
    .post((req,res,next)=>{
    
        res.end("Will add the Leaders: "+req.body.name +" with details: "+ req.body.description);
    
    })
    
    .put((req,res,next)=>{
        res.statusCode = 403;
        res.end("PUT operation not supported on /leaders");
    })
    
    .delete((req,res,next)=>{
        res.end("Deleting all the Leaders!");
    });


    leaderRouter.route('/:promoId').all((req,res,next)=>{
    
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        next();
    
    })
    
    .get((req,res,next)=>{
        res.end("Will send all Leaders to you! with Id  " +req.params.promoId );
    })
    

    .post((req,res,next)=>{
        res.statusCode = 403;
        res.end('POST operation not supported on /promotions/'+ req.params.promoId);
    
    })
    
    .put((req,res,next)=>{
        res.end("Will add the Leaders: "+req.body.name +" with details: "+ req.body.description);
    })
    
    .delete((req,res,next)=>{
        res.end("Deleting Leaders with Id=" +req.params.promoId );
    });




    module.exports = leaderRouter;