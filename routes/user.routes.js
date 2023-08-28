const { Router } = require('express')
const {usuariosGet, usuariosPut, usuariosPost, usuariosDelete} = require("../controllers/user.controllers");
const { check } = require('express-validator');
const {validarCampos} = require("../middlewares/validar-campos");
const { esRolValido, existeEmail, existeUsuarioPorId } = require('../helpers/db-validators');


const router = Router()

router.get('/', usuariosGet);

router.put('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom( existeUsuarioPorId ),
    check('role').custom( esRolValido ),
    validarCampos
], usuariosPut);

router.post('/', [
    check('nombre', 'El campo nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe ser mayor a 6 caracteres').isLength({ min:6 }),
    check('correo').custom( existeEmail ),
    check('correo', 'El correo no es válido').isEmail(),
    //check('role', 'El role no es válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( esRolValido ),
    validarCampos
], usuariosPost);
    
router.delete('/:id', [
    //check('id').custom( existeUsuarioPorId ),
    check('id', 'No es un id valido').isMongoId(),
    validarCampos
], usuariosDelete);


module.exports = router;