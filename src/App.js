import React,{useState} from "react"
import Home from "./view/home/home.js"
import Login from './view/login/login.js'
import Hometop from './view/home-top/h-top'
import {Route,Switch,Redirect} from 'react-router-dom'
function App() {
  let [txt, setTxt] = useState(true)
  return (
    <div className="App">
      {/* <Switch> */}
      <Hometop txt={txt} setTxt={setTxt}></Hometop>
      <Route path='/' exact render={()=>{
            return <Redirect to='/home' ></Redirect>
          }} />
      <Route path='/home' exact render={(props)=>{
        return <Home {...props} txt={txt} setTxt={setTxt}></Home>
      }} />
      <Route path='/login' exact render={(props)=>{
        return <Login {...props}></Login>
      }} />
      {/* <Route path='/hometop' exact render={(props)=>{
        return <Hometop {...props} txt={txt} setTxt={setTxt}></Hometop>
      }} /> */}
        
      {/* </Switch> */}
      
    </div>
  );
}

export default App;
