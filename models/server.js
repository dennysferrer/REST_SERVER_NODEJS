require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config.db');


class Server {

    constructor(){
        //Variables iniciales
        this.app = express()
        this.PORT = process.env.PORT
        this.usuariosPath = '/api/usuarios';

        //Conectar a la base de datos
        this.conectarDB()

        //Middlewares
        this.middlewares()

        //Rutas
        this.routes()
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //Directorio publico
        this.app.use(express.static('public'))

        //Configuracion del cors
        this.app.use(cors());

        //Parseo y lectura del body
        this.app.use(express.json())
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