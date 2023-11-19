import { Router } from "express";
import { getContactos, deleteContactoById, updateContactoById, getContactoByApellidos, updateContacto} from "../controllers/contactos.controller.js";

const router = Router();

router.get('/', (req, res) => {
    res.redirect('/agenda');
});
router.get('/agenda', getContactos);
router.get('/agenda/eliminar/:id', deleteContactoById);
router.get('/agenda/editar/:id', updateContactoById);
router.post('/agenda/buscar', getContactoByApellidos);
router.post('/agenda/editar', updateContacto);

export default router;