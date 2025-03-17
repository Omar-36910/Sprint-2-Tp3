//Modelo SuperHero
import mongoose from 'mongoose';

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, require: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    dedilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    creador: String,
    createdAt: { type: Date, default: Date.now },
});
const superHero = mongoose.model('SuperHero', superheroSchema, 'Grupo-04');
export default superHero;