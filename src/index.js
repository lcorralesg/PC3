import app from './app.js';
import sequelize from './models/contacto.model.js';

const port = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
    console.log('Base de datos conectada');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});