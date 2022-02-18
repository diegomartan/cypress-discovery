

describe('Cadastro', () => {
    it('Usuário deve se tornar um entregador', () => {
        cy.viewport(1400, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')


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

        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name=address]').should('have.value', deliver.address.street)
        cy.get('input[name=district]').should('have.value', deliver.address.district)
        cy.get('input[name=city-uf]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.deluvery_method).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

        cy.get('button[type="submit"]').click()

        const expectedMassage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.' 

        cy.get('.swal2-container .swal2-html-container')
            .should('have.text', expectedMassage)

    })


    it('CPF inválido', () => {
        cy.viewport(1400, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')


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

        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name=address]').should('have.value', deliver.address.street)
        cy.get('input[name=district]').should('have.value', deliver.address.district)
        cy.get('input[name=city-uf]').should('have.value', deliver.address.city_state)

        cy.contains('.delivery-method li', deliver.deluvery_method).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

        cy.get('button[type="submit"]').click()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
    })


})

