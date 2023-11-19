import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('agenda', 'admin', 'Tecsup2023', {
  host: 'lab12.cscgez6rbsos.us-east-1.rds.amazonaws.com',
  dialect: 'mysql'
});

const Contacto = sequelize.define('Contacto', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_nac: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    foto: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

export default Contacto; sequelize;