import models from  '../models';
import { read } from 'fs';
import { model } from 'mongoose';

export default {
    add: async (req,res,next) =>{
        try {
            const reg =await models.Rama.create(req.body);
            //Si sale bien sale el status 200
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                //Si sale mal sale el status 500
                message:'Ocurrió un error'
            });
            next(e);
        }

    },
    query: async (req,res,next) =>{
        try {
            const reg=await models.Rama.findOne({_id:req.query._id})
            .populate('persona',{nombres:1})
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
            //Tipo persona no esta en rama, modificar o quitar esa busqueda
            const reg=await models.Rama.find({$or:[{'nombreRama':new RegExp(valor,'i')},{'tipoPersona':new RegExp(valor,'i')}]},{cretedAt:0})
            .populate('persona',{nombres:1})
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
            const reg = await models.Rama.findByIdAndUpdate({_id:req.body._id},{nombreRama:req.body.nombreRama,cantidadTotal:req.body.cantidadTotal,cantidadInvestidos:req.body.cantidadInvestidos,cantidadNoInvestidos:req.body.cantidadNoInvestidos});
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
            const reg = await models.Rama.findByIdAndDelete({_id:req.body._id});
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
            const reg = await models.Rama.findByIdAndUpdate({_id:req.body._id},{estado:1});
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
            const reg = await models.Rama.findByIdAndUpdate({_id:req.body._id},{estado:0});
            res.status(200).json(reg);
        } catch (e) {
            res.status(500).send({
                message:'Ocurrió un error'
            });
            next(e);
            
        }
    },


}