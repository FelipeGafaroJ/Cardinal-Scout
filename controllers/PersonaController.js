import models from  '../models';
import bcrypt from 'bcryptjs';
import token from '../services/token';
import { read } from 'fs';
import { model } from 'mongoose';

export default {
    add: async (req,res,next) =>{
        try {
            req.body.contraseña = await bcrypt.hash(req.body.contraseña,10);
            const reg =await models.Persona.create(req.body);
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
        }

    },
    query: async (req,res,next) =>{
        try {
            const reg=await models.Persona.findOne({_id:req.query._id})
            if (!reg){
                res.status(404).send({
                    message: 'El registro no existe'
                })
            } else{
                res.status(200).json(reg);
            }           
        } catch (e) {
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
            
        }
    },
    list: async (req,res,next) =>{
        try {
            let valor=req.query.valor;
            const reg=await models.Persona.find({$or:[{'nombres':new RegExp(valor,'i')},{'apellidos':new RegExp(valor,'i')}]},{cretedAt:0})
            .sort({'creatdAt':-1});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
            
        }
    },
    update: async (req,res,next) =>{
        try {
            let pas =req.body.contraseña;
            const reg0 = await models.Persona.findOne({_id:req.body._id});
            if (pas!=reg0.contraseña) {
                req.body.contraseña = await bcrypt.hash(req.body.contraseña,10);
            }
            
            const reg = await models.Persona.findByIdAndUpdate({_id:req.body._id},{nombres:req.body.nombres,apellidos:req.body.apellidos,tipoPersona:req.body.tipoPersona,contactoEmergencia:req.body.contactoEmergencia,tipoDocumento:req.body.tipoDocumento,numeroDocumento:req.body.numeroDocumento,rh:req.body.rh,rama:req.body.rama,eps:req.body.eps,alergias:req.body.alergias,discapacidades:req.body.discapacidades,enfermedades:req.body.enfermedades,medicamentos:req.body.medicamentos,fechaNacimiento:req.body.fechaNacimiento,fechaIngreso:req.body.fechaIngreso,direccion:req.body.direccion,telefono:req.body.telefono,correoElectronico:req.body.correoElectronico,sexo:req.body.sexo,paisOrigen:req.body.paisOrigen,paisResidencia:req.body.paisResidencia,departamentoResidencia:req.body.departamentoResidencia,ciudadResidencia:req.body.ciudadResidencia,usuario:req.body.usuario,contraseña:req.body.contraseña});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
            
        }
    },
    remove: async (req,res,next) =>{
        try {
            const reg = await models.Persona.findByIdAndDelete({_id:req.body._id});
            res.status(200).json(reg);
            
        } catch (e) {
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
            
        }
    },
    activate: async (req,res,next) =>{
        try {
            const reg = await models.Persona.findByIdAndUpdate({_id:req.body._id},{estado:1});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
            
        }
    },
    deactivate:async (req,res,next) =>{
        try {
            const reg = await models.Persona.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
            
        }
    },
    login: async(req,res,next) => {
        try {
            let user = await models.Persona.findOne({usuario:req.body.usuario,estado:1});
            if (user) {
                let match = await bcrypt.compare(req.body.contraseña,user.contraseña);
                if (match) {
                    
                    let tokenReturn = await token.encode(user._id);
                    res.status(200).json({user,tokenReturn});
                    //
                    res.json('Usuario y Contraseña Correctos');     
                    //               
                }else{
                    res.status(404).send({
                        message:'Contraseña Incorrecta'

                    })

                }
                //Existe el usuario
            } else {
                res.status(404).send({
                    message:'No existe el usuario'
                })
            }

        } catch (e) {
            res.status(500).send({
                message:'ocurrio un error'
            });
            next(e);            
        }
    }

}