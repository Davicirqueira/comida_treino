import { inserirImagemComida } from "../repository/comidaRepository.js";

export default async function inserirImagemComidaService(id, caminhoImg){

    let linhasAfetadas = await inserirImagemComida(id, caminhoImg)

    if(linhasAfetadas == 0){

        throw new Error('Nenhuma imagem foi inserida!')
        
    }

    return linhasAfetadas;
    
}