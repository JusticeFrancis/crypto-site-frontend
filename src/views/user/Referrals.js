import {React,useState} from "react";
import CopyToClipboard from "react-copy-to-clipboard";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

import AdminTableDropdown from "components/Dropdowns/AdminTableDropdown.js";

export default function Referrals(props) {
    const {user, backend} = props
    const color = 'light'
    const [step , setStep] = useState(0)
    const [coin , setCoin] = useState('USDT')
    const[amount , setAmount] = useState(0)
    const[email, setEmail] = useState('')
    const[checked , setChecked] = useState(false)
    const[info , setInfo] = useState(true)
    const[loader, setLoader] = useState(false)
    const [msg , setMsg] = useState('')
    const [transactionId , setTransactionId] = useState('')
    const [mobile, setMobile] = useState(false)
    const [copied, setCopied] = useState(false)
    const [refCode , setRefCode] = useState('')



    const[referrals , setReferrals] = useState([])
    const[referralGains , setReferralGains] = useState([])
    
    // When the user clicks on the button, open the modal
    function openModal(id) {
        let modal = document.getElementById("myModal-"+id);
        modal.style.display = "block";
    }
    
        // When the user clicks on <span> (x), close the modal
    function closeModal(id) {
        let modal = document.getElementById("myModal-"+id);
        modal.style.display = "none";
    }
    window.addEventListener('load',(event)=>{
        verifyReferee()
        getReferrals()
        getReferralsGain()
    })


    //create referee account
    const createAccount = async()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body : JSON.stringify({email : user.email})
        };
        const response = await fetch(backend+'/referrals/create_account', requestOptions)
        const res = await response.json()
        console.log(res.data)
        
    
        if(res.status === 'failed'){
            setLoader(false)
            setStep(0)
            
        }
        else{
            setLoader(false)
            setStep(1)
            setRefCode(res.data.key)
            
        }
    }



    //verfy if user has referee 
   const verifyReferee = async()=>{
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body : JSON.stringify({email : user.email})
    };
    const response = await fetch(backend+'/verify_referee', requestOptions)
    const res = await response.json()
    console.log(res.data)
    

    if(res.data.length === 0){
        setLoader(false)
        console.log({empty : res})
        setStep(0)
        
    }
    else{
        setLoader(false)
        setStep(1)
        console.log('hi')
        setRefCode(res.data.key)
    }
   }

    //approve transaction
    const getReferrals = async()=>{
        setLoader(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body : JSON.stringify({ email : user.email})
        };
        const response = await fetch(backend+'/referrals/get_referrals', requestOptions)
        const res = await response.json()
        
    
        if(res.status === 'failed'){
            setLoader(false)
            return
            
        }
        else{
            setLoader(false)
            setReferrals(res.data)
            return
            
        }
    }

    //get transactions
    const getReferralsGain = async()=>{
        setLoader(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body : JSON.stringify({ email : user.email})
        };
        const response = await fetch(backend+'/referrals/get_referralGains', requestOptions)
        const res = await response.json()
        
    
        if(res.status === 'failed'){
            setLoader(false)
            return
            
        }
        else{
            setLoader(false)
            setReferralGains(res.data)
            return
            
        }
    }

    
  

    const nextStep =()=>{
         setStep(step + 1)
    }
    const prevStep =()=>{
        setStep(step - 1)
    }
  return (
    <>
     {mobile
     ?(
        <p style={{ color: 'red' }}>kindly set browser to desktop mode to view transactions</p>
     )
     :
     (
         <div>
               { loader 
    ?(
        <div className="text-center">
            <i className="fas fa-spinner fa-3x fa-pulse"></i>
        </div>
      
    )
    :(
       <div>
           <div className="text-center" style={{ color: 'green' }}>{msg}</div>





           { step === 0
            ?(
                <div className="text-center">
                    <p style={{ letterSpacing:'2px' }}>
                        hey INVESTOR ,you are welcome to our referral portal 
                        refer a fellow investor and get 5% of the amount of each credit transaction he/she makes
                    </p>
                    <p style={{ letterSpacing:'2px' , marginTop: '5px'}}>
                        create your referral portal, to start referring fellow Tether Investors
                    </p>
                     <button id="myBtn" style={{ backgroundColor:'green' }}
                        className=" mt-3 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline mr-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={()=>{
                            createAccount()
                        }}
                        >
                        create your referral portal
                    </button>
                </div>      
            )
            : null
        
            }








              { step === 1
            ?(
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg  border-0 mt-4" >
                <div className="px-4 md:px-10 mx-auto w-full">
                <div className="relative w-full mb-3">
                  <div className="flex flex-wrap">
                      <div className="relative flex  flex-col min-w-0 break-words w-full md:w-8/12 lg:w-8/12 xl:w-8/12 mb-6 shadow-lg rounded-lg  border-0">
                      
                    <input
                      style={{ fontWeight: 'bolder', letterSpacing:'2px' , fontSize:'20px'}}
                      className="border-0 px-3 pr-4 py-3  bg-white rounded text-sm  focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder={"https://tetherinvest.org/auth/register/?ref_code="+ refCode}
                      disabled
                    />
                      </div>

                      <div className="relative flex flex-col   break-wors  ml-2   ">
                      <CopyToClipboard text={"https://tetherinvest.org/auth/register/?ref_code="+ refCode}
                                onCopy={() => {
                                    setCopied(true)
                                    setTimeout(() => {
                                    setCopied(false)
                                }, 2000)}}>
                                <button id="myBtn" 
                                    
                                    className="bg-lightBlue-500 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    >
                                         <i className="fa fa-copy mr-1"></i> 
                                        {copied ? 'copied' : 'copy referral link'}
                                </button>
                        </CopyToClipboard>
                      </div>
                  </div>
                  </div>
                <div>
                    <div className="flex flex-wrap">
                    {/* Referrals */}
                        <div className="relative flex flex-col min-w-0 break-words w-full md:w-4/12 lg:w-4/12 xl:w-4/12 mb-6 shadow-lg rounded-lg  border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                           
         
         
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                       <h3 style={{ fontWeight:'bolder' }}>Your Referrals</h3>
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            
                            </div>
                        </div>
                        </div>
                        <div className="block w-full overflow-x-auto">
                        {/* Projects table */}
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                            <tr>
                                <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                    ? " border-blueGray-100"
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                                >
                                user email
                                </th>
                              
                                
                            </tr>
                            </thead>
                            <tbody>
                            {referrals && referrals.length > 0
                            ? referrals.map((data, index) => 
                            (
                                <tr key={index}>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                
                                <span
                                    className={
                                    "ml-3 mr-4 font-bold " 
                                    }
                                    style={{ color : 'green', letterSpacing:'1px' }}
                                ><span className="mr-2 p-2" style={{ border: '1px solid green' }}>{index+1}</span>
                                  {data.email}
                                </span>
                                </th>
                            </tr>
                            ))
                            :    (
                                <div>
                                     <p style={{ letterSpacing : '1px' , color:'#b5194a', fontWeight:'bolder'}}><i class="fas fa-info-circle"></i>  you have no referrals , share your referral link and get referrals</p>
                                </div>
                            )
                                
                            }
                           
                            
                            
                            
                            </tbody>
                        </table>
                        </div>
                        </div>
                        </div>

                        
                    {/* referral gains */}
                        <div className="relativeflex flex-col min-w-0 break-words w-full md:w-8/12 lg:w-8/12 xl:w-8/12 mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                           
         
         
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                       <h3 style={{ fontWeight:'bolder' }}>Your Gains From Referrals</h3>
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            
                            </div>
                        </div>
                        </div>
                        <div className="block w-full overflow-x-auto">
                        {/* Projects table */}
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                            <tr>
                                <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                    ? " border-blueGray-100"
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                                >
                                user email
                                </th>


                                <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                    ? " border-blueGray-100"
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                                >
                                Amount
                                </th>


                                <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                    ? " border-blueGray-100"
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                                >
                                gain
                                </th>

                                <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                    ? " border-blueGray-100"
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                                >
                                coin
                                </th>


                                <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                    ? " border-blueGray-100"
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                                >
                                status 
                                </th>
                              
                                
                            </tr>
                            </thead>
                            <tbody>
                            {referralGains && referralGains.length > 0
                            ? referralGains.map((data, index) => 
                            (
                                <tr key={index}>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                
                                <span
                                    className={
                                    "ml-3 mr-4 font-bold " 
                                    }
                                    style={{ color : 'green', letterSpacing:'1px' }}
                                ><span className="mr-2 p-2" style={{ border: '1px solid green' }}>{index+1}</span>
                                  {data.referred_email}
                                </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {data.amount.length > 3 
                                    ? (
                                    <p style={{ fontSize : '10px' }}>{data.amount.substr(0,13)}</p>
                                    )
                                    :  <p>{data.amount.substr(0,13)}</p>
                                }
                                </td>

                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {data.gain.length > 3 
                                    ? (
                                    <p style={{ fontSize : '10px' }}>{data.gain.substr(0,13)}</p>
                                    )
                                    :  <p>{data.gain.substr(0,13)}</p>
                                }
                                </td>

                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {data.coin === '0' ? 'USDT' : 'BTC'}
                                </td>

                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                 <div><i className="fas fa-circle text-green-500 mr-2" style={{color : 'green'}}></i>approved</div>
                                </td>
                            </tr>
                            ))
                            :  
                            (
                                null
                            )
                                
                            }
                           
                            
                            
                            </tbody>
                        </table>
                          {referralGains.length === 0
                          ?(
                            <div>
                            <p style={{ letterSpacing : '1px' , color:'#95439f', fontWeight:'bolder'}}><i class="fas fa-info-circle"></i>  you have no referrals gains , share your referral link and get 5% on your refs deposit(credit)</p>
                            </div>
                          )
                          : null
                          }
                        </div>
                        </div>
                        </div>
                    </div>
                      





                </div>
                </div> 
                </div>       
            )
            : null
        
            }
        </div>
    )
    
    }
         </div>
     )
     }
    </>
  );
}
