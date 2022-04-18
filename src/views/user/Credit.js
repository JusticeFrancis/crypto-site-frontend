import {React, useState} from "react";

// components

import CardCredit from "components/Cards/CardCredit";
import CardStats from "components/Cards/CardStats";
import FooterAdmin from "components/Footers/FooterAdmin";
import CopyToClipboard from "react-copy-to-clipboard";

export default function Credit(props) {
    const{btc, usdt, backend , user} = props
    const [step , setStep] = useState(0)
    const [coin , setCoin] = useState('')
    const[amount , setAmount] = useState(0)
    const[checked , setChecked] = useState(false)
    const[info , setInfo] = useState(true)
    const [msg, setMsg] = useState('')
    const [copied, setCopied] = useState(false)
    const[loader, setLoader] = useState(false)
    const[addr ,setAddr] = useState('')
    window.addEventListener('load',(event)=>{
        if(coin === '0'){
            setAddr('TFLXq98GfPTirMeXEHcQjBKVmT2Ss4M27j')
        }else{
            setAddr('3Pr7Qq1iD2hxAAjLZehzheha3QXtTSTKPy')
        }
    })

    //res 
    const[transactionEmail, setTransactionEmail] = useState('')
    const[transactionId, setTransactionId] = useState('')
    const[transactionStatus, setTransactionStatus] = useState('')


    const highlight = ()=>{
        const div = document.querySelector['#select']
        console.log('hi')
    }

    const nextStep =()=>{
         setStep(step + 1)
    }
    const prevStep =()=>{
        setStep(step - 1)
    }

    const credit = async()=>{
        setLoader(true)
        
        let coinvalue
        if(coin ==='usdt'){
            coinvalue = '0'
        }else{
            coinvalue = '1'
        }
        if(amount <= 0 ){
            setMsg('credit transactions amount must be greater than 0')
            setLoader(false)
            return
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ amount: amount, wallet_address: addr , coin : coinvalue ,email : user.email})
        };
        const response = await fetch(backend+'/credit', requestOptions)
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
            console.log('error')
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


{ step === 2
    ?(
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg  border-0">
         
            <div className=" md:px-10 mx-auto w-full">
            <div>
                {/* Card stats */}
                <div className="flex flex-wrap">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg  border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className=" text-xl font-bold">Credit  {coin}</h6>
                            <CopyToClipboard text={addr}
                                onCopy={() => setCopied(true)}>
                                <button
                                className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                >
                                <i className="fa fa-copy mr-1"></i> 
                                {copied ? 'copied' : 'copy '+ coin +' address to clipboard'}
                                
                                </button>
                                </CopyToClipboard>
                        </div>
                        </div>
                        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>
                            <h6 className=" text-sm mt-3 mb-6 font-bold uppercase">
                            Billing Payment
                            </h6>
                            <div className="flex flex-wrap">
                        
                            <div className="text-center w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                <label 
                                    className="block uppercase  text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                {coin} wallet : {addr}

                                </label>
                            
                                </div>
                            </div>
                            <div className="text-center w-full lg:w-12/12 px-4">
                                <div className="relative w-full mb-3">
                                <label
                                    className="block uppercase  text-xs font-bold mb-2"
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
                                    className="block uppercase  text-xs font-bold mb-2"
                                    htmlFor="grid-password"
                                >
                                Transaction type : <span style={{ color :'red' }}>
                                    {transactionStatus === '0' 
                                    ?'awaiting confirmation'
                                    :'sent'
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
                            <span className="block uppercase  text-xs font-bold mb-2">
                            <input
                                
                                onClick={changeCheckedState}
                                type = "checkbox"
                                className="mr-2"
                                
                            />
                            important info
                            </span>
                            
                        <ul id= 'importantInfo' hidden={info}>
                            <li> <span className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Send {coin} to the {coin} wallet address above</span></li>
                            <li className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Make a screenshot of the transaction from your wallet</li>
                            <li className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Visit "transactions page"</li>
                            <li className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Search transactions with the "transaction id" above</li>
                            <li className="block uppercase text-blueGray-600 text-xs font-bold mb-2">send screenshot and update transaction</li>
                            <li className="block uppercase text-blueGray-600 text-xs font-bold mb-2">Admin will recieve your transaction and confirm accordingly within 24hrs</li>
                        </ul>
                        </div>
                            </div>


                            
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            </div> 
         
          
        </div>       
    )
    : null

    }
    




    { step === 1
    ?(
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6   rounded-lg  border-0">
        <div className=" md:px-10 mx-auto w-full ">
        <div>
            {/* Card stats */}
            <div className="flex flex-wrap ">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg  border-0 bg-white">
                <div className="rounded-t  mb-0 px-6 py-6">
                    <div className="text-center flex justify-between">
                        <h6 className="text-blueGray-700 text-xl font-bold">Credit  {coin}</h6>
                        <button
                        className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={prevStep}
                        >
                        go back
                        </button>
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
                                {coin} amount
                            </label>
                            <input
                                type="number"
                                className="border-0 px-3 py-3 placeholder-blueGray-300  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
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
                               billing wallet address
                            </label>
                            <input
                                type="email"
                                className="border-0 px-3 py-3 placeholder-blueGray-300  bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                disabled
                                value={addr}
                                
                            />
                            </div>
                        </div>
                        <div className="w-full lg:w-12/12 px-4">
                            <div className="relative w-full mb-3">
                            { loader === false
                            ?(
                                <button onClick={credit}
                                className="bg-lightBlue-500 w-full    text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                                type="button"
                                >
                                credit {coin}
                            </button>
                            )
                            :(
                               <div className="text-center">
                                    <i className="fas fa-spinner fa-3x fa-pulse"></i>
                               </div>
                            )

                            }
                            </div>
                        </div>
                        </div>


                        
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </div> 
        </div>       
    )
    : null

    }
    {
        step === 0 
        ?(

            /* bg-lightBlue-600 */
        <div className="relative  md:pt-32 pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
            <div>
                {/* Card stats */}
                <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 xl:w-6/12 px-4"  id="select" onFocus={highlight} onClick={()=>{
                    setCoin('usdt')
                    nextStep()
                }} >
                    <CardStats
                    statSubtitle="Invest USDT"
                    statTitle={"1USDT = $"+usdt.price_24h}
                    statArrow="up"
                    statPercent={"volume = +"+usdt.volume_24h}
                    statPercentColor="text-emerald-500"
                    statDescripiron="Since last week"
                    statIconName="far fa-chart-bar"
                    statIconColor="bg-red-500"
                    />
                </div>
                <div className="w-full lg:w-6/12 xl:w63/12 px-4" onClick={()=>{
                    setCoin('btc')
                    nextStep()
                }}>
                    <CardStats
                    statSubtitle="Invest Btc"
                    statTitle={"BTC = $"+btc.price_24h}
                    statArrow="up"
                    statPercent={"volume = +"+btc.volume_24h}
                    statPercentColor="text-emerald-500"
                    statDescripiron="Since last week"
                    statIconName="fas fa-chart-pie"
                    statIconColor="bg-orange-500"
                    />
                </div>
               
                </div>
            </div>
            </div>
        </div>
        )
        : null
    }

    <FooterAdmin></FooterAdmin>
    </>
  );
}