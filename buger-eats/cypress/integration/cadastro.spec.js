
import SignupPage from '../pages/SignupPage'


describe('Cadastro', () => {

    before(function(){
        cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os testes')
    })

    beforeEach(function(){
        cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
    })

    after(function(){
        cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os testes')
    })

    afterEach(function(){
        cy.log('Tudo aqui é executado sempre DEPOIS de CADA caso de teste')
    })


    it('Usuário deve se tornar um entregador', () => {


        var deliver = {
            name: 'Diego Martin',
            cpf: '00011122234',
            email: 'diego@gmail.com',
            whatsapp: '31999999999',
            address: {
                postalcode: '32371000',
                street: 'Rua Cardeal Arcoverde',
                number: '142',
                details: 'Loja 3',
                district: 'Água Branca',
                city_state: 'Contagem/MG',
            },
            deluvery_method: 'Moto',
            cnh: 'cnh-digital.jpg'

        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMassage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMassage)

    })


    it('CPF inválido', () => {

        var deliver = {
            name: 'Diego Martin',
            cpf: '000111222AA',
            email: 'diego@gmail.com',
            whatsapp: '31999999999',
            address: {
                postalcode: '32371000',
                street: 'Rua Cardeal Arcoverde',
                number: '142',
                details: 'Loja 3',
                district: 'Água Branca',
                city_state: 'Contagem/MG',
            },
            deluvery_method: 'Moto',
            cnh: 'cnh-digital.jpg'

        }

        var signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        signup.alertMessageShouldBe('Oops! CPF inválido')

    })


})

