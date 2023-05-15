var Area = require("./modelos/area");

//obtener todas las areas
exports.getAreas = function(req,res){
    Area.find({}, function(err,areas){
        if(err)
            res.send(err);
    res.json(areas);
    });
}
//adiciona un nuevo objeto Area a la db
exports.setArea = function(req,res){
    Area.create({nombre: req.body.nombre,
                abreviatura: req.body.abreviatura,
                Estado: req.body.Estado }, function(err,area){
            if(err)
                res.send(err);
        Area.find(function(err,area){
            if(err)
                res.send(err);
            res.json(area);
        });
    });
}
exports.updateArea = function(req,res){

    Area.update({_id:req.params.area_id}, 
        {$set: {nombre: req.body.nombre,
                abreviatura: req.body.abreviatura,
                Estado: req.body.Estado}}, function(err,area){
            if(err)
                res.send(err);
        Area.find(function(err,area){
            if(err)
                res.send(err);
            res.json(area);
        });            
    });
}
//elimina un objeto Area de la base de datos
exports.removeArea = function(req,res){
    Area.remove({_id:req.params.area_id},function(err,area){
        if(err)
            res.send(err);
    Area.find(function(err,areas){
            if(err)
                res.send(err);
            res.json(areas);
        });
    });
//SE OBSERVÓ QUE A NIVEL DE BASE DE DATOS, MONGOOSE NO RECONOCE LOS ID DE LOS DATOS INGRESADOS MANUALMENTE,
//Y SOLAMENTE RECONOCE LOS _id de tipo ObjectId()
}