import mongoose, {Schema} from 'mongoose';

const progresionSchema = new Schema({
    area: {type: String, maxlength:40,required:true},
    porcentajeDesarrollo: {type: String, maxlength:3,required:true},
    insignias: {type: String, maxlength:200},
    createdAt : {type:Date,default:Date.now},
    fechaFin:{type:Date},
    estado: {type:Number,default:1}
    
    
});

const Progresion = mongoose.model('progresion',progresionSchema);

export default Progresion;
