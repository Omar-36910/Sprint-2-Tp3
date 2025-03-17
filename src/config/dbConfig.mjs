//Conexión a MongoDB
import mongoose from 'mongoose';

export async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://Grupo-04:grupo04@cursadanodejs.ls9ii.mongodb.net/Node-js');
        console.log('Conexion exitosa a MongoDB');
    } catch (error) {
        console.error('Error al conectarse a MongoDB:', error);
        process.exit(1);
    }
}