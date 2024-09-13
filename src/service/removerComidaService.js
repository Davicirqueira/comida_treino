import { removerComida } from "../repository/comidaRepository.js";

export default async function removerComidaService(id){

    let linhasAfetadas = await removerComida(id)

    if(linhasAfetadas == 0){

        throw new Error('Nenhuma comida foi removida.')
        
    }

    return linhasAfetadas;
    
}