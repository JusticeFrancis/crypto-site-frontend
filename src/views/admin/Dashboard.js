import {React,useState} from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

import AdminTableDropdown from "components/Dropdowns/AdminTableDropdown.js";

export default function Dashboard({color}) {
  color = 'light'
  const [step , setStep] = useState(0)
    const [coin , setCoin] = useState('USDT')
    const[amount , setAmount] = useState(0)
    const[email, setEmail] = useState('')
    const[checked , setChecked] = useState(false)
    const[info , setInfo] = useState(true)
  

    const nextStep =()=>{
         setStep(step + 1)
    }
    const prevStep =()=>{
        setStep(step - 1)
    }
  return (
    <>
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
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3
                                className={
                                "font-semibold text-lg " +
                                (color === "light" ? "text-blueGray-700" : "text-white")
                                }
                            >
                                All Transactions
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
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                <img
                                    src={require("assets/img/bootstrap.jpg").default}
                                    className="h-12 w-12 bg-white rounded-full border"
                                    alt="..."
                                ></img>{" "}
                                <span
                                    className={
                                    "ml-3 font-bold " 
                                    }
                                    style={{ color : 'green', letterSpacing:'1px' }}
                                >
                                    hex-32487idsoijdoic
                                </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                20 {coin}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                credit
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-circle text-orange-500 mr-2"></i> not confirmed
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                    <span className="mr-2">60%</span>
                                    <div className="relative w-full">
                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                        <div
                                        style={{ width: "60%" }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                        ></div>
                                    </div>
                                    </div>
                                </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                action
                                </td>
                            </tr>
                            
                            <tr>
                                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                <img
                                    src={require("assets/img/sketch.jpg").default}
                                    className="h-12 w-12 bg-white rounded-full border"
                                    alt="..."
                                ></img>{" "}
                                <span
                                    className={
                                    "ml-3 font-bold " 
                                    }
                                    style={{ color : 'green', letterSpacing:'1px' }}
                                >
                                    hex-i38932ewkjdss
                                </span>
                                </th>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                $315 {coin}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                debit
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-circle text-red-500 mr-2"></i> not approved
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                    <span className="mr-2">73%</span>
                                    <div className="relative w-full">
                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                        <div
                                        style={{ width: "73%" }}
                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                        ></div>
                                    </div>
                                    </div>
                                </div>
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                <AdminTableDropdown></AdminTableDropdown>
                                </td>
                            </tr>
                            
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
    </>
  );
}
