import con from './connection.js'

export async function inserirComida(comida) {

    const comando = `
    
    insert into tb_comida (nm_comida, ds_sabor, vl_preco) 
    values (?, ?, ?)
    
    `

    let resposta = await con.query(comando, [comida.nome, comida.sabor, comida.preco])
    let info = resposta[0]

    let id = info.insertId;

    return id;

}


export async function consultarComida() {

    const comando = ` 
    
            select id_comida   id, 
               nm_comida       nome,
               ds_sabor        sabor,
               vl_preco        preco,
               img_comida      imgComida
            from tb_comida
    
    `

    let resposta = await con.query(comando)

    let registros = resposta[0]

    return registros;

}


export async function alterarComida(id, comida) {


    const comando = ` 
    
    update tb_comida
        set nm_comida = ?,
        ds_sabor = ?,
        vl_preco = ?
    where id_comida = ?
    
    `

    let resposta = await con.query(comando, [comida.nome, comida.sabor, comida.preco, id])

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


export async function removerComida(id){

    const comando = ` 
    
    delete from tb_comida
    where id_comida = ?

    `

    let resposta = await con.query(comando, id)

    let info =  resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


//imagem do Comida
export async function inserirImagemComida(id, caminho){

    const comando = `
    update tb_comida
        set img_comida = ? 
        where id_comida = ?              
    `

    let resposta = con.query(comando, [caminho, id]);

    let info = resposta[0];

    let linhasAfetadas = info;

    return linhasAfetadas;

}

