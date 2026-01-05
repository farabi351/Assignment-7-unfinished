import React, { use } from 'react';
import ResolvedTask from '../Tickets/Resolved Task/ResolvedTask';
import { useState } from 'react';

const TaskStatus = ({ticketData,handleVisitedTickets,mytickets,setMyTickets,title,setTitle,resolved,handleVisitedResolvedTask,count,handleTicketCount}) => {

    //console.log(title);

    //here you need to update code. watch video first, maybe setResolved need() need to ne updated   
  


console.log(title);
    



         

   
    return (
        //  made it-----------------------------------------hidden


     
        



        
        
        
             <div className='md:w-1/5 border-2 border-red-500'>

                        

                         <div>

                         
       
                          <h1 className='font-bold text-[#34485A] text-2xl mt-10 mb-2'>Task Status</h1>
                          <p className='text-[#627382] mb-5'>Select Your tickets to add to Task Status</p>

                          <div className='flex flex-col p-2 gap-2 bg-white border-2 border-amber-500'>

                                       
                               {
                                         title.map(t =>
                                         
                                         <div className='p-2 m-1 border-2 border-red-500'>
                                                  <h1 className='font-semibold mb-2'>{t}</h1>
                                                  <button onClick={() => handleVisitedResolvedTask(t)}  className='w-full bg-[#02A53B] text-white font-bold'>Continue</button>
                                         </div>


                                            
                                         )
                               }


                               {/* <h1 className='font-medium'>{title}</h1> */}
                                 {/* <Suspense>

                      
                         <ResolvedTask></ResolvedTask>
                      


                    </Suspense> */}

                               {/* {
                                   title.map(t=><ResolvedTask resolved={resolved}> t={t}</ResolvedTask>)
                               } */}

                               {/* <ResolvedTask resolved={resolved}></ResolvedTask> */}
                              
                          </div>

                          
       
                         </div>


                        



       
                         {/* <div>
                           <h1 className='font-bold text-[#34485A] text-2xl'>Resolved Task</h1>
                           <p className='text-[#627382]'>No Resolved tasks yet</p>

                           <div className='flex-start bg-blue-200 m-2 p-0.5'>
                               <h1 className='font-light'>Incorrect Billing Address</h1>
                           </div>
                         </div> */}
                 </div> 
        
    
        
        
    );
};

export default TaskStatus;