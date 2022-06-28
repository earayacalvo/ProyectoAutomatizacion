class CartPage{
    elements = {
        CartList: ()=> cy.get('.cart_list'),
        CartRemove: ()=> cy.get('.cart_button'),
        CartName: ()=> cy.get('.cart_item .inventory_item_name'),
        CartCheckout: ()=> cy.get('#checkout'),
        CartFirstName: ()=> cy.get('#first-name'),
        CartLastName: ()=> cy.get('#last-name'),
        CartZip: ()=> cy.get('#postal-code'),
        CartCont: ()=> cy.get('#continue'),
        CartFin: ()=> cy.get('#finish'),
        CartHeader: ()=> cy.get('.complete-header')
    }
}

module.exports = new CartPage()