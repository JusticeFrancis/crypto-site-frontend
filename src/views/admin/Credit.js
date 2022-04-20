import {React,useState} from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

import AdminTableDropdown from "components/Dropdowns/AdminTableDropdown.js";

export default function Credit(props) {
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


    const[transactions , setTransactions] = useState([])
    const[screenshots , setScreenshot] = useState([])
    
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
        getTransactions()
        getScreenshots()
        if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
            // true for mobile device
            setMobile(true);
          }else{
            // false for not mobile device
            setMobile(false);
          }
    })

    //approve transaction
    const approveTransaction = async(transaction_id, email)=>{
        setLoader(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body : JSON.stringify({ transaction_id : transaction_id, admin : user.email, email : email, type : 'credit'})
        };
        const response = await fetch('http://localhost:7000/admin/approve_transaction', requestOptions)
        const res = await response.json()
        
    
        if(res.status === 'failed'){
            setMsg(res.msg)
            setLoader(false)
            console.log(res)
            return
            
        }
        else{
            setLoader(false)
            window.location.reload()
            return
            
        }
    }

    //get transactions
    const getTransactions = async()=>{
        setLoader(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body : JSON.stringify({ email : user.email})
        };
        const response = await fetch(backend+'/admin/transactions/credit', requestOptions)
        const res = await response.json()
        
    
        if(res.status === 'failed'){
            setLoader(false)
            console.log(res)
            return
            
        }
        else{
            setLoader(false)
            setTransactions(res.data)
            return
            
        }
    }

     //get transactions
     const getScreenshots = async()=>{
        setLoader(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body : JSON.stringify({ email : user.email})
        };
        const response = await fetch(backend+'/admin/screenshots', requestOptions)
        const res = await response.json()
        
    
        if(res.status === 'failed'){
            setLoader(false)
            return
            
        }
        else{
            setLoader(false)
            setScreenshot(res.data)
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
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg  border-0" >
                <div className="px-4 md:px-10 mx-auto w-full">
                <div>
                    {/* Card stats */}
                    <div className="flex flex-wrap">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div className="rounded-t bg-white mb-0 px-6 py-6">
                           
         
         
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                       <h3 style={{ fontWeight:'bolder' }}>Credit Transactions</h3>
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                "font-semibold text-lg " +
                                (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                Transaction history
                            </h3>
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
                                Transaction Id
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
                                Type
                                </th>
                                <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                    ? " border-blueGray-100"
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                                >
                                Status
                                </th>
                                <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                    ? " border-blueGray-100"
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                                >
                                Completion
                                </th>
                                <th
                                className={
                                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                                    (color === "light"
                                    ? " border-blueGray-100"
                                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                                }
                                ></th>
                            </tr>
                            </thead>
                            <tbody>
                            {transactions && transactions.length > 0
                            ? transactions.map((data, index) => 
                            (
                                <tr key={index}>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                
                                <span
                                    className={
                                    "ml-3 mr-4 font-bold " 
                                    }
                                    style={{ color : 'green', letterSpacing:'1px' }}
                                ><span className="mr-2 p-2" style={{ border: '1px solid green' }}>{index+1}</span>
                                  {data._id}
                                </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {data.amount} {' '}
                                {data.coin === '0'? 'usdt' : 'BTC'}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {'credit'}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {data.status === '0' ? (
                                    <div><i className="fas fa-circle text-red-500 mr-2"></i>not approved</div>
                                ) :  null}
                                {data.status === '1' ? (
                                    <div><i className="fas fa-circle text-blue-500 mr-2" style={{color : 'darkblue'}}></i>sent screenshot</div>
                                ) :  null}
                                {data.status === '2' ? (
                                    <div><i className="fas fa-circle text-green-500 mr-2" style={{color : 'green'}}></i>approved</div>
                                ) :  null}
                                </td>


                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                    <span className="mr-2">
                                        {data.status === '0'? '30%': null}
                                        {data.status === '1'? '60%': null}
                                        {data.status === '2'? '100%': null}
                                    </span>
                                    <div className="relative w-full">
                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                    {data.status === '0' ? (
                                   <div
                                   style={{ width: "30%" }}
                                   className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                   ></div>
                                    ) :  null}
                                    {data.status === '1' ? (
                                        <div
                                        style={{ width: "60%", backgroundColor:'darkblue' }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                        ></div>
                                    ) :  null}
                                    {data.status === '2' ? (
                                    <div
                                    style={{ width: "100%", backgroundColor:'green' }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                    ></div>
                                    ) :  null}
                                       
                                    </div>
                                    </div>
                                </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">



                                {data.status === '1'
                                ?(
                                    <div>
                                        {screenshots && screenshots.length > 0
                                ? screenshots.map((elem, index) => 
                                (
                                    <div> 
                                        {elem.transaction_id === data._id
                                        ?(
                                            <div>
                                                <button id="myBtn" onClick={(e)=>{
                                                openModal(data._id)
                                                setTransactionId(data._id)
                                            }}
                                                className="bg-lightBlue-500     text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline mr-1 ease-linear transition-all duration-150"
                                                type="button"
                                                >
                                                screenshot
                                            </button>

                                            <button id="myBtn" style={{ backgroundColor: 'green' }} onClick={(e)=>{
                                                approveTransaction(data._id, data.email)
                                                setTransactionId(data._id)
                                            }}
                                                className="bg-lightBlue-500  ml-2    text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline mr-1 ease-linear transition-all duration-150"
                                                type="button"
                                                >
                                                approve
                                            </button>



                                            
                                                <div id={"myModal-"+data._id} class="modal">
                                                <div class="modal-content text-center">
                                            {loader === false
                                            ? null
                                                :(
                                                    <div className="text-center">
                                                    <i className="fas fa-spinner fa-3x fa-pulse"></i>
                                                    </div>
                                                )
                                                }
                                                <p style={{ color : 'red' }}>{msg}</p>
                                                <span class="close" onClick={()=>{
                                                    closeModal(data._id)
                                                    setTransactionId('')
                                                }}>&times;</span>
                                                    <form id="upload_form"   encType="multipart/form-data">
                                                        <p style={{ marginTop: '10px', fontWeight: 'bolder' }}>{elem._id}</p>
                                                        <div className="text-center">
                                                        <img style={{ margin : 'auto' }} src={backend+'/ftp/screenshots/'+elem.name}/>
                                                        </div>
                                                    </form>
                                                </div>


                                                 </div>
                                            </div>
                                        )
                                        :null
                                        }

                                        {data.status === '0'
                                        ?(
                                            <div>
                                                awaiting screenshot
                                            </div>
                                        )
                                        :null
                                        }


                                    </div>
                                )):
                                null
                                }
                                    </div>
                                )
                                : null
                                }

                               
                                </td>
                            </tr>
                            ))
                            :    null
                                
                            }
                           
                            
                            
                            
                            </tbody>
                        </table>
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
