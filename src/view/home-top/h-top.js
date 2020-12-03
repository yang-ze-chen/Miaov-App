import React, { Fragment, useState,useEffect} from "react"
import './h-top.css'
import { NavLink,Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import isLogin from "../../store/action/isLogin";
import logout from "../../store/action/logout";
import { useBack } from "../../assets/hooks/index"
import { connect } from "react-redux"
function getUser(path, user, props, isBtnShow, setBtnShow) {
    if (path === "/login") {
      return "";
    }
    if (user) {
      return (
        <span className="header-btn-right">
          <span
            className="header-user"
            onClick={() => {
              setBtnShow(!isBtnShow);
            }}
          >
            {user}
          </span>
          <span
            className="header-logout-btn"
            style={{
              display: isBtnShow ? "block" : "none",
            }}
            onClick={() => {
              props.dispatch(logout());
            }}
          >
            退出
          </span>
        </span>
      );
    }
    return <Link className="user" to="/login" />;
  }
function Htop(props) {
    let [txt, setTxt] = useState(true)

    let path = props.location.pathname;
    let back = useBack();
    let { user, changeShow } = props;
    let [isBtnShow, setBtnShow] = useState(false);
    useEffect(() => {
      props.dispatch(isLogin()).then((data)=>{
        // console.log('9999',data)

      })
    }, []);
    return (
        // 首页头部
        <Fragment>
            <header id="header">
                <nav className="menu">
                    {/* 返回按钮 */}
                    {/* 菜单按钮 */}
                    {path === "/login" ? (
                    <a
                        className="header-btn-left iconfont icon-back"
                        onClick={() => {
                        back(props.history);
                        }}
                    ></a>
                    ) : (
                    <a
                        className="header-btn-left iconfont icon-hycaidan"
                        onClick={() => {
                            setTxt(!txt);
                        }}
                    ></a>
                    )}
                </nav>
                <h1 className="logo">miaov.com</h1>
                {getUser(path, user, props, isBtnShow, setBtnShow)}
            </header>
            {/* <header id="header">
                <nav className='menu'>
                    <a className="menu-a icon-size" onTouchEnd={() => {

                        setTxt(!txt)
                    }}></a>
                </nav>
                <h1 className="logo">miaov.com</h1>
                <NavLink to='/login' className="user"></NavLink>
            </header> */}

            <nav className={"menus " + (txt ? "unshow" : "show")}>
                <NavLink to='/home' className="iconfont icon-home active">首页</NavLink>
                <NavLink to='/class' className="iconfont icon-kecheng">课程安排</NavLink>
                <NavLink to='/teacher' className="iconfont icon-peixunjiangshi">讲师团队</NavLink>
            </nav>

        </Fragment>
    )
}
// export default Htop
export default connect((state) => {
    // console.log('000',state);
    return { user: state.login };
  })(withRouter(Htop))