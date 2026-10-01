import express from 'express';
import cors from 'cors';
import 'dotenv/config';
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

const user=[]

app.post('/cadastro', (req, res) => {
    const { usuario, email, senha } = req.body

    if (!usuario || !email || !senha) {
        return res.status(400).json({
            erro: "Preencha todos os campos"
        })
    }
    if (senha.length<6){
        return res.status(400).json({
            erro:"A senha deve ter 6 caracteres ou mais"
        })
    }

    const emailExiste=user.find((busca)=>busca.email===email)

    if (emailExiste){
        return res.status(409).json({
            erro:"Email já cadastrado"
        })
    }
    console.log(`Recebido, aguarde 4 segundos`)
    user.push({usuario, email,senha})

   setTimeout(() => {
        res.json({
            "mensagem": "CADASTRO COM SUCESSO",
            "PERFIL": `Usuario @${usuario} cadastrado com o email ${email}`
        });
        console.log(`O usuario cadastrado foi ${usuario}`)
    }, 4000)

})

app.post('/login', (req, res)=>{
    const {email, senha}=req.body
if(!email || !senha){
    return res.status(400).json({erro:"Preencha todos os campos"})
}
const usuarioExiste=user.find((busca)=> busca.email.toLowerCase()===email.toLowerCase())

if(!usuarioExiste || usuarioExiste.senha!==senha){
    return res.status(400).json({erro: "Usuario ou senha incorretos!"})
}
return res.json({
    mensagem: " Login realizado com sucesso!",
    usuario: usuarioExiste.usuario
})
})



app.listen(PORT, () => {
    console.log('Servidor rodando')
})