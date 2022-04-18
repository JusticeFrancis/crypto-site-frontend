import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";

export default function Auth() {
  //auth
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [usertype , setUsertype] = useState(0)
  const [info, setInfo] = useState('')
  const[registerBtn, setRegisterBtn] = useState('disabled')
  const [btnLoading, setBtnLoading] = useState(false)
  //api route
  const backend = 'https://crypto-site-backend.herokuapp.com'


  const appName = 'Invest App'


 // registerUser
  const registerUser = async()=>{
    
    setBtnLoading(true)
    if(email === '' || password === '' || name ===''){
       setInfo('you must fill all feild below to register')
       setBtnLoading(false)
       return 
    }
    if(password.length < 6){
      setInfo('password must be atleast 6 characters')
      setBtnLoading(false)
      return
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name , email: email, password: password , user_type : usertype})
    };
    const response = await fetch(backend+'/register', requestOptions)
    const res = await response.json()
    setInfo(res.msg)
    setBtnLoading(false)
    if(res.status === 'success'){
      sessionStorage.clear('appUser')
      sessionStorage.setItem('appUser', res.newUser)
      window.location.href = '/user'
    }
  }

  //login user
  const loginUser = async()=>{
    setBtnLoading(true)
    if(email === '' || password === ''){
       setInfo('you must fill all feilds below to login')
       setBtnLoading(false)
       return 
    }
    if(password.length < 6){
      setInfo('password incorrect')
      setBtnLoading(false)
      return
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email, password: password , user_type : usertype})
    };
    const response = await fetch(backend+'/login', requestOptions)
    const res = await response.json()
    setInfo(res.msg)
    setBtnLoading(false)
    if(res.status === 'success'){
      sessionStorage.clear('appUser')
      console.log({appuser :sessionStorage.getItem('appUser')})
      sessionStorage.setItem('appUser', JSON.stringify(res.user))
      window.location.href = '/user'  
    }
  }
  return (
    <>
      <Navbar transparent appName ={appName} />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <Switch>
            <Route path="/auth/login" exact>
              <Login
              info ={info} 
              setEmail = {setEmail} 
              setPassword = {setPassword} 
              btnLoading = {btnLoading}
              loginUser = {loginUser}
              
              >

              </Login>
            </Route>
            <Route path="/auth/register" exact >
                <Register 
                info ={info} 
                setEmail = {setEmail} 
                setPassword = {setPassword} 
                setName = {setName} 
                registerUser ={registerUser}
                setRegisterBtn = {setRegisterBtn}
                registerBtn = {registerBtn}
                btnLoading = {btnLoading}
                ></Register>
            </Route>
            <Redirect from="/auth" to="/auth/login" />
          </Switch>
          <FooterSmall absolute appName={appName} />
        </section>
      </main>
    </>
  );
}
