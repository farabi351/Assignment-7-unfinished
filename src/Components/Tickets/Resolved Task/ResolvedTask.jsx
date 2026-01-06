

 const ResolvedTask = ({resolved}) => {


   console.log(resolved);

 

     
     

    
     return (
          <div>
                    <h1 className='font-bold text-[#34485A] text-2xl'>Resolved Task</h1>
                    <p className='text-[#627382]'>No Resolved tasks yet</p>

                    
                     {
                          resolved.map(t=>
                            <div className='flex-start bg-blue-200 m-2 p-0.5'>
                               <h1 className='font-semibold text-2xl border-2 border-cyan-100'>{t.title}</h1>
                            </div>)
                    } 



                    
        </div>
     );
 };

 export default ResolvedTask;




                           