const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.get('/', (_, res) => {
  res.send('Hello World!')
})

app.get('/user/:user', (req, res) => {
    const user = req.params.user
    console.log('Recebi a requisição', req.params)
    //conectando no banco
    const resultado = {
        id: 1,
        nickname: user,
        email: 'joaop221@email.com'
    }
    console.log('Respondendo a requisição', resultado)

    res.json(resultado)
})

app.post('/user/:user', (req, res) => {
    const user = req.params.user
    res.send(`Bem vindo! ${user}`)
})

app.delete('/user/:user', (req, res) => {
    const user = req.params.user
    res.send(`${user} foi eliminado!`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
