const Role = require('../models/role');
const Usuario = require('../models/role')

const esRolValido = async (role = '') => {
    const existeRol = await Role.findOne({ role });
        if (!existeRol){
            throw new Error(`El rol: ${role} no es válido`);
        }
};

const existeEmail = async (correo = '') => {
    const existeCorreo = await Usuario.findOne({ correo });
    if (existeCorreo){
        throw new Error(`El correo ${correo} ya existe`);
    }
}

const existeUsuarioPorId = async (id) => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario){
        throw new Error(`El id ${id} no existe`);

    }
}


module.exports = {
    esRolValido,
    existeEmail,
    existeUsuarioPorId
}