import Contacto from "../models/contacto.model.js";
import { Op } from 'sequelize';

export const getContactos = async (req, res) => {
    try {
        const contactos = await Contacto.findAll();
        res.render('contactos', { contactos: contactos });
    } catch (error) {
        console.log(error);
    }
}
export const deleteContactoById = async (req, res) => {
    try {
        const contacto = await Contacto.findByPk(req.params.id);
        await contacto.destroy();
        res.redirect('/agenda');
    } catch (error) {
        console.log(error);
    }
}
export const updateContactoById = async (req, res) => {
    try {
        const contacto_edit = await Contacto.findByPk(req.params.id);
        const contactos = await Contacto.findAll();
        res.render('contacto-edit', { contacto_edit: contacto_edit, contactos: contactos });
    } catch (error) {
        console.log(error);
    }
}

export const updateContacto = async (req, res) => {
    try {
        console.log(req.body);
        const nombre = req.body.txtnombre;
        const apellido = req.body.txtapellido;
        const correo = req.body.txtcorreo;
        const fecha_nacimiento = req.body.txtfecha
        const foto = req.body.txtfoto;
        const id = req.body.txtid;
        const contacto = await Contacto.findByPk(id);
        contacto.nombre = nombre;
        contacto.apellidos = apellido;
        contacto.correo = correo;
        contacto.fecha_nacimiento = fecha_nacimiento;
        contacto.foto = foto;
        await contacto.save();
        res.redirect('/agenda');
    }
    catch (error) {
        console.log(error);
    }
}

export const getContactoByApellidos = async (req, res) => {
    try {
        const contactos = await Contacto.findAll({ 
            where: { 
                apellidos: {
                    [Op.like]: '%' + req.body.txtbuscar + '%'
                } 
            } 
        });
        res.render('contactos', { contactos: contactos });
    } catch (error) {
        console.log(error);
    }
}