const Cart = require("../pages/commons/Cart")
const InventoryPage = require("../pages/pages/Inventory-page")
const LoginPage = require("../pages/pages/Login-page")

describe('Carrito', () => {
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        LoginPage.login("standard_user", "secret_sauce")
    })

    it('Validar ADD inventario', () => {
        InventoryPage.elements.InveADD().eq(0).click()
        InventoryPage.elements.InveCart().click()
        Cart.elements.CartList().find('.cart_item')
    })

    it('Validar REMOVE carrito', ()=>{
        InventoryPage.elements.InveADD().eq(0).click()
        InventoryPage.elements.InveCart().click()
        Cart.elements.CartRemove().click()
        Cart.elements.CartList().find('.removed_cart_item')
    })

    it('Checkout', ()=>{
        const ItemsName = [
            'Sauce Labs Backpack',
            'Sauce Labs Bike Light',
            'Sauce Labs Bolt T-Shirt',
            'Sauce Labs Fleece Jacket',
            'Sauce Labs Onesie',
            'Test.allTheThings() T-Shirt (Red)'
        ]

        InventoryPage.elements.InveADD().each(((item, index, list) => {
            cy.wrap(item).click()
        }))
        InventoryPage.elements.InveCart().click()
        Cart.elements.CartName().each((item, index, list) => {
            cy.wrap(item).should('contain.text', ItemsName[index])
        })
        Cart.elements.CartCheckout().click()
        Cart.elements.CartFirstName().type('Name')
        Cart.elements.CartLastName().type('LastName')
        Cart.elements.CartZip().type('99502')
        Cart.elements.CartCont().click()
        Cart.elements.CartName().each((item, index, list) => {
            cy.wrap(item).should('contain.text', ItemsName[index])
        })
        Cart.elements.CartFin().click()
        Cart.elements.CartHeader().should('contain.text', 'THANK YOU FOR YOUR ORDER')
    })
})