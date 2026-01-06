

const Navbar = () => {

  

   

          

    return (


      
        <div className='ml-15 mr-15 mx-auto mt-5 mb-10'>
                    <div className='flex flex-col md:flex-row justify-between items-center '>
                <div>
                      <h1 className='mb-2 font-bold md:font-bold text-2xl'>CS — Ticket System</h1>
                </div>
        
                <div className='flex flex-col md:flex-row gap-3 items-center justify-center'>
        
                  <h2 className='text-gray-500'>Home</h2>
                  <h2 className='text-gray-500'>FAQ</h2>
                  <h2 className='text-gray-500'>Changelog</h2>
                  <h2 className='text-gray-500'>Blog</h2>
                  <h2 className='text-gray-500'>Download</h2>
                  <h2 className='text-gray-500'>Contact</h2>
                  <button className="bg-gradient-to-r from-violet-600 to-purple-500 rounded-sm text-white p-2 font-bold">+ New Ticket</button>

                  
        
                
                </div>
              </div>
              </div>

              

    );
};

export default Navbar;