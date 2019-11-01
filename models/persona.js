import mongoose, {Schema} from 'mongoose';

const personaSchema = new Schema({
    nombres: {type: String, maxlength:40,required:true},
    apellidos: {type: String, maxlength:40,required:true},
    tipoPersona:{type: String, maxlength:40,required:true},
    contactoEmergencia: {type: String, maxlength:11},
    estado: {type:Number,default:1},
    tipoDocumento:{type: String, maxlength:40,required:true}, 
    numeroDocumento:{type: String, maxlength:20,required:true},
    rh:{type: String, maxlength:4,required:true}, 
    rama:{type: Schema.ObjectId, ref:'rama'},
    eps: {type: String, maxlength:40,required:true},
    alergias:{type: String, maxlength:250},
    discapacidades:{type: String, maxlength:250},
    enfermedades:{type: String, maxlength:250},
    medicamentos:{type: String, maxlength:250},
    //indica la fecha de creacion
    createdAt : {type:Date,default:Date.now},
    fechaNacimiento:{type: String, maxlength:255},
    fechaIngreso:{type: String, maxlength:255},
    direccion:{type: String, maxlength:250},
    telefono:{type: String, maxlength:15,required:true},
    correoElectronico:{type: String, maxlength:50,required:true},
    sexo:{type: String, maxlength:10,required:true},
    paisOrigen:{type: String, maxlength:250},
    paisResidencia:{type: String, maxlength:250},
    departamentoResidencia:{type: String, maxlength:250},
    ciudadResidencia:{type: String, maxlength:250},  
    usuario: {type: String, maxlength:50,required:true},
    contraseña: {type: String, maxlength:64,required:true}
    
   

});

const Persona =mongoose.model('persona',personaSchema);

export default Persona;