import express from 'express';
import cors from 'cors';
const app = express()
const PORT = 3000
app.use(express.json())
app.use(cors())

const users=[]

app.post('/cadastro', (req, res) => {
    const { usuario, email, senha } = req.body

    if (!usuario || !email || !senha) {
        res.status(400).json({
            erro: "Preencha todos os campos"
        })
    }

    console.log(`Recebido, aguarde 8 segundos`)

   setTimeout(() => {
        res.json({
            "mensagem": "CADASTRO COM SUCESSO",
            "PERFIL": Usuario @${usuario} casadatrado com o email ${email}
        });
        console.log(`O usuario cadastrado foi ${usuario}`)
    }, 5000)

})
app.listen(PORT, () => {
    console.log('servidor rodando')
})