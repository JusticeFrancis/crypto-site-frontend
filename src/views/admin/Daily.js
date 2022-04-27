import React, { useState } from 'react'

const Daily = (props) => {
    const {backend} = props
    const [loader , setLoader] = useState(false)
    const [msg , setMsg] = useState('')

    const daily = async()=>{
        confirm()
        setLoader(true)
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        };
        const response = await fetch(backend+'/update-wallet-daily', requestOptions)
        const res = await response.json()
        if(res.status === 'success'){
             setMsg('wallets successfully updated')
             setLoader(false)
             return
               
         }
         else{
             setMsg('wallets failed to update try again')
             setLoader(false)
             return
         }
    }

  return (
      <div>
          {loader 
          ?(

            <div className="text-center">
            <i className="fas fa-spinner fa-3x fa-pulse"></i>
             </div>
          )
          :(
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg  border-0">
         
            <div className=" md:px-10 mx-auto w-full">
            <div>
                <div className="flex flex-wrap">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg  border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className=" text-xl font-bold">Update</h6>
                            
                        </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>
                            <h6 className=" text-sm mt-3 mb-6 font-bold uppercase">
                            {msg}
                            </h6>
                            <div className="flex flex-wrap">
                        
                          

                            <button id="myBtn" onClick={()=>{daily()}}
                                    className="bg-lightBlue-500     text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    >
                                    Make daily update
                                </button>
                            </div>


                            
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            </div> 
         
          
        </div> 
          )
          
          }
      </div>
  )
}

export default Daily