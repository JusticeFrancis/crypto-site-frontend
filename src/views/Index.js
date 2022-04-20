/*eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";



export default function Index() {


 
  const appName = 'Tether Invest'
  const register ='/auth/register'
  const login ='/auth/login'



  return (
    <>
      <IndexNavbar fixed appName={appName} />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
                {appName} - HEY INVESTOR.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                {appName} makes the average person who wants to trade crypto
                 get involved in trading without the need for any basic knowledge or set skill. 
                 Just sit back and let your token work for you!
              </p>
              <div className="mt-12">
                <a
                  href={register}
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href={login}
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 mb-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("assets/img/pattern_react.png").default}
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Hey Investor
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                  Tether Invest makes the average person who wants to trade crypto get involved
                   in trading without the need for any basic knowledge or set skill. Just sit back and let your token work for you!.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Growth Capital
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Notus React comes with a huge number of Fully Coded CSS
                        components.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Profitable Trading
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Our analysts and expert traders have done all the technical and fundamental analysis to make sure trades are profitable.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Payment and Funds</h6>
                      <p className="mb-4 text-blueGray-500">
                      Funds are accessible for withdrawal 15 days after top up. This is to ensure the system rewards more accumulators 
                      than exit investors. 
                      <br/>
                      All withdrawals from the system are paid straight into the wallets of our clients and payments are swift
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      THE 3 & 6 MONTH PLAN
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      The 3 Month Plan is set up so that investors who want to accumulate their funds over a period 
                      of 3 months get 8% daily instead of 5% daily.
                      <br/>
                      The 6 Month Plan gives investors who want to accumulate their funds 10% daily instead of 5% or 8%
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fa fa-wallet"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Expected Returns
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      An investment of $100 gives you a return of $205.8 after 15 days <br/>
                      An investment of $1000 gives you a return of $2,058 after 15 days <br/>
                      An investment of $10000 gives you a return of $20,580 after 15 days <br/>
                      An investment of $100 with the 3 months plan gives you $8,073 <br/>
                      An investment of $1000 with the 3 months plan gives you $80,730  <br/>
                      An investment of $100 with the 6 months plan gives $651,736 <br/>
                      An investment of $1000 with the 6 months plan gives $6,517,360 <br/>
                      Investments above $1000 with the 6 months plan are not allowed! <br/>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      


      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        
      </section>
      <Footer appName={appName} />
    </>
  );
}
