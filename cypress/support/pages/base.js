class Base {

async openurl(){
    cy.visit('https://www.demoblaze.com/index.html');  
}


}

module.exports = new Base()