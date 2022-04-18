import React, { useState } from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import FooterAdmin from "components/Footers/FooterAdmin";

export default function Settings(props) {
  const {user, backend} = props
  const [loader , setLoader] = useState(true)
  const[wallet, setWallet]= useState({})

  //get  wallet
      const getWallet = async()=>{
        
        const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json'},
        };
        
        const response = await fetch(backend+'/wallet/'+user.email, requestOptions)
        const res = await response.json()
        

        if(res.status === 'success'){
          setWallet(res.wallet)
          setLoader(false)
            return
              
        }
        else{
            setLoader(false)
            return
        }
        setLoader(false)
    }
    getWallet()
  return (
    <>
    
    {loader === false
    ?(
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg  border-0" >
      <div className=" md:px-10  w-full">
      <div>
          {/* Card stats */}
          <div className="flex flex-wrap"></div>
              <div className="flex flex-wrap">
                  <div className="w-full lg:w-4/12  mx-auto"> 
                  <CardProfile wallet = {wallet} />
                  </div>
                 
              </div>
          </div>
    </div>
    </div>
    )
    :
    (
      <div className="text-center">
      <i className="fas fa-spinner fa-3x fa-pulse"></i>
      </div>
    )
    }

      <FooterAdmin></FooterAdmin>
    </>
  );
}
