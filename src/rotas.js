import express from 'express';

import comidaController from './controller/comidaController.js'

export default function adicionarRotas(servidor){

    servidor.use(comidaController)

    servidor.use('/storage/imgComida', express.static('./storage/imgComida'));
    
}
