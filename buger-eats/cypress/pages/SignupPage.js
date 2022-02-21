


class SignupPage {

    go(){
        cy.viewport(1400, 900)
        cy.visit('https://buger-eats.vercel.app')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(deliver) {
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
    }

    submit() {
        cy.get('button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMassage){
        cy.get('.swal2-container .swal2-html-container')
        .should('have.text', expectedMassage)
    }

    alertMessageShouldBe(expectedMassage){
        cy.get('.alert-error').should('have.text', expectedMassage)
    }
}

export default SignupPage;