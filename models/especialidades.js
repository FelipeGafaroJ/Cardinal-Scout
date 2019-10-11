import mongoose, {Schema} from 'mongoose';

const especialidadesSchema = new Schema({
    tipoRama:{},
    nombreRama: {type: String, maxlength:40,required:true},
    cantidadTotal: {type: String, maxlength:3,required:true},
    cantidadInvestidos: {type: String, maxlength:3,required:true},
    cantidadNoInvestidos: {type: String, maxlength:3,required:true},

});

const Especialidades = mongoose.model('especialidades',especialidadesSchema);

export default Especialidades;
