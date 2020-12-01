import React,{useState,useEffect} from 'react';
import './login.css'
import logo from '../../assets/images/user_img.png'
// import {Register,verify} from '../../http'
import register from "../../store/action/register";
import login from "../../store/action/login"
import { connect } from "react-redux"
import {useBack} from "../../assets/hooks/index"
import Htop from "../home-top/h-top"
function Login(props) {
    // console.log(props.location)
   
    let [loginShow,setLoginShow]=useState(true)

    let [username,setUsername]=useState('')
    let [password,setPassword]=useState('')
    let [repassword,setRepassword]=useState('')
    let [vcode, setVcode] = useState("")
    let [vcodeShow, setVcodeShow] = useState(false)
    const [vcodeSrc, setVcodeSrc] = useState("/miaov/user/verify?" + Date.now())
    const back = useBack()
    function toRegister() {
        props
          .dispatch(
            register({
              verify: vcode,
              username: username,
              password,
              repassword: repassword,
            })
          )
          .then((data) => {
            alert(data.msg);
            setTimeout(() => {
              if (data.code == 0) {
                  console.log(data)
                // setDeg(0);
              }
              setVcodeSrc("/miaov/user/verify?" + Date.now());
            }, 100);
          });
      }
    function toLogin() {
    props
        .dispatch(
        // 使用thunk中间件之后，dispatch就可以接收一个函数
        // dispatch(function(dispatch,getState){
        // 异步执行状态修改 Promise
        // })
        login({
            verify: vcode,
            username: username,
            password,
        })
        )
        .then((data) => {
        alert(data.msg);
        setTimeout(() => {
            if (data.code != 0) {
            setVcodeSrc("/miaov/user/verify?" + Date.now());
            } else {
                // console.log(data)
                back(props.history)
            //   props.history.goBack()
            // back(props.history)
            }
        }, 100);
        });
    }
  return (
    <div className="warp">
        <Htop></Htop>
        <div className="warpBox">
           <h2 className="login_register">
               <p>登录&注册</p>
               <span>login&registered</span>
           </h2>
           <div className="login_warp">
                <div  className={loginShow?'login_register_box':'login_register_box1'}>

                    <div className="login_box">
                        <figure className="loginImg">
                            <img src={logo}></img>
                            <figcaption>如有账号,请直接登录</figcaption>
                        </figure>
                        <div className="login_from">
                            <p>
                                <input placeholder='用户名' type='text'
                                value={username}
                                onChange={({target})=>{
                                    setUsername(
                                        username=target.value
                                    )
                                }}
                                ></input>
                            </p>
                            <p>
                                <input placeholder='请输入密码' type='password'
                                value={password}
                                onChange={({target})=>{
                                    setPassword(
                                        password=target.value
                                    )
                                }}
                                ></input>
                            </p>
                            <p>
                                <input placeholder='验证码' type='text'
                                value={vcode}
                                onChange={(e) => {
                                    setVcode(e.target.value);
                                }}
                                onFocus={() => {
                                    setVcodeShow(true);
                                  }}
                                ></input>
                                {vcodeShow ? (
                                    <img
                                    className="verify"
                                    src={vcodeSrc}
                                    onClick={() => {
                                        setVcodeSrc("/miaov/user/verify?" + Date.now());
                                    }}
                                    alt=""
                                    ></img>
                                ) : (
                                    ""
                                )}
                            </p>
                            <button className="login_but"
                            onClick={()=>{
                                toLogin()
                            }}
                            
                            >登录</button>
                            <p className="login_txt">
                                没有账号? <a onClick={()=>{
                                            setLoginShow(false)
                                }}>立即注册</a>
                            </p>
                        </div>
                    </div>
                    
                    <div className="register_box">
                        <h3>注册账号</h3>
                        <div className="login_from">
                            <p>
                                <input placeholder='用户名' 
                                value={username}
                                onChange={({target})=>{
                                    setUsername(
                                        username=target.value
                                    )
                                }}
                                ></input>
                            </p>
                            <p>
                                <input placeholder='请输入密码'
                                value={password}
                                onChange={({target})=>{
                                    setPassword(
                                        password=target.value
                                    )
                                }}
                                ></input>
                            </p>
                            <p>
                                <input placeholder='请确认密码'
                                value={repassword}
                                onChange={({target})=>{
                                    setRepassword(
                                        repassword=target.value
                                    )
                                }}
                                ></input>
                            </p>
                            <p>
                                <input
                                placeholder="验证码"
                                value={vcode}
                                onChange={(e) => {
                                    setVcode(e.target.value);
                                }}
                                onFocus={() => {
                                    setVcodeShow(true);
                                  }}
                                ></input>
                                {vcodeShow ? (
                                    <img
                                    className="verify"
                                    src={vcodeSrc}
                                    onClick={() => {
                                        setVcodeSrc("/miaov/user/verify?" + Date.now());
                                    }}
                                    alt=""
                                    ></img>
                                ) : (
                                    ""
                                )}
                            </p>
                            <button className="login_but"
                                onClick={()=>{
                                    toRegister()
                                }}
                            >马上注册</button>
                            <p className="login_txt">
                                已有账号? <a 
                                onClick={()=>{
                                    setLoginShow(true)
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

export default connect((res) => {
    console.log(res)
    return res;
  })(Login)
