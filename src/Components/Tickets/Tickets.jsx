import React, { Suspense, use,useState} from 'react';

import TaskStatus from '../Task Status/TaskStatus';
import Ticket from '../Tickets/Ticket/Ticket';
import Banner from '../Banner/Banner';

//ticketPromise
const Tickets = ({tick,ticketPromise}) => {

 // console.log(ticketPromise);

 console.log(tick);


 const [myTickets,setMyTickets]=useState([]);
        
    //handle function for handling tickets  
    const handleVisitedTickets=(tick)=>{
    
        console.log("Visited individual  tickets Array",tick)
    
        const newVisitedTickets=[...myTickets,tick]
        console.log(newVisitedTickets,"my ticket is an empty array, and tick is individual click,this way we can create an array of clicked items");
        console.log(newVisitedTickets.length,"i am just counting the number things inside the array");
        setMyTickets(newVisitedTickets);
        console.log(newVisitedTickets);
    
      }
 
 
     const [title,setTitle]=useState([]);
 
 
 
 
  const handleVisitedInProgress = (tick) => {
     setTitle([...title,tick.title]);
     console.log(title);
   };
 
 
    const [count,setCount]=useState(0);
       //  const handleTicketCount=(tick)=>{
       //       const newCount=count+1;
       //       setCount(newCount);
            
 
            
            
         
       // //   //this is function that is to be called inside another function
       //     handleVisitedTickets(tick);
       //     handleVisitedInProgress(tick);
 
 
       // }
 
       const handleTicketCount = (tick) => {
   setCount(prev => prev + 1);
   handleVisitedTickets(tick);
   handleVisitedInProgress(tick);
 };
 
 
 
 
 
 
     const [resolved,setResolved]=useState([]);
 
 
         // import tick here from ticket 
     //     const handleVisitedResolvedTask=(t)=>{
     //        console.log(t);
     //        const myVal=([...resolved,title]);
     //        console.log(myVal);
     //        setResolved(myVal);
         
 
     //    }
 
 
 
     const handleVisitedResolvedTask = (t) => {
   // add ONE item to resolved
   setResolved(prev => [...prev, t]);
 
   // remove that ONE item from in-progress
   setTitle(prev => prev.filter(t => t !== t));
 };
 
 


 







//use function to read data   
//const ticketData=use(ticketPromise)



   
   






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

                       {
                        ticketData.map(tick=> <Ticket key={tick.id} tick={tick} handleVisitedTickets={handleVisitedTickets} handleVisitedInProgress={handleVisitedInProgress} handleTicketCount={handleTicketCount}></Ticket>

                         

                      




                        )
                      }

                      
        

                       {/* <Suspense>
                             <Ticket key={tick.id} tick={tick} handleVisitedTickets={handleVisitedTickets} handleVisitedInProgress={handleVisitedInProgress} handleTicketCount={handleTicketCount}></Ticket>
                      </Suspense>  */}
                       
                     </div>
                    </div>
       
                    <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
                          <TaskStatus ticketData={ticketData} handleVisitedTickets={handleVisitedTickets} myTickets={myTickets} title={title}> setTitle={setTitle} resolved={resolved} handleVisitedResolvedTask={handleVisitedResolvedTask} count={count} handleTicketCount={handleTicketCount}</TaskStatus>
                    </Suspense>  

                     

                    {/* <ResolvedTask></ResolvedTask> */}
       
             </div>
           </div>
       </div>
    );
};

export default Tickets;