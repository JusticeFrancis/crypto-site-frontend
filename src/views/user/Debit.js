import {React, useState} from "react";

// components

import CardCredit from "components/Cards/CardCredit";
import CardStats from "components/Cards/CardStats";
import FooterAdmin from "components/Footers/FooterAdmin";

export default function Debit(props) {
    const{user,backend}= props
    const [step , setStep] = useState(0)
    const [coin , setCoin] = useState('')
    const[amount , setAmount] = useState(0)
    const[checked , setChecked] = useState(false)
    const[info , setInfo] = useState(true)
    const [addr, setAddr] = useState('')
    const[loader, setLoader] = useState(false)
    const [msg, setMsg] = useState('')

     //res 
     const[transactionEmail, setTransactionEmail] = useState('')
     const[transactionId, setTransactionId] = useState('')
     const[transactionStatus, setTransactionStatus] = useState('')


  

    const nextStep =()=>{
         setStep(step + 1)
    }
    const prevStep =()=>{
        setStep(step - 1)
    }



    const debit = async()=>{
        console.log('hi')
        setLoader(true)
        
        if(addr === ''){
            setMsg('your '+coin+' address is required')
            setLoader(false)
            return
        }

        let coinvalue
        if(coin ==='USDT'){
            coinvalue = '0'
        }else{
            coinvalue = '1'
        }
        if(amount <= 0 ){
            setMsg('debit transactions amount must be greater than 0')
            setLoader(false)
            return
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ amount: amount, wallet_address: addr , coin : coinvalue ,email : user.email})
        };
        const response = await fetch(backend+'/debit', requestOptions)
        const res = await response.json()
        console.log(res)

        if(res.status === 'success'){
              setTransactionEmail(res.transaction.email)
              setTransactionId(res.transaction._id)
              setTransactionStatus(res.transaction.status)
              setLoader(false)
              nextStep()
        }
        else{
            setMsg(res.msg)
            setLoader(false)
        }

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
  return (
    <>


{ step === 1
    ?(
         <div  className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-white  border-0">
                <div className="rounded-t bg-white mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className=" text-xl font-bold">{coin} withdrawal</h6>
                        <button
                        className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button"
                        >
                        <i className="fa fa-copy mr-1"></i> 
                        dashboard
                        </button>
                    </div>
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <form>
                        <h6 className=" text-sm mt-3 mb-6 font-bold uppercase">
                        Withdral Summary
                        </h6>
                        <div className="flex flex-wrap">
                       
                        <div className="text-center w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">
                            <label 
                                className="block uppercase  text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                              My {coin} wallet : {addr}

                            </label>
                           
                            </div>
                        </div>
                        <div className="text-center w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                               Transaction Id : <span style={{ color :'blueviolet' }}>{transactionId}</span>

                            </label>
                           
                            </div>
                        </div>

                        <div className="text-center w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase  text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                               Email Address : {transactionEmail}

                            </label>
                           
                            </div>
                        </div>


                        <div className="text-center w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase  text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                               Credit Amount : {amount} {coin}

                            </label>
                           
                            </div>
                        </div>
                       

                        <div className="text-center w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase  text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                               Relay type : Invoice

                            </label>
                           
                            </div>
                        </div>
                       
                        <div className="text-center w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                               Transaction type : <span style={{ color :'red' }}>
                                   {transactionStatus === '0'
                                   ? 'Not approved' : 'Approved'
                                   }
                               </span>

                            </label>
                           
                            </div>
                        </div>

                       

                        <div className="w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">
                            <button
                                className="bg-lightBlue-500 w-full    text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                >
                                <i className="fa fa-envelope mr-1"></i>
                                Mail invoice
                            </button>
                            </div>
                        </div>

                       <div>
                          <span className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          <input
                            
                            onClick={changeCheckedState}
                            type = "checkbox"
                            className="mr-2"
                            
                           />
                           important info
                          </span>
                           
                       <ul id= 'importantInfo' hidden={info}>
                           <li> <span className="block uppercase text-blueGray-600 text-xs font-bold mb-2">After sending a {coin} withdrawal , the transaction is queued </span></li>
                           <li className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Queued transactions are not yet approved, the are sent to admin for approval and {coin} dispensation</li>
                           <li className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Once admin see the transaction and agree that your wallet can fund such transaction , transaction is then approved</li>
                           <li className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Once the {coin} reaches your wallet , the transaction is finally tagged completed</li>
                           <li className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Your site wallet will edit accordingly</li>
                           <li className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Also Gas fee and recumbent fees apply</li>
                       </ul>
                       </div>
                        </div>

                        <hr className="mt-6 border-b-1 border-blueGray-300" />

                        
                    </form>
                    </div>
                </div>      
    )
    : null

    }
    




    { step === 0
    ?(
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border-0 bg-white">
                <div className="rounded-t  mb-0 px-6 py-6">
                   <div className="text-center flex justify-between">
                    <h6 className=" text-xl font-bold">Debit  {coin}</h6>
                    </div>
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0" >
                    <form>
                        <h6 className=" text-sm mt-3 mb-6 font-bold uppercase">
                        Billing Confirmation
                        <p><small style={{ color : 'red' , fontSize:'11px', textTransform:'lowercase' }} className='mb-2 lowercase'>{msg}</small></p>
                        </h6>
                        <div className="flex flex-wrap ">
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase  text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                select coin
                            </label>
                            <select
                                
                                onChange={(e)=>{setCoin(e.target.value)}}
                                className="border-0 px-3 py-3   rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            >
                                <option selected disabled>select coin for transaction</option>
                                <option  value={'USDT'} onClick={(e)=>{setCoin(e.target.value)}}>USDT</option>
                                <option value={'BTC'}  onClick={(e)=>{setCoin(e.target.value)}}>BTC</option>
                            </select>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase  text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                {coin} amount
                            </label>
                            <input
                                type="number"
                                className="border-0 px-3 py-3   bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                value = {amount}
                                onChange={(e)=>{
                                    setAmount(e.target.value)
                                }}
                            />
                            </div>
                        </div>
                    
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="relative w-full mb-3">
                            <label
                                className="block uppercase  text-xs font-bold mb-2"
                                htmlFor="grid-password"
                            >
                                {coin} address
                            </label>
                            <input
                                type="text"
                                className="border-0 px-3 py-3  rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                onChange={(e)=>{
                                    setAddr(e.target.value)
                                }}
                                placeholder={'enter your '+coin+' address'}
                            />
                            </div>
                        </div>
                        { coin === ''
                        ? null
                        : (
                            <div className="w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">
                            {loader === false
                            ?(
                                <button onClick={debit}
                                className="bg-lightBlue-500 w-full    text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                >
                                {coin} withdrawal
                                </button>
                            )

                            : 
                            (
                                <div className="text-center">
                                    <i className="fas fa-spinner fa-3x fa-pulse"></i>
                                </div>
                            )

                            }
                            </div>
                        </div>
                        )

                        }
                        </div>

                    </form>
                </div>
        </div>     
    )
    : null

    }
    

    <FooterAdmin></FooterAdmin>
    </>
  );
}