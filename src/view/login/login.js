import React,{useState} from 'react';
import Htop from "../home-top/h-top"
import './login.css'

import logo from '../../assets/images/user_img.png'
function Login() {
    let [login,setLogin]=useState(true)
  return (
    <div className="warp">
        <Htop></Htop>
        <div className="warpBox">
           <h2 className="login_register">
               <p>登录&注册</p>
               <span>login&registered</span>
           </h2>
           <div className="login_warp">
                <div  className={login?'login_register_box':'login_register_box1'}>

                    <div className="login_box">
                        <figure className="loginImg">
                            <img src={logo}></img>
                            <figcaption>如有账号,请直接登录</figcaption>
                        </figure>
                        <div className="login_from">
                            <p>
                                <input placeholder='用户名' type='text'></input>
                            </p>
                            <p>
                                <input placeholder='请输入密码' type='password'></input>
                            </p>
                            <p>
                                <input placeholder='验证码' type='text'></input>
                            </p>
                            <button className="login_but">登录</button>
                            <p className="login_txt">
                                没有账号? <a onClick={()=>{
                                            setLogin(false)
                                }}>立即注册</a>
                            </p>
                        </div>
                    </div>
                    
                    <div className="register_box">
                        <h3>注册账号</h3>
                        <div className="login_from">
                            <p>
                                <input placeholder='用户名'></input>
                            </p>
                            <p>
                                <input placeholder='请输入密码'></input>
                            </p>
                            <p>
                                <input placeholder='请确认密码'></input>
                            </p>
                            <p>
                                <input placeholder='验证码'></input>
                            </p>
                            <button className="login_but">马上注册</button>
                            <p className="login_txt">
                                已有账号? <a 
                                onClick={()=>{
                                    setLogin(true)
                                }}>立即登录</a>
                            </p>
                        </div>
                    </div>
                    
                </div>
           </div>
        </div>
    </div>
  );
}

export default Login;
