import { alterarComida } from "../repository/comidaRepository.js";

export default async function alterarComidaService(id, comidaObj){

    let linhasAfetadas = await alterarComida(id, comidaObj)

    if(linhasAfetadas == 0){

        throw new Error('Nenhuma comida alterada.')
        
    }

    return linhasAfetadas

}