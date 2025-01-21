import {render,screen} from '@testing-library/react'
import Header from '../../Component/Header'


describe("Header Component Test",()=>{
    render(<Header />);

    test("Test case first for Login Button",()=>{
        expect(screen.getByText(/Login/i)).toBeInTheDocument()
    })

    test("Test case second for cart",()=>{
          expect(screen.getByText(/Become a seller/i)).toBeInTheDocument()
    })
})

