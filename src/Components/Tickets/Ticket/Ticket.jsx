import React from 'react';
import online from "../../../assets/online.png"
import calander from "../../../assets/calander.png"
import inProgress from "../../../assets/In-progress.png"
import { useState } from 'react';



const Ticket = ({tick,handleVisitedTickets}) => {

   



 const priorityColor = {
    "High Priority": "text-red-600",
    "Medium Priority": "text-yellow-500",
    "Low Priority": "text-green-500",
  };

  const statusStyles = {
    Open: {
    bg: "bg-blue-100 text-blue-700",
    image: online,
  },

    "In-Progress": {
      bg: "bg-yellow-100 text-green-700",
      image: inProgress,
      width:"w-[120px]",
  },



};










 
    
    
    return (
              <div onClick={() => handleVisitedTickets(tick)}  className=' border- border-red-500 bg-white md:m-2 shadow-xl'>
            
                             
                                {/* <button> {tick.title} Test Button</button>   */}
                                <div className='p-4'>
                                    <div className='flex justify-between items-center mb-2'>
                                        <h1 className='text-color[#34485A] font-semibold'>{tick.title}</h1>
                                        {/* <button className="flex items-center justify-center gap-1 
                                         rounded-xl bg-[#97d496] text-green-800 
                                         font-semibold w-[90px] h-[30px] text-xs"><img className="h-[10px] w-[10px]" src={online} alt="status" />{tick.status}
                                        </button> */}

                                        <button
                                            className={`flex items-center justify-center gap-1 rounded-xl
                                                        font-semibold w-[90px] h-[32px] text-xs
                                                        ${statusStyles[tick.status]?.bg}
                                                        ${statusStyles[tick.status]?.width}
                                                       `}
>
                                                      <img
                                                       className="h-[10px] w-[10px]"
                                                       src={statusStyles[tick.status]?.image}
                                                       alt="status"
                                                      />
                                                      {tick.status}
                                        </button>





                                    </div>
                           
                                    <h2 className='text-gray-500 font-medium mb-1'>{tick.description}</h2>
       
                                    <div className='flex flex-col md:flex-row justify-between items-center'>
       
                                        <div className='flex gap-2'>
                                           <h1 className='text-gray-400 font-medium'>{tick.id}</h1>
                                           {/* <h2 className='text-red-600 font-semibold'>{tick.priority}</h2> */}
                                            <h2 className={`font-semibold ${priorityColor[tick.priority]}`}>{tick.priority}</h2>

                                        </div>
                                 
                           
                           
                                    <div className='flex gap-2 text-gray-400 font-medium justify-between items-center'>
                                        <h2>{tick.customer}</h2>
                                        <img className='h-[10px] w-[10px]' src={calander} alt="" />
                                        <h2>{tick.createdAt}</h2>
                                    </div>
                                   
                               </div>
                               
                         </div>
                           
                       </div>
    );
};

export default Ticket;