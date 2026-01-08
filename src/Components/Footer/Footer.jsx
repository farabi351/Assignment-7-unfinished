import React from 'react';

import x from "../../assets/twitter-x-logo-png-9.png"
import linkedin from "../../assets/link1.png"
import facebook from "../../assets/facebook1.png"
import mail from "../../assets/mail1.png"

const Footer = () => {
    return (

    //Made it hidden, check----------------------------Bellow
        
    <footer className='mx-auto bg-black text-white'>
    
    {/* flex flex-col text-center text-sm gap-15 */}

      <div className='flex flex-col gap-5 md:flex-row justify-between pt-15 pb-21 ml-15 mr-15 border-b-2 mb-5'>

        <div>

          <h1 className='font-bold text-white mb-2'>CS — Ticket System</h1>
          <p className='text-xs md:text-sm'>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. Lorem <br />Ipsum has been the industry's standard <br />dummy text ever since the 1500s, when an <br />unknown printer took a galley of type and <br />scrambled it to make a type specimen book.</p>

        </div>

            

        <div>

          <h1 className='font-bold text-white mb-2'>Company</h1>
          <p>About Us</p>
          <p>Our Mission</p>
          <p>Contact Saled</p>

        </div>

        <div>

          <h1 className='font-bold text-white mb-2'>Services</h1>
          <p>Products & Services</p>
          <p>Customer Stories</p>
          <p>Download Apps</p>

        </div>

        <div>

          <h1 className='font-bold text-white mb-2'>Information</h1>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
          <p>Join Us</p>

        </div>

        <div className=''>

           <div className='flex items-center justify-center'>
            <img className='h-[20px] w-[20px]' src={facebook} alt="" />
            <p> @CS — Ticket System</p>
          </div>
          
          <div className='flex items-center justify-center'>
            <img className='h-[20px] w-[20px]' src={x} alt="" />
            <p> @CS — Ticket System</p>
          </div>
          
          <div className='flex items-center justify-center'>
            <img className='h-[20px] w-[20px]' src={linkedin} alt="" />
            <p> @CS — Ticket System</p>
          </div>
          
          <div className='flex items-center justify-center'>
            <img className='h-[20px] w-[20px]' src={mail} alt="" />
            <p> support@cst.com</p>
          </div>


          
        </div>

      </div>

      <div className='text-xs md:p-5 bg-black'>
        <h1 className='text-center text-white'>© 2025 CS — Ticket System. All rights reserved.</h1>
      </div>
      
    </footer>
    );
};

export default Footer;