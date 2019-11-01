import jwt from 'jsonwebtoken';
import models from '../models';
import { model } from 'mongoose';

async function checkToken(token){
    let __id =null;
    try {
        const{_id}=await jwt.decode(token);
        __id=_id;
    } catch (e) {
        return false;
    }
    const user = await models.Persona.findOne({_id:__id,estado:1});
    if (user) {
        const token = jwt.sign({_id:_id},'clavesecretaparagenerartoken',{expiresIn:'1d'});
        return{token, tipoPersona:persona.tipoPersona};
        
    } else {
        return false;
        
    }
}

export default{
    encode: async(_id)=>{
        const token = jwt.sign({_id:_id},'clavesecretaparagenerartoken',{expiresIn:'1d'});
        return token;
    },
    decode: async(token) => {
        try {
            const {_id} = await jwt.verify(token,'clavesecretaparagenerartoken');
            const user = await models.Persona.findOne({_id,estado:1});
            if (user) {
                return user;
            }else{
                return false;
            }
        } catch (e) {
            const newToken = await checkToken(token);
            return newToken;
        }

    }
}
