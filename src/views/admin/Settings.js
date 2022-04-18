import {React,useState} from "react";

// components

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import FooterAdmin from "components/Footers/FooterAdmin";

export default function Settings() {
  const [wallet , setWallet] = useState(0)
  //0 for main, 1 for arbit

  const SwitchWallet = ()=>{
      if(wallet === 0){
        setWallet(1)
      }
      else{
        setWallet(0)
      }
  }
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6  rounded-lg  border-0" >
        <div className=" md:px-10  w-full">
        <div>
            {/* Card stats */}
            <div className="flex flex-wrap"></div>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-4/12  mx-auto">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                        <div className="px-6">
                          <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 flex justify-center pb-2">
                              <div className="relative">
                                <img
                                  alt="..."
                                  src={require("assets/img/angular.jpg").default}
                                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                />
                              </div>
                            </div>
                            <div className="w-full px-4 text-center" style={{ marginTop:'90px' }}>
                              <div>
                                  <span onClick={SwitchWallet} className="p-2 m-2" style={{ border :'1px solid green', borderRadius:'5px' }}>
                                    <i style={{ color :'green' }} className="fa fa-wallet"></i> {wallet === 0 ? 'Main' : 'Arbit'}
                                  </span>
                                  <p><small>click to see {wallet === 0 ? 'Arbit' : 'Main'} wallet</small></p>
                                  
                              </div>
                            {wallet === 0 
                            ?(
                              <div className="flex justify-center py-4 lg:pt-4 ">
                              <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                  22
                                </span>
                                <span className="text-sm text-blueGray-400">TXNS</span>
                              </div>
                              <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                  10
                                </span>
                                <span className="text-sm text-blueGray-400">USDT</span>
                              </div>
                              <div className="lg:mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                  89
                                </span>
                                <span className="text-sm text-blueGray-400">BTC</span>
                              </div>
                            </div>
                            )

                            : (
                              <div className="flex justify-center py-4 lg:pt-4 ">
                              <div className="mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                  10
                                </span>
                                <span className="text-sm text-blueGray-400">USDT</span>
                              </div>
                              <div className="lg:mr-4 p-3 text-center">
                                <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                  89
                                </span>
                                <span className="text-sm text-blueGray-400">BTC</span>
                              </div>
                            </div>
                            )

                            }
                            </div>
                            

                            
                          </div>

                          
                          <div className="text-center mt-12">
                            <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                              Jenna Stones
                            </h3>
                            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                              <i className="fa fa-envelope mr-2 text-lg text-blueGray-400"></i>{" "}
                              jena@gmail.com
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                   
                </div>
            </div>
      </div>
      </div>

      <FooterAdmin></FooterAdmin>
    </>
  );
}
