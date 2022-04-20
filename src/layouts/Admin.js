import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Settings from "views/admin/Settings.js";
import Credit from "views/admin/Credit";
import Debit from "views/admin/Debit";

export default function Admin() {
  const appName ='Invest App'
  //api route
  const backend = 'https://crypto-site-backend.herokuapp.com'
  window.addEventListener('load',(event)=>{
    //check if user is auth
      const appUser = sessionStorage.getItem('appUser')
      const res = JSON.parse(appUser)
      if(res.user_type === '0'){
        window.location.href = '/user'
      }
    })


  //get current user details

  const item =  sessionStorage.getItem('appUser')
  const user = JSON.parse(item)
  
  return (
    <>
       <AdminNavbar fixed appName={appName} />
        {/* Header */}
       {/*  <HeaderStats /> */}
       <section className="header relative pt-16 items-center  h-screen max-h-860-px">
        <div className="container mx-auto items-center  flex-wrap">
          <div className="w-full md:w-12/12 lg:w-12/12 xl:w-12/12 px-4">
            <div className=" sm:pt-0" style={{ marginTop:'20px' }}>
              <Switch>
                <Route path="/admin/credit" exact>
                  <Credit 
                  user={user}
                  backend = {backend}
                  ></Credit>
                </Route>
                <Route path="/admin/debit" exact>
                  <Debit 
                  user={user}
                  backend = {backend}
                  ></Debit>
                </Route>
                <Redirect from="/admin" to="/admin/credit" />
              </Switch>
            </div>
          </div>
         </div>
        </section>   
    </>
  );
}
