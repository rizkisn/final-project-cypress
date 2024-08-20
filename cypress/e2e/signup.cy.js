describe("Signup", () => {
    beforeEach(() => {
        // pre step
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get('#nava').should('be.visible');
    })

    it("with valid data ver 1", () => {
        // ke url https://www.demoblaze.com/index.html
        // pastikan homepage muncul
        // klik signup menu
        // pastikan modal signup muncul
        // isi username
        // isi password
        // click signup

        //versi 1
        cy.get('#signin2').click();
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header').should('be.visible');
        cy.wait(5000);
        cy.get('#sign-username').type('jojo222222');
        cy.get('#sign-password').type('jojo123');
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('This user already exist.');
         })
    }),

    it("with valid data ver 2", () => {
        cy.xpath('//*[@id="signin2"]').click();
        cy.xpath('//*[@id="signInModalLabel"]').should('be.visible');
        cy.wait(5000);
        cy.xpath('//*[@id="sign-username"]').type('jojo222222');
        cy.xpath('//*[@id="sign-password"]').type('jojo123');
        cy.xpath('//*[@type="button" and contains(text(), "Sign up")]').click();
        cy.on('window:alert',(t)=>{
            expect(t).to.contains('This user already exist.');
         })
    })
})

// Test Data
// Pre Requisites
// Steps
// Expected Result

// Setelah automation jalan
// Actual Result
// Status




