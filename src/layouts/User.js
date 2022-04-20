import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/UserSidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import UserNavbar from "components/Navbars/UserNavbar";

// views

import Dashboard from "views/user/Dashboard.js";
import Credit from "views/user/Credit";
import Debit from "views/user/Debit";
import Transactions from "views/user/Transactions";
import Settings from "views/user/Settings";





export default function User() {
  const [btc , setBtc] = useState({
    price_24h : 12303,
    volume_24h : 12783
  })
  const [usdt , setUsdt] = useState({
    price_24h : 'loading',
    volume_24h : 'loading'
  })
  const [eth , setEth] = useState({
    price_24h : 'loading',
    volume_24h : 'loading'
  })
  const[admin , setAdmin] = useState(false)
 

   //api route
   const backend = 'https://crypto-site-backend.herokuapp.com'
   


   window.addEventListener('load', (event)=>{
    getBtcPrice()
    getUsdtPrice() 
    getEthPrice()
   })


  const getBtcPrice = async()=>{
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch("https://api.blockchain.com/v3/exchange/tickers/BTC-USD", requestOptions)
  const res = await response.json()
  setBtc(res)
  }

 


  const getUsdtPrice = async()=>{
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch("https://api.blockchain.com/v3/exchange/tickers/USDT-USD", requestOptions)
    const res = await response.json()
    setUsdt(res)
  }



  const getEthPrice = async()=>{
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
  };
  const response = await fetch("https://api.blockchain.com/v3/exchange/tickers/ETH-USD", requestOptions)
  const res = await response.json()
  setEth(res)


  }

 




 window.addEventListener('load',(event)=>{
    //check if user is auth
      const appUser = sessionStorage.getItem('appUser')
      if(!appUser){
        window.location.href = '/auth/login'
      }
      const res = JSON.parse(appUser)
      if(res.user_type === '0'){
        setAdmin(false)
      }
      else{
        setAdmin(true)
      }
    })


  //get current user details

  const item =  sessionStorage.getItem('appUser')
  const user = JSON.parse(item)
  


  const appName = 'Tether Invest'
  let data = JSON.parse(localStorage.getItem('data'))
  let datacolor , databgColor , datamode
  if(data === null){
    datacolor = ''
    databgColor = ''
    datamode = 'Light mode'
  }else{
    datacolor = data.color
    databgColor = data.bgColor
    datamode = data.mode
  }
  const [color , setColor] = useState(datacolor)
  const [bgColor , setBgColor] = useState(databgColor)
  
  
  const[mode , setMode] = useState(datamode)
  



  

  

  const switchMode = ()=>{
    if(mode === 'Light Mode'){
      localStorage.clear('data')
      localStorage.setItem('data',JSON.stringify({'mode' : 'Dark Mode', 'color': '#59dd59eb','bgColor':'#24243a'}))
      console.log(localStorage)
      setMode('Dark Mode')
      setColor('#59dd59eb')
      setBgColor('#24243a')
      
      
    }
    else{
      
      localStorage.clear('data')
      console.log(localStorage)
      localStorage.setItem('data',JSON.stringify({'mode' : 'Light Mode', 'color': '','bgColor':''}))
      setMode('Light Mode')
      setColor('')
      setBgColor('')
    }
  }



  //fetch code
  /* const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ date: date , email: email })
};
console.log(requestOptions)
const response = await fetch('https://liuyangtong.herokuapp.com/appointment/create', requestOptions)
const res = await response.json() */


  

  return (
    <>
      
      <UserNavbar fixed admin = {admin} color={color} bgColor={bgColor} mode={mode} switchMode={switchMode} appName={appName} />
        {/* Header */}
       {/*  <HeaderStats /> */}
       <section style ={{ backgroundColor:bgColor }}  className="header relative pt-16 items-center">
        <div className="container mx-auto items-center  flex-wrap">
          <div className="w-full md:w-12/12 lg:w-12/12 xl:w-12/12 px-4">
            <div className=" sm:pt-0" style={{ marginTop:'20px' }}>
              <Switch>
                <Route path="/user/dashboard" exact>
                  <Dashboard
                  btc = {btc}
                  usdt = {usdt}
                  eth = {eth}
                  ></Dashboard>
                </Route>
                <Route path="/user/credit" exact >
                  <Credit
                  btc = {btc}
                  usdt = {usdt}
                  backend = {backend}
                  user = {user}
                  ></Credit>
                </Route>
                <Route path="/user/debit" exact>
                  <Debit 
                  backend = {backend}
                  user = {user}
                  ></Debit>
                </Route>
                <Route path="/user/transactions" exact>
                  <Transactions
                   backend = {backend}
                   user = {user}
                  ></Transactions>
                </Route>
                <Route path="/user/settings" exact>
                  <Settings
                  backend = {backend}
                  user = {user}
                  ></Settings>
                  </Route> 
                <Redirect from="/user" to="/user/dashboard" />
              </Switch>
            </div>
          </div>
         </div>
        </section>   
        
        
       
    </>
  );
}
