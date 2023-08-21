
const usuariosGet = (req, res) => {
    const { q, nombre, apikey } = req.query;
    res.json({
        "ok": true,
        "message": "Peticion GET",
        q,
        nombre,
        apikey
    });
};

const usuariosPut = (req, res) => {
    const id = req.params.id;
    res.json({
        "ok": true,
        "message": "Peticion PUT",
        id
    });
};

const usuariosPost = (req, res) => {
    const { nombre, edad } = req.body;
    res.json({
        "ok": true,
        "message": "Peticion POST",
        nombre,
        edad
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