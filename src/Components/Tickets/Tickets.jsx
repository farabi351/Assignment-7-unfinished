import React, { Suspense, use} from 'react';

import TaskStatus from '../Task Status/TaskStatus';
import Ticket from '../Tickets/Ticket/Ticket';
import { toast } from 'react-toastify';


//ticketPromise
const Tickets = ({ticketPromise,myTickets,setMyTickets,resolved,setResolved,count,setCount,resCount,setResCount,removeTask,removeTicket}) => {

   const ticketData=use(ticketPromise);



   const handleVisitedTickets=(tick)=>{
    
        //console.log("Visited individual  tickets Array",tick)
    
        const newVisitedTickets=[...myTickets,tick]
        //console.log(newVisitedTickets,"my ticket is an empty array, and tick is individual click,this way we can create an array of clicked items");
        //console.log(newVisitedTickets.length,"i am just counting the number things inside the array");
        const exists = myTickets.some(t => t.id === tick.id);
        if (exists) return;
        setMyTickets(newVisitedTickets);
        //console.log(newVisitedTickets.title);
        //console.log(myTickets);
        handleTicketCount(tick);
        removeTicket(tick);
        
        
        
    
      }


      const handleTicketCount=()=>{

        const counter=count+1;
        toast("You have selected an item to work with");
        setCount(counter);
        //console.log(counter);
        
      }


      
    //  console.log(mycount);


  
  
  


  


  






     
    







  
   



  

 



    return (

      





       <div className='bg-[#F5F5F5]'>
           <div className='ml-15 mr-15'>
                 {/* test code */}
                 <div className='flex justify-between'>

                    {/* <h1>in progress {myTickets.length}</h1> */}

                 </div>

                  











                 <div className='flex flex-col w-full md:flex-row justify-between items-start gap-4 md:mx-auto'>
                 
                     <div className='md:w-4/5 border- border-red-500 gap-2'>

                    {/* <h1>Test {myTickets.length}</h1> */}
                      
                     <h1 className="font-bold text-[#34485A] text-2xl mt-10 mb-5">Customer Tickets </h1>
                    
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">

                      {/* handleTicketCount={handleTicketCount} */}
                      {/* key={tick.id} tick={tick} myTickets={myTickets} setMyTickets={setMyTickets} count={count} setCount={setCount} title={title} setTitle={setTitle} */}

                       {
                         ticketData.map(tick=><Ticket key={tick.id} tick={tick} myTickets={myTickets} setMyTickets={setMyTickets} handleVisitedTickets={handleVisitedTickets} count={count} setCount={setCount} handleTicketCount={handleTicketCount} removeTask={removeTask} removeTicket={removeTicket}></Ticket>

                         

                      




                        )
                      }

                      
        

                       {/* <Suspense>
                             <Ticket key={tick.id} tick={tick} handleVisitedTickets={handleVisitedTickets} handleVisitedInProgress={handleVisitedInProgress} handleTicketCount={handleTicketCount}></Ticket>
                      </Suspense>  */}
                       
                     </div>
                    </div>
       
                    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                          <TaskStatus handleVisitedTickets={handleVisitedTickets} myTickets={myTickets} resolved={resolved} setResolved={setResolved} resCount={resCount} setResCount={setResCount} count={count} removeTask={removeTask}></TaskStatus>
                    </Suspense>   

                     

                    {/* <ResolvedTask></ResolvedTask> */}
       
             </div>
           </div>
       </div>
    );
};

export default Tickets;