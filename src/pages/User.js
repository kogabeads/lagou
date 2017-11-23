import './User.css';
import React,{Component} from 'react';
import {Link} from 'react-router';

class User extends Component{
	render(){
		return(
			<div id="content">

		        <div className="logininfo">
	                <div className="nologin center">
	                    <Link to="/Login" className="loginbut" href="/frontLogin.do" target="_self">登录 / 注册</Link>
	                </div>
                </div>
        
		        <div className="buttons">
		            <a className="button deliver" href="/user/deliverlist.html">
		                <span>投递</span>
		            </a>
		            <a className="button interview" href="/minterview/interviewlist.html">面试</a>
		            
		            <a className="button invitation" href="/minvite/invitation.html">
		                <span>邀约</span>
		            </a>
		            <a className="button collect" href="/user/collectlist.html">收藏</a>
		        </div>
            </div>
		)
	}
}

export default User
