const LoginPage = require("../pages/pages/Login-page")

describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login Sin Usuario', ()=>{
        LoginPage.enterPasswork('secret_sauce')
        LoginPage.clickBtn()
        LoginPage.checkError('Epic sadface: Username is required')
    })

    it('Login Sin Password', ()=>{
        LoginPage.enterUserName('standard_user')
        LoginPage.clickBtn()
        LoginPage.checkError('Epic sadface: Password is required')
    })

    it('Login Password Incorrecto', ()=>{
        LoginPage.enterUserName('standard_user')
        LoginPage.enterPasswork('password_incorrecto')
        LoginPage.clickBtn()
        LoginPage.checkError('Epic sadface: Username and password do not match any user in this service')
    })

    it('Login Correcto', ()=>{
        LoginPage.login('standard_user', 'secret_sauce')
    })
})

//User: standard_user
//Password: secret_sauce

//password_incorrecto