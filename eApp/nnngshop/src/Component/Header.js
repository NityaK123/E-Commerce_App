import React,{useState} from 'react'
import Plus from '../Images/image.png'
import search from  '../Images/search.png'
import people from '../Images/people.png'
import downarrow from '../Images/downarrow.png'
import cart from '../Images/cart.png'
import seller from '../Images/seller.png'

const Header=()=>{

    const [ishover,setIshover] = useState(false)

    return(
        <>
           <div className="m-5 flex flex-auto justify-around" onMouseEnter={()=>setIshover(true)} onMouseLeave={()=>setIshover(false)}>
               <div>
                    <img src={Plus} alt="Flipcart/Inage" />
                </div> 
                <div className="flex mx-10 border-2 rounded-md">
                    <img src={search} className="w-8" alt="search/icon" />
                    <input className="w-80 border-none" type="text" placeholder=' Search for products,Brands and More'/>
                </div>
                <div className="flex items-center hover:bg-red-200 w-24">
                    <img src={people} alt="" />
                    <button className='mx-1'>Login</button>
                    {ishover ? <img src={downarrow} alt="^"/> : " ^"}
                </div>
                <div className="flex items-center mx-5">
                    <img src={cart} alt="cart" />
                    <button className="mx-2">Cart</button>
                </div>
                <div className="flex items-center mx-5">
                    <img src={seller} alt="seller" />
                    <button className="mx-2">Become a seller</button>
                </div>
           </div>
        </>
    )
}

export default Header

