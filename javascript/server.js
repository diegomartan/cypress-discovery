const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({message:'Hello Cypress Discovery'})
})

app.get('/justice', function (req, res){
    var justice = ['Supeman', 'Batman', 'Wonder Woman', 'Flash', 'Aquaman', 'Cyborg', 'Green Lantern']
    return res.json({data: justice})
})

app.get('/cnh', function (req, res){
    const idade = req.query.idade

    if (!idade) {
        return res.json({message: 'Idade é um campo obrigatório.'})
        
    }

    var idadeNum = parseInt(idade)

    if (idadeNum >= 18) {
        return res.json({message: 'OK, Você pode tirar sua CNH.'})

    } else if (idadeNum > 12) {
        return res.json({message: 'Você ainda não tem idade suficiente para tirar CNH.'})

    } else {
        return res.json({message: 'Você ainda é uma criança!'})
    }

    
})

app.listen(3000)