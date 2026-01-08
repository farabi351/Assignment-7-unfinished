import img from "../Banner/../../assets/vector1.png"
import Tickets from "../Tickets/Tickets";
import { Suspense, useState } from "react";





const Banner = ({count,resCount}) => {





       
 

   
    
   
    

   

   





    
    return (
        <div className='bg-[#F5F5F5]'>
                  <div className='flex flex-col md:flex-row justify-between items-center ml-15 mr-15 gap-4 h-[500px] border- border-red-500'>
        
                     <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] h-[343px] w-full border- border-red-500 flex flex-col items-center justify-center rounded-3xl'>
        
                     <div
                         //absolute inset-0 bg-no-repeat bg-cover
                         className=""
                         style={{ backgroundImage: `url(${img})` }}
                     />  
        
                     {/* <div
                     className="absolute inset-0 bg-no-repeat bg-cover"
                     style={{ backgroundImage: `url(${img})`
                    ,transform: 'rotate(180deg)' }}
                     />  */}
        
                      <h1 className='text-white font-semibold text-2xl'>In-Progress</h1>
                      <p className='text-white text-5xl font-bold'> {count-resCount}</p>
                      {/* <button onClick={handleAdd}></button> */}
        
              </div> 
        
               <div className='h-[343px] w-full border- border-red-500 flex flex-col items-center justify-center rounded-3xl bg-gradient-to-r from-[#54cf67] to-[#00827a]'>
                     
                     {/* absolute inset-0 bg-no-repeat bg-cover */}
                     <div className=""
                       style={{ backgroundImage: `url(${img})` }}
                     />   
        
                     <div
        
                    className=""
                    style={{ backgroundImage: `url(${img})`
                    ,transform: 'rotate(180deg)' }}
                    />  
        
                    <h1 className='text-white font-semibold text-2xl'>Resolved</h1>
                    <p className='text-white text-5xl font-bold'>{resCount}</p>

                    
                    
                    {/* <Tickets count={count} setCount={setCount} myTickets={myTickets} setMyTickets={setMyTickets} title={title} setTitle={setTitle}></Tickets> 
               */}
        
                    
              </div> 
        
        
        
             </div>
        
             </div>

     
        
    );
};

export default Banner;