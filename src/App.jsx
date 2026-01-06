

import './App.css'




import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Tickets from './Components/Tickets/Tickets'
import Footer from './Components/Footer/Footer'
import TaskStatus from './Components/Task Status/TaskStatus'
import { Suspense} from 'react'
import { use } from 'react'
import { useState } from 'react'
//import { ToastContainer } from 'react-toastify';


const fetchTicket=async()=>{
  const res=await fetch("/ticket.json")
  return res.json()
}

const ticketPromise=fetchTicket();




function App() {

  const [count,setCount]=useState(0);
  
  
  const [myTickets,setMyTickets]=useState([]);

  const [title,setTitle]=useState([]);

  const [resolved,setResolved]=useState([]);

  



  
  

  return (
    <>

   

  

    <Navbar></Navbar>
    

    
    
      <Banner count={count} setCount={setCount}></Banner> 
   
     
     <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
          <Tickets ticketPromise={ticketPromise} myTickets={myTickets} setMyTickets={setMyTickets} title={title} setTitle={setTitle} resolved={resolved} setResolved={setResolved} count={count} setCount={setCount}></Tickets>
    </Suspense>       

  
    

     

    <Footer></Footer>

    {/* <ToastContainer></ToastContainer> */}



    


    
      

 
     






  














    

    

    




    </>
  )
}

export default App
