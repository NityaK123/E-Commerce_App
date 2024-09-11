// import React,{useState,useEffect} from 'react'
// import Grocery from '../Images/Grocery.png'
// import Mobile from '../Images/Mobile.png'
// import Appliance from '../Images/Appliance.png'
// import Travel from '../Images/Travel.png'
// import Phone from '../SlideImage/Phone.png'
// import Room from '../SlideImage/Room.png'
// import samsung from '../SlideImage/samsung.png'
// import zebronics from '../SlideImage/zebronics.png'
// import '../App.css'

// const MainContent = () => {

//     const arr = [Grocery, Mobile, Appliance, Travel]
//     const slide = [Phone,Room,samsung,zebronics]

//     const [image,setImage] = useState()
//     const [i,setI] = useState(0) 

//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             setI((prev)=>(prev+1)%4)
//         },4000)

//         return ()=>{
//             clearInterval(interval)
//         }
//     })

//     return (
//         <>
//             <div className="flex-col">
//                 <div className="flex flex-auto justify-around bg-red-200">
//                     {arr.map((item, i) => {
//                         return (
//                             <>
//                                 <div id="category" className="w-20 items-center text-center" key={i}>
//                                     <img src={item} alt="Images" className="bg-red-200"/>
//                                     <span>hi</span>
//                                 </div>
//                             </>
//                         )
//                     })}
//                 </div>

//                 <div id="slider" className="relative overflow-hidden w-full h-64 bg-gray-200">
//                    <div className='flex slide' style={{ transform: `translateX(-${i * 100}%)`, transition: 'transform 1s ease-in-out' }}>
//                    {
//                      slide.map((slider,i)=>{
//                         return(
//                             <div key={i} className='h-64 w-full flex-shrink-0 object-cover'>
//                                  <img src={slider} alt="Slider" className='h-64 object-cover'/>
//                             </div>
//                         )
//                      })
//                    }
//                    </div>
//                 </div>

//             </div>
//         </> 
//     )
// }

// export default MainContent 

import React, { useState, useEffect } from 'react';
import Grocery from '../Images/Grocery.png';
import Mobile from '../Images/Mobile.png';
import Appliance from '../Images/Appliance.png';
import Travel from '../Images/Travel.png';
import Phone from '../SlideImage/Phone.png';
import Room from '../SlideImage/Room.png';
import samsung from '../SlideImage/samsung.png';
import zebronics from '../SlideImage/zebronics.png';
import '../App.css';

const MainContent = () => {
    const arr = [Grocery, Mobile, Appliance, Travel];
    const slide = [Phone, Room, samsung, zebronics];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slide.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [slide.length]);

    return (
        <div className="flex-col">
            <div className="flex flex-auto justify-around bg-red-200">
                {arr.map((item, index) => (
                    <div id="category" className="w-20 items-center text-center" key={index}>
                        <img src={item} alt="Category" className="bg-red-200" />
                        <span>hi</span>
                    </div>
                ))}
            </div>

            <div id="slider" className="relative overflow-hidden w-full h-64 bg-gray-200">
                <div className='flex slide' style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
                    {slide.map((slider, index) => (
                        <div key={index} className='h-64 w-full flex-shrink-0'>
                            <img src={slider} alt="Slider" className='h-64 w-full object-cover' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MainContent;
