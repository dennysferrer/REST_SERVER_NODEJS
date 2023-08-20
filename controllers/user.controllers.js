
const usuariosGet = (req, res) => {
    res.json({
        "ok": true,
        "message": "Peticion GET"
    });
};

const usuariosPut = (req, res) => {
    res.json({
        "ok": true,
        "message": "Peticion PUT"
    });
};

const usuariosPost = (req, res) => {
    res.json({
        "ok": true,
        "message": "Peticion POST"
    });
};

const usuariosDelete = (req, res) => {
    res.json({
        "ok": true,
        "message": "Peticion DELETE"
    });
};


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
}