import {render,screen} from '@testing-library/react'
import Header from '../../Component/Header'


describe("Header Component Test",()=>{
    
    beforeEach(()=>{
        render(<Header />)
    })

    test("Test case first for Login Button",()=>{
        expect(screen.getByText(/Login/i)).toBeInTheDocument()
    });

    test("Test case first for Login Button",()=>{
        expect(screen.getByText(/Cart/i)).toBeInTheDocument()
        expect(screen.getByText(/Login/i)).toBeInTheDocument()
    }) 

    test("Test case second for cart",()=>{
          const btn = screen.getByAltText('cart')
          console.log(btn) 
          expect(btn).toBeInTheDocument() 
    }) 
    
})



