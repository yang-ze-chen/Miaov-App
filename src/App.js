import React from "react"
// import Hometop from './view/home-top/h-top'
import {Route,Switch} from 'react-router-dom'
import {router} from './router/router'
function App() {
  return (
    <div className="App">
      {/* <Hometop /> */}
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
    </div>
  );
}

export default App;
