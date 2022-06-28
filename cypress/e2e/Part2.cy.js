const InventoryMenu = require("../pages/commons/Inventory-menu")
const LoginPage = require("../pages/pages/Login-page")

describe('Menu', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        LoginPage.login("standard_user", "secret_sauce")
    })

    it('NombresMenu', () => {
        const MenuNames = [
            "All Items",
            "About",
            "Logout",
            "Reset App State"
        ]

        InventoryMenu.elements.menuBtn().click()
        InventoryMenu.elements.menuItems().each((item, index, list) => {
            cy.wrap(item).should('contain.text', MenuNames[index])
        })
    })

    it('Menu Abre Cierra', ()=>{
        InventoryMenu.elements.menuBtn().click()
        InventoryMenu.CheckMenuStatus('false')
        InventoryMenu.elements.menuExit().click()
        InventoryMenu.CheckMenuStatus('true')
    })
})