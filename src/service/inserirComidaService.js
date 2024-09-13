import { inserirComida } from "../repository/comidaRepository.js";

export default async function inserirComidaService(comidaObj){

    let id = await inserirComida(comidaObj)

    return id;
    
}