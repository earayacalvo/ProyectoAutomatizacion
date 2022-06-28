const LoginPage = require("../pages/pages/Login-page")
const dataForTest = require("../fixtures/ItemData.json")
const InventoryPage = require("../pages/pages/Inventory-page")
const ItemPage = require("../pages/pages/Item-page")

describe('Items', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        LoginPage.login("standard_user", "secret_sauce")
    })

    dataForTest.forEach(test => {
        it(`Validar info item - ${test.ItemName}`, () => {
            InventoryPage.elements.InveName().eq(test.ItemIndex).click()
            ItemPage.checkItemName(test.ItemName)
            ItemPage.checkItemPrice(test.ItemPrice)
            ItemPage.checkItemImage(test.ItemImage)
        })
    })

    it('Validar Back', () => {
        InventoryPage.elements.InveName().eq(0).click()
        ItemPage.elements.ItemBack().click()
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })
})