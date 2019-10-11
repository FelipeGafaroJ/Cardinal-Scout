import models from  '../models';
import { read } from 'fs';
import { model } from 'mongoose';
export default {
    add: async (req,res,next) =>{
        try {
            const reg =await models.Persona.create(req.body);
            res.status(200).json(req);
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
            const reg=await models.Persona.find({})
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
            const reg = await models.Persona.findByIdAndUpdate({_id:req.body._id},{nombres:req.body.nombres, apellidos:req.body.apellidos});
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


}