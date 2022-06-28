class ItemPage{
    elements = {
        ItemName: ()=> cy.get('.inventory_details_name'),
        ItemPrice: ()=> cy.get('.inventory_details_price'),
        ItemImage: ()=> cy.get('.inventory_details_img'),
        ItemBack: ()=> cy.get('.btn_secondary')
    }

    checkItemName(name){
        this.elements.ItemName().should('contain.text', name)
    }

    checkItemPrice(price){
        this.elements.ItemPrice().should('contain.text', price)
    }

    checkItemImage(image){
        this.elements.ItemImage().should('have.attr', 'src', image)
    }
}

module.exports = new ItemPage()