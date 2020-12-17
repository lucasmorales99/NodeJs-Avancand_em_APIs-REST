const Modelos = [
    require('../rotas/fornecedores/ModeloTabelaFornecedor'),
    require('../rotas/fornecedores/produtos/ModeloTableProduto')
]

//ModeloTabela
//    .sync()  //ultilizacao do modelo sequelize aonde pega as tabelas e sincroniza elas
//   .then(() => console.log('Tabela criada com sucesso'))
//   .catch(console.log)

async function criarTabelas() {
    for(let contador = 0; contador < Modelos.length; contador++) {
        const modelo = modelos[contador]
        await modelo.sync()
    }
}

criarTabelas()