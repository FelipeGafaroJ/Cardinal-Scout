import mongoose, {Schema} from 'mongoose';

const personaSchema = new Schema({
    nombres: {type: String, maxlength:40,required:true},
    apellidos: {type: String, maxlength:40,required:true},
    tipoPersona:{},
    contactoEmergencia: {type: String, maxlength:11},
    estado: {type:Number,default:1},
    tipoDocumento:{},
    numeroDocumento:{type: String, maxlength:20,required:true,unique:true},
    rh:{type: String, maxlength:4,required:true},
    rama:{type: String, maxlength:15,required:true},
    eps: {type: String, maxlength:40,required:true},
    alergias:{},
    discapacidades:{},
    enfermedades:{},
    medicamentos:{},
    //indica la fecha de creacion
    createdAt : {type:Date,default:Date.now},
    fechaNacimiento:{type:Date},
    fechaIngreso:{type:Date},
    direccion:{},
    telefono:{type: String, maxlength:15,required:true},
    correoElectronico:{type: String, maxlength:50,required:true},
    sexo:{type: String, maxlength:10,required:true},
    paisOrigen:{},
    paisResidencia:{},
    departamentoResidencia:{},
    ciudadResidencia:{},  
    usuario: {type: String, maxlength:10,required:true}
    
   

});

const Persona =mongoose.model('persona',personaSchema);

export default Persona;