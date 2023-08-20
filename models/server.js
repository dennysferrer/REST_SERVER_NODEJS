require('dotenv').config()
const express = require('express');
const cors = require('cors');


class Server {

    constructor(){
        //Variables iniciales
        this.app = express()
        this.PORT = process.env.PORT
        this.usuariosPath = '/api/usuarios';

        //Middlewares
        this.middlewares()

        //Rutas
        this.routes()
    }

    middlewares(){
        //Directorio publico
        this.app.use(express.static('public'))

        //Configuracion del cors
        this.app.use(cors());
    }

    routes(){
        this.app.use(this.usuariosPath, require('../routes/user.routes'));
    }

    listen(){
        this.app.listen(this.PORT, () => {
            console.log(`Server running in port ${this.PORT}`)
        })
    }

}



module.exports = Server;