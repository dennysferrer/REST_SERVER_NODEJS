const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');


const usuariosGet = async (req, res) => {
    //const { q, nombre, apikey } = req.query;
    const { limite = 5, desde = 0 } = req.query;


    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments({estado: true}),
        await Usuario.find({estado: true})
            .skip(desde)
            .limit(limite)
    ]);

    res.json({
        total,
        usuarios
    });
};

const usuariosPut = async (req, res) => {
    const { id } = req.params;
    const { _id, password, google, ...resto } = req.body;

    //TODO Validar frente a base de datos

    if (password){
        const salt = bcryptjs.genSaltSync(10)
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        "message": "Peticion PUT",
        usuario
    });
};

const usuariosPost = async (req, res) => {

    const {nombre, correo, password, role} = req.body;
    const usuario = new Usuario({nombre, correo, password, role});

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(10)
    usuario.password = bcryptjs.hashSync(password, salt);

    await usuario.save();
    res.json({
        "ok": true,
        "message": "Peticion POST",
        usuario
    });
};

const usuariosDelete = async (req, res) => {

    const { id } = req.params;

    const usuario = await Usuario.findByIdAndUpdate(id, {estado:false});

    res.json({
        "msg":"Usuario borrado",
        usuario
    });
};


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}