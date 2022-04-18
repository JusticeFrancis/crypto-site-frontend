import {React, useState} from "react";
import "assets/styles/modal.css";

// components

import CardCredit from "components/Cards/CardCredit";
import CardStats from "components/Cards/CardStats";
import FooterAdmin from "components/Footers/FooterAdmin";

import TableDropdown from "components/Dropdowns/TableDropdown.js";
import { ImageWithoutForm } from "./ImageWithoutForm";

export  default function Transactions(props) {
    const {user , backend} = props
     const color = ''
    
    const [step , setStep] = useState(0)
    const [coin , setCoin] = useState('USDT')
    const[amount , setAmount] = useState(0)
    const[email, setEmail] = useState('')
    const[checked , setChecked] = useState(false)
    const[info , setInfo] = useState(true)
    const [loader , setLoader] = useState(false)
    const [transactionId , setTransactionId] = useState('')
    const[msg, setMsg] = useState('')
    const [mobile, setMobile] = useState(false)

    const[creditTransactions , setCreditTransactions] = useState([])
    const[debitTransactions , setDebitTransactions] = useState([])



    window.addEventListener('load',(event)=>{
        getCreditTransactions()
        getDebitTransactions()

        window.mobileCheck = function() {
            let check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
            setMobile(check)
            console.log({check : check})
            return;
          };
    })

    //get user credit transaction
    const getCreditTransactions = async()=>{
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        };
        const response = await fetch(backend+'/transactions/credit/user/'+user.email, requestOptions)
        const res = await response.json()
        
    
        if(res.status === 'success'){
           setCreditTransactions(res.data)
           console.log({credit : creditTransactions})
            return
              
        }
        else{
            setLoader(false)
            return
        }
    }



    //get user debit transaction
    const getDebitTransactions = async()=>{
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
        };
        const response = await fetch(backend+'/transactions/debit/'+user.email, requestOptions)
        const res = await response.json()
        
    
        if(res.status === 'success'){
           setDebitTransactions(res.data)
           console.log(debitTransactions)
            return
              
        }
        else{
            setLoader(false)
            return
        }
    }
  

    const nextStep =()=>{
         setStep(step + 1)
    }
    const prevStep =()=>{
        setStep(step - 1)
    }

    const changeCheckedState = ()=>{
        const importantInfo = document.querySelector['#importantInfo']
        if(checked ===false ){
            console.log('checked')
            setInfo(false)
            setChecked(true)

        }
        else{
           setChecked(false)
           setInfo(true)
           console.log('not')
        }
    }





   

    // When the user clicks on the button, open the modal
    function openModal(id) {
    console.log(id)
    let modal = document.getElementById("myModal-"+id);
    modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    function closeModal(id) {
    let modal = document.getElementById("myModal-"+id);
    modal.style.display = "none";
    }

    
  



     function onImageLoad(e){
        console.log('onImageLoad', e.target.files[0]);
        uploadForm(e.target.files[0]);
    }

    const uploadForm = async(file)=>{
        setLoader(true)
        let form = new FormData(document.getElementById('upload_form'));
        form.append('screenshot', file);
        form.append('transaction_id', transactionId)
        console.log(form)
        const response = await fetch(backend+'/send_screenshot', {
          method: 'POST',
          body: form
        })
        const res = await response.json()
        console.log(res)
        if(res.status === 'failed'){
            setMsg(res.msg)
            setLoader(false)
        }
        else{
            closeModal(transactionId)
            setLoader(false)
            setMsg('')
        }



    }

    

   

        
  
  return (
    <>

        {mobile === false ?
        (
            <p style={{ color: 'red' }}>kindly set browser to desktop mode to view transactions</p>
        )
        :
        ( 
            <div>
                { step === 0
    ?(
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg  border-0" >
        <div className=" w-full">
        <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                   
 
                   {/* credit transactions */}
 
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
                            {creditTransactions && creditTransactions.length > 0
                            ? creditTransactions.map((data, index) => 
                            (
                                <tr key={index}>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                
                                <span
                                    className={
                                    "ml-3 mr-4 font-bold " 
                                    }
                                    style={{ color : 'green', letterSpacing:'1px' }}
                                >
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
                                <button id="myBtn" onClick={(e)=>{
                                    openModal(data._id)
                                    setTransactionId(data._id)
                                }}
                                    className="bg-lightBlue-500     text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline mr-1 ease-linear transition-all duration-150"
                                    type="button"
                                    >
                                    upload a screenshot to complete transaction
                                </button>
                               {loader === false
                               ?(
                                <div id={"myModal-"+data._id} class="modal">

                                <div class="modal-content text-center">
                                <p style={{ color : 'red' }}>{msg}</p>
                                <span class="close" onClick={()=>{
                                    closeModal(data._id)
                                    setTransactionId('')
                                }}>&times;</span>
                                <ImageWithoutForm onImageLoad={(e)=>onImageLoad(e)} />
                                    <form id="upload_form"   encType="multipart/form-data">
                                        <p style={{ marginTop: '10px', fontWeight: 'bolder' }}>{data._id}</p>
                                    </form>
                                </div>

                                </div>
                               )
                               :(
                                <div className="text-center">
                                <i className="fas fa-spinner fa-3x fa-pulse"></i>
                                 </div>
                               )
                               }
                                </td>
                            </tr>
                            ))
                            :    null
                                
                            }
                           
                            
                            
                            
                            </tbody>
                        </table>
                        </div>


                      



                       {/* debit transaction */}
                           
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                       <h3 style={{ fontWeight:'bolder' }}>Debit Transactions</h3>
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
                            {debitTransactions && debitTransactions.length > 0
                            ? debitTransactions.map((data, index) => 
                            (
                                <tr key={index}>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                <span
                                    className={
                                    "ml-3 mr-4 font-bold " 
                                    }
                                    style={{ color : 'green', letterSpacing:'1px' }}
                                >
                                  {data._id}
                                </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {data.amount} {' '}
                                {data.coin === '0'? 'usdt' : 'BTC'}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {'debit'}
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
                                        {data.status === '0'? '50%': null}
                                        {data.status === '2'? '100%': null}
                                    </span>
                                    <div className="relative w-full">
                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                    {data.status === '0' ? (
                                   <div
                                   style={{ width: "50%" }}
                                   className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                   ></div>
                                    ) :  null}
                                    
                                    {data.status === '1' ? (
                                    <div
                                    style={{ width: "100%", backgroundColor:'green' }}
                                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                    ></div>
                                    ) :  null}
                                       
                                    </div>
                                    </div>
                                </div>
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




    
    




    <FooterAdmin></FooterAdmin>
    
    </>
  );
}