var Controlador = require("./controlador");
var mainDir = "";

module.exports = {
    //obtienes todas la areas
    principal: function(app){
    app.get("/api/areas", Controlador.getAreas);
    
    //crear una nueva area
    app.post('/api/area', Controlador.setArea);

    //modificar los datos de una area
    app.put('/api/area/:area_id',Controlador.updateArea);

    //borrar un area
    app.delete('/api/area/:area_id',Controlador.removeArea);    

    //a la aplicacion principal
    app.get('*',function(req,res){
            res.sendFile(mainDir+'/angular/index.html');
        });
    },
    iniciar: function(mdir){
        mainDir = mdir;
    }
};