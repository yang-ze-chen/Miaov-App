import React,{useState} from "react"
// import Class from './view/class/class'
// import Teacher from './view/teacher/teacher'
// import Home from "./view/home/home.js"
// import Login from './view/login/login.js'
import Hometop from './view/home-top/h-top'
import {Route,Switch,Redirect} from 'react-router-dom'

import {router} from './router/router'
function App() {
  return (
    <div className="App">
      <Hometop />
      <Switch>
            {
              router.map((item,index)=>{
                return(
                  <Route
                    key={index}
                    path={item.path}
                    render={item.render}
                    exact={item.exact}
                  ></Route>
                )
              })
            }
          </Switch>
      {/* <Switch>
      <Route path='/' exact render={()=>{
            return <Redirect to='/home' ></Redirect>
          }} />
      <Route path='/home' exact render={(props)=>{
        return <Home {...props} txt={txt} setTxt={setTxt}></Home>
      }} />
      <Route path='/login' exact render={(props)=>{
        return <Login {...props}></Login>
      }} />
      <Route path='/teacher' exact render={(props)=>{
        return <Teacher {...props}></Teacher>
      }} />
      <Route path='/class' exact render={(props)=>{
        return <Class {...props}></Class>
      }} />
      </Switch> */}
      
    </div>
  );
}

export default App;
