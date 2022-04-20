/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components


export default function AdminNavbar(props) {
  const{appName} = props
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              to="/"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
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
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
               <li className="flex items-center" title="dashboard">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/admin"
                >
                  <i  className="text-blueGray-400 fa fa-credit-card text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">credit transactions</span>
                </a>
              </li>
              
              <li className="flex items-center" title="dashboard">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/admin/debit"
                >
                  <i className="text-blueGray-400 fa fa-paperclip text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">debit transactions</span>
                </a>
              </li>

              <li className="flex items-center" title="dashboard">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="/user"
                >
                  <i className="text-blueGray-400 fa fa-home text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">User dashboard</span>
                </a>
              </li>

            

              

             
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
