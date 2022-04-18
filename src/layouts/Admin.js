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

export default function Admin() {
  const appName ='Invest App'
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
                <Route path="/admin/dashboard" exact component={Dashboard} />
                <Route path="/admin/wallet" exact component={Settings} />
                <Redirect from="/admin" to="/admin/dashboard" />
              </Switch>
            </div>
          </div>
         </div>
        </section>   
    </>
  );
}
