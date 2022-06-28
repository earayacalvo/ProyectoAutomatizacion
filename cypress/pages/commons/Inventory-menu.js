class InventoryMenu{
    elements = {
        menuBtn: ()=> cy.get('#react-burger-menu-btn'),
        menuItems: ()=> cy.get('.bm-item-list .bm-item'),
        menuExit: ()=> cy.get('#react-burger-cross-btn'),
        menu: ()=> cy.get('.bm-menu-wrap')
    }

    CheckMenuStatus(status){
        this.elements.menu().should('have.attr', 'aria-hidden', status)
    }
}

module.exports = new InventoryMenu()