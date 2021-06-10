const express = require('express');
const app = express();
const cors = require('cors');
const api = require('./api');
const pool = require('./db');

app.use(cors());
app.use(express.json());

app.listen(process.eve.PORT || 5000, () =>{
    console.log("app server has start on port 5000");
});

function verficar(){
    const cidadeAtendida = ['Andradina','Araçatuba','Birigui', 'Guararapes', 'Jales', 'Mirandópolis','Penápolis','Promissão','Três Lagoas'];
    const atendida = cidadeAtendida.includes(responseApi.data.city);
    if(atendida)
        response.send({ cidade: responseApi.data.city, mensagem: 'Cidade Atendida'})
    else response.send({ cidade: responseApi.data.city})
}

app.get('/cep/:cep', (request, response) => {
    const { cep } = request.params;
    api.get(`https://brasilapi.com.br/api/cep/v1/{${cep}}`)
    .then((responseApi) => {
        verficar(responseApi)     
    }).catch((error) => response.send({ erro: error.message }))
})

// Banco de dados //
/*
app.get("/cidade/:id"), async (req,res) => {
    try{
        const {id} =req.params;
        const todo = await pool.query("SELECT * FROM cidade Where cidade_id =$1",[id] );
        res.json(cidade.row[0]);
    }catch(err){
        console.error(err.message);
    }
    
};
*/