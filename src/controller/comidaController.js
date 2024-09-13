import inserirComidaService from "../service/inserirComidaService.js";
import consultarComidaService from "../service/consultarComidaService.js";
import alterarComidaService from "../service/alterarComidaService.js";
import removerComidaService from "../service/removerComidaService.js";
import inserirImagemComidaService from "../service/inserirImagemComidaService.js";

import { Router } from "express";

import multer from "multer";
const endpoints = Router()

endpoints.post('/comida', async (req, resp) => {

    try {
    
        let comidaObj = req.body;

        let id = await inserirComidaService(comidaObj)
    
        resp.send({
    
            idComida: id

        })

    } 
    catch(err) {
        
        logError(err)
        resp.status(400).send(criarErro(err))

    }

})


endpoints.get('/comida', async (req, resp) => {

    try {
    
        let registros = await consultarComidaService()
    
        resp.send(registros)

    } 
    catch(err) {
        
        logError(err)
        resp.status(400).send(criarErro(err))

    }

})


endpoints.put('/comida/:id', async (req, resp) => {

    try {

        let id = req.params.id;

        let comidaObj = req.body;

        let linhasAfetadas = await alterarComidaService(id, comidaObj)

        if(linhasAfetadas >= 1){

            resp.send();

        }
        else{

            resp.status(404).send({erro: 'Nenhum registro alterado!'})

        }

    } 
    catch(err) {
        
        logError(err)
        resp.status(400).send(criarErro(err))

    }

})


endpoints.delete('/comida/:id', async (req, resp) => {

    try {

        let id = req.params.id;

        let linhasAfetadas = await removerComidaService(id)
    
        if(linhasAfetadas >= 1){

            resp.send();

        }
        else{

            resp.status(404).send({erro: 'Nenhum registro removido.'});

        }

    } 
    catch(err) {
        
        logError(err)
        resp.status(400).send(criarErro(err))

    }

})


//imagem comida
let imgComida = multer({dest: './storage/imgComida'});

endpoints.put('/comida/:id/imagem', imgComida.single('imagem'), async (req, resp) => {

    try{

        let id = req.params.id;
        let urlImg = req.file.path;
        
        await inserirImagemComidaService(id, urlImg)

        resp.status(204).send();

    }
    catch(err){

        logError(err)
        resp.status(400).send(criarErro(err))

    }

})

export default endpoints;