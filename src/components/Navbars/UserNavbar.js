/*eslint-disable*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
// components


export default function UserNavbar(props) {
  const{appName, color ,bgColor,switchMode, mode} = props


  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav style={{ backgroundColor: bgColor }} className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div style={{ color: color }} className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              style={{color: color }}
            >
              {appName}
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            style ={{ backgroundColor:bgColor }}
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              
              <li className="flex items-center" title="dashboard">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/user"
                >
                  <i className="text-blueGray-400 fa fa-home text-lg leading-lg " />
                  <span style={{color: color }} className="lg:hidden inline-block ml-2">Dashboard</span>
                </a>
              </li>

              <li className="flex items-center" title="credit">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/user/credit"
                >
                  <i className="text-blueGray-400 fa fa-arrow-right text-lg leading-lg " />
                  <span style={{color: color }} className="lg:hidden inline-block ml-2">Credit</span>
                </a>
              </li>

              <li className="flex items-center" title="withdraw">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/user/debit"
                >
                  <i className="text-blueGray-400 fa fa-save text-lg leading-lg " />
                  <span style={{color: color }} className="lg:hidden inline-block ml-2">Withdraw</span>
                </a>
              </li>

              <li className="flex items-center" title="transaction">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/user/transactions"
                >
                  <i className="text-blueGray-400 fa fa-paperclip text-lg leading-lg " />
                  <span style={{color: color }} className="lg:hidden inline-block ml-2">Transactions</span>
                </a>
              </li>

              <li className="flex items-center" title="settings">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/user/settings"
                >
                  <i className="text-blueGray-400 fa fa-cog text-lg leading-lg " />
                  <span style={{color: color }} className="lg:hidden inline-block ml-2">Wallet</span>
                </a>
              </li>

              

              <li className="flex items-center" title="settings" onClick={switchMode}>
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                >
                 { mode === 'Light Mode'
                 ?( <i className="text-blueGray-400 fa fa-sun text-lg leading-lg " />)
                 :( <i className="text-blueGray-400 fa fa-moon text-lg leading-lg " />)

                 }
                  <span style={{color: color }} className="lg:hidden inline-block ml-2">{mode}</span>
                </a>
              </li>

              <li className="flex items-center" title="settings">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href=""
                  onClick={()=>{
                    sessionStorage.clear()
                    window.location.href = '/'
                  }}
                >
                  <i className="text-blueGray-400 fa fa-arrow-right text-lg leading-lg " />
                  <span style={{color: color }} className="lg:hidden inline-block ml-2">Logout</span>
                </a>
              </li>

              

             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
