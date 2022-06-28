class LoginPage{
    elements = {
        userNameField: ()=> cy.get('#user-name'),
        passwordFiels: ()=> cy.get('#password'),
        loginBtn: ()=> cy.get('#login-button'),
        errorMessage: ()=> cy.get('.error-message-container h3')
    }

    enterUserName(user){
        this.elements.userNameField().type(user)
    }

    enterPasswork(pass){
        this.elements.passwordFiels().type(pass)
    }

    clickBtn(){
        this.elements.loginBtn().click()
    }

    login(user, pass){
        this.enterUserName(user)
        this.enterPasswork(pass)
        this.clickBtn()
    }

    checkError(error){
        this.elements.errorMessage().should('exist').should('have.text', error)
    }
}

module.exports = new LoginPage()