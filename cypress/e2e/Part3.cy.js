const LoginPage = require("../pages/pages/Login-page")
const dataForTest = require("../fixtures/ItemData.json")
const InventoryPage = require("../pages/pages/Inventory-page")

describe('Inventory', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        LoginPage.login("standard_user", "secret_sauce")
    })

    it('Validar Cantidad Inventario', () => {
        InventoryPage.ListLengthCheck(6)
    })

    dataForTest.forEach(test => {
        it(`Validar Inventario - ${test.ItemName}`, () => {
            InventoryPage.CheckName(test.ItemIndex, test.ItemName)
            InventoryPage.CheckPrice(test.ItemIndex, test.ItemPrice)
            InventoryPage.CheckImage(test.ItemIndex, test.ItemImage)
        })
    })

    it('Validar ADD TO CART', () => {
        InventoryPage.elements.InveADD().each((item, index, list) => {
            cy.wrap(item).should('contain.text', 'Add to cart')
        })
    })
})