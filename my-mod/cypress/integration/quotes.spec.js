//Write tests here
//describe() block describes a collection of tests
describe('Quote App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })
    
    
    //it() is the test itself
    it('example test', () =>{
        //helper function
        const textInput = () => cy.get('[name="user"]');
        const emailInput = () => cy.get('[name="email"]');
        const passwordInput = () => cy.get('[name="password"]');
        const checkInput =() => cy.get(':nth-child(4) > input');
        const submitButton = () => cy.get('button');



        //assertions below
        const person = {name: "jimmy"};

        // 'expect' is an assertion
        expect(2+2).to.equal(4)                               //strict check, an exact copy check like "==="
        expect(2+2).to.not.equal(5)                           //strict
        expect('Jimmy').to.equal('Jimmy');                    //strict
        expect({name: 'Jimmy'}).to.deep.equal({name: 'Jimmy'}) //strict   adding deep makes it a deep check
        expect({name: 'Jimmy'}).to.eql({name: 'Jimmy'});      //deep check, a little loose check kinda like "=="
        expect(person).to.equal(person);
        cy.get('button').should('exist');
        

    })

    it('tests if submit button can submit', ()=>{
        const textInput = () => cy.get('[name="user"]');
        const emailInput = () => cy.get('[name="email"]');
        const passwordInput = () => cy.get('[name="password"]');
        const checkInput =() => cy.get('[name="tosCheck"]');
        const submitButton = () => cy.get('button');

        textInput().type('Coding is fun!!!')
        emailInput().type('Coding is fun!!!')
        passwordInput().type('Coding is fun!!!')
        checkInput().check();
        submitButton().click();
    })

    it('renders properly', () => {
        cy.visit('http://localhost:3000')

        cy.get(':nth-child(1) > input').should('exist');
        cy.get(':nth-child(2) > input').should('exist');
        cy.get('button').should('exist');
        cy.get('[name="foobar"]').should('not.exist');

    })

    describe('Filling out the input', () => {
        it('can type in name'), () => {
            cy.get(':nth-child(1) > input').type('Coding is fun!!!').should('have.value', 'Coding is fun!!!');
            cy.get('[name:"user"]').type('Joe');
        }
    })

})

describe('PPEEPEE LENGTH', () => {

    it ('Mesures PP', () => {
        expect(1).to.equal(1);
    }) 

})