const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/').all((req,res,next)=>{
    
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        next();
    
    })
    
    .get((req,res,next)=>{
        res.end("Will send all Promotions to you!");
    })
    
    
    .post((req,res,next)=>{
    
        res.end("Will add the Promotions: "+req.body.name +" with details: "+ req.body.description);
    
    })
    
    .put((req,res,next)=>{
        res.statusCode = 403;
        res.end("PUT operation not supported on /Promotions");
    })
    
    .delete((req,res,next)=>{
        res.end("Deleting all the Promotions!");
    });


promoRouter.route('/:promoId').all((req,res,next)=>{
    
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        next();
    
    })
    
    .get((req,res,next)=>{
        res.end("Will send all Promotions to you! with Id  " +req.params.promoId );
    })
    

    .post((req,res,next)=>{
        res.statusCode = 403;
        res.end('POST operation not supported on /promotions/'+ req.params.promoId)
    })
    .put((req,res,next)=>{
        res.end("Will add the Promotions: "+req.body.name +" with details: "+ req.body.description);
    })
    
    .delete((req,res,next)=>{
        res.end("Deleting Promotions with Id=" +req.params.promoId );
    });




module.exports = promoRouter ;