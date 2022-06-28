class InventoryPage{
    elements = {
        InveName: ()=> cy.get('.inventory_item_label a .inventory_item_name'),
        InvePrice: ()=> cy.get('.pricebar .inventory_item_price'),
        InveImage: ()=> cy.get('.inventory_item_img a .inventory_item_img'),
        InveList: ()=> cy.get('.inventory_list .inventory_item'),
        InveADD: ()=> cy.get('.pricebar .btn'),
        InveCart: ()=> cy.get('.shopping_cart_link')
    }

    ListLengthCheck(length){
        this.elements.InveList().should('have.length', length)
    }

    CheckName(index, name){
        this.elements.InveName().eq(index).should('contain.text', name)
    }

    CheckPrice(index, price){
        this.elements.InvePrice().eq(index).should('contain.text', price)
    }

    CheckImage(index, image){
        this.elements.InveImage().eq(index).should('have.attr', 'src', image)
    }
}

module.exports = new InventoryPage()