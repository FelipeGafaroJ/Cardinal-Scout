import mongoose, {Schema} from 'mongoose';

const ramaSchema = new Schema({
    nombreRama: {type: String, maxlength:40,required:true},
    cantidadTotal: {type: String, maxlength:3,required:true},
    cantidadInvestidos: {type: String, maxlength:3,required:true},
    cantidadNoInvestidos: {type: String, maxlength:3,required:true},
    estado: {type:Number,default:1}

});

const Rama = mongoose.model('rama',ramaSchema);

export default Rama;
