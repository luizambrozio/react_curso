const produto = {
    nome: 'caneta bic PRETA',
    preco: 1.9,
    desconto: 0.05
}

function clone(objeto){
    return { ...objeto }
}

const novoProduto = clone(produto)

novoProduto.nome = 'caneta bic AZUL'

console.log(produto, novoProduto)