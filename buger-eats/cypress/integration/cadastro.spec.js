
import signup from '../pages/SignupPage'


describe('Cadastro', () => {

    beforeEach(function () {
        cy.fixture('deliver').then((d) => {
            this.deliver = d
        })
    })

    it('Usuário deve se tornar um entregador', function () {

        signup.go()
        signup.fillForm(this.deliver.signup)
        signup.submit()

        const expectedMassage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectedMassage)

    })


    it('CPF inválido', function () {
        signup.go()
        signup.fillForm(this.deliver.cpf_inv)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

    })


})

