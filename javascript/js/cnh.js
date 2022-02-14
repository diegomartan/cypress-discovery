function verificarIdade() {

    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade')

    if (idade.value.length == 0) {
        alert('Idade é um campo obrigatório.')
        return
    }

    var idadeNum = parseInt(idade.value)

    if (idadeNum >= 18) {
        alert('OK, Você pode tirar sua CNH.')

    } else if (idadeNum > 12) {
        alert('Você ainda não tem idade suficiente para tirar CNH.')

    } else {
        alert('Você ainda é uma criança!')
    }


}