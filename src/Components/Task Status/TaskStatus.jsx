
import { Suspense } from 'react';
import ResolvedTask from '../Tickets/Resolved Task/ResolvedTask';
import { toast } from 'react-toastify';


// title
const TaskStatus = ({myTickets,resolved,setResolved,resCount,setResCount,count,setCount,removeTask}) => {

    //console.log(myTickets);

     const handleVisitedResolvedTask = (myTickets) => {

        //console.log(myTickets.title);

        const data=[myTickets,...resolved];
        const exists = resolved.some(t => t.id === myTickets.id);
        if (exists) return;
        setResolved(data);
        console.log(data);
        handleResolvedCount(myTickets);
        removeTask(myTickets);
        
   
 };


 const handleResolvedCount=()=>{

        const myCounter=resCount+1;
        toast("Congratulation,You have a finished a Task");
        setResCount(myCounter);
        


      }


    


   
    return (
        

     
        



        
        
        
             <div className='md:w-1/5 border- border-red-500'>

                        

                         <div>

                         
       
                          <h1 className='font-bold text-[#34485A] text-2xl mt-10 mb-2'>Task Status</h1>
                          <p className='text-[#627382] mb-5'>Select Your tickets to add to Task Status</p>

                          <div className='flex flex-col p-2 gap-2 bg-white border- border-amber-500'>
                          {/* onClick={() => handleVisitedResolvedTask(t)} */}
                                        
                                {
                                         myTickets.map(t =>
                                         
                                         <div className='p-2 m-1 border- border-red-500'>
                                                  <h1 className='font-semibold mb-2'>{t.title}</h1>
                                                  <button onClick={() => handleVisitedResolvedTask(t)}   className='w-full bg-[#02A53B] text-white font-bold'>Continue</button>
                                         </div>


                                            
                                         )
                               
                               }  

                              
                      


            

                                {/* {
                                   resolved.map(t=><ResolvedTask resolved={resolved}> t={t}</ResolvedTask>)
                                }  */}


                                <Suspense>
                                    <ResolvedTask resolved={resolved}></ResolvedTask>
                                </Suspense>

                            
                              
                          </div>

                          
       
                         </div>


                        



       
                        
                 </div> 
        
    
        
        
    );
};

export default TaskStatus;