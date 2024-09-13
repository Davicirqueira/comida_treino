import { consultarComida } from "../repository/comidaRepository.js";

export default async function consultarComidaService(){

    let registros = await consultarComida()

    return registros;
    
}