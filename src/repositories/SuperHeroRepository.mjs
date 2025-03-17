//Implementación CRUD de SuperHero
import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';
import mongoose from "mongoose";

class SuperHeroRepository extends IRepository {
    async obtenerPorId(id) {
        if (mongoose.isValidObjectId(id)) {       // Validar que 'id' sea un ObjectId válido antes de proceder
            return await SuperHero.findById(id);
        }
    };

    async obtenerTodos() {
        return await SuperHero.find({});
    };

    async buscarPorAtributo(atributo, valor) {
        return await SuperHero.find({ [atributo]: valor });
    };

    async obtenerMayoresDe30() {
        return await SuperHero.find({ edad: { $gt: 30 } });
    };
}

export default new SuperHeroRepository();