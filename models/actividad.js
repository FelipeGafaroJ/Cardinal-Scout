import mongoose, {Schema} from 'mongoose';

const actividadSchema = new Schema({
    nombres: {type: String, maxlength:40,required:true},
    createdAt : {type:Date,default:Date.now},
    fechaActividad:{type:Date},
    hora:{type: String, maxlength:10,required:true},
    lugar: {type: String, maxlength:40,required:true},
    materiales: {type: String, maxlength:200,required:true},
    presupuesto: {type: String, maxlength:40,required:true},
    uniforme: {type: String, maxlength:40,required:true}   

});

const Actividad = mongoose.model('actividad',actividadSchema);

export default Actividad;
