

import './App.css'




import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Tickets from './Components/Tickets/Tickets'
import Footer from './Components/Footer/Footer'
import TaskStatus from './Components/Task Status/TaskStatus'
import { Suspense} from 'react'
import { use } from 'react'


const fetchTicket=async()=>{
  const res=await fetch("/ticket.json")
  return res.json()
}




function App() {

  const ticketPromise=fetchTicket();

  
  

  return (
    <>

   

    {/* I HAVE SPLIT THEM INTO FOUR COMPONENTS */}

    <Navbar></Navbar>
    

    
    
   <Suspense>
          <Banner></Banner>
   </Suspense> 
   
     
    {/* <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Tickets ticketPromise={ticketPromise}></Tickets>
    </Suspense>      */}

  
    

     {/* <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <TaskStatus></TaskStatus>
    </Suspense> */}

    <Footer></Footer>



    


    
      

 
     






  














    

    

    




    </>
  )
}

export default App
