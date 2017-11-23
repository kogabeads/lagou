import './Register.css';
import React,{Component} from 'react';
import {Link} from 'react-router';

class Register extends Component{
	constructor(){
		super();
		this.state = {
			phone:'',
			test:'',
			msgtest:'',
			pwd:'',
			test:1
		}
		this.handlePhone = this.handlePhone.bind(this);
		this.handleTest = this.handleTest.bind(this);
		this.handleMsgTest = this.handleMsgTest.bind(this);
		this.handlePwd = this.handlePwd.bind(this);
		this.handleChangeTest = this.handleChangeTest.bind(this);
	}

	handlePhone(){
		this.setState({
			phone:this.refs.phone.value
		})
	}

	handleTest(){
		this.setState({
			test:this.refs.test.value
		})
	}

	handleMsgTest(){
		this.setState({
			msgtest:this.refs.msgtest.value
		})
	}

	handlePwd(){
		this.setState({
			pwd:this.refs.pwd.value
		})
	}

	handleChangeTest(){
		this.setState({
			test:this.state.test+=1
		})
	}

	handleRegister(){
		alert("注册成功");
		window.location.href = "/#Login";
	}


	render(){
		console.log(this.state)
		var j = (1509515894520 + this.state.test).toString();
		return(
			<div className="register_page">
			<div className="new_wrapper">
			    <form id="registerForm" data-view="phoneRegister">
			        <div className="new_register">
			            <input type="hidden" id="otype" value=""/>
			            <div data-propertyname="phone" data-controltype="Phone" >
			                <input tabIndex="1" onInput={this.handlePhone} ref="phone" type="text" placeholder="手机号" className="border_btm r_phone top btm"/>
			                <span data-valid-message="" className="input_tips">手机号格式错误</span>
			            </div>
			            <div id="vcodeWrap" data-propertyname="request_form_verifyCode" data-controltype="VerifyCode" >
			                <input tabIndex="2" onInput={this.handleTest} ref="test" type="text" id="vcode" name="vcode" className="top btm" placeholder="请证明你不是机器人"/><span data-valid-message="" className="input_tips">请输入验证码</span><img className="yzm" src={"https://passport.lagou.com/vcode/create?from=register&amp;refresh="+j}/>
			                
			                
			                <a>看不清楚，<em onClick={this.handleChangeTest}>换一张</em></a>   
			                <span className="error" id="vcodeError"></span>
			            </div>
			            <div data-propertyname="phoneVerificationCode" data-controltype="PhoneVerificationCode" >
			                <input tabIndex="3" onInput={this.handleMsgTest} ref="msgtest" type="text" className="top btm" id="vcode" placeholder="短信验证码"/>
			                <input type="button" className="btn_active r_getVcode btn_disabled" value="获取"/>
			                <span data-valid-message="" className="input_tips">请输入验证码</span>
			            </div>
			        </div>
			        
			        <div className="reg_pwd" data-propertyname="password" data-controltype="Password" >
			            <div>
			                <input tabIndex="4" onInput={this.handlePwd} ref="pwd" type="password" className="r_psw" placeholder="设置6-16位密码" />
			                <i className="eye"></i>
			                <span data-valid-message="" className="input_tips">6-16位密码</span>
			            </div>
			        </div>

			        <div data-propertyname="submit" data-controltype="Botton" >
			            <input onClick={this.handleRegister} type="button" className="btn_green" id="register" value="注册"/>
			        </div>
			    </form>
			    <div className="register_text">已有帐号？</div>
			    <Link to="/Login" href="/login" className="btn_green_border">登录</Link>
			    <div className="register_text">点击注册，即代表您同意<a href="http://www.lagou.com/privacy.html" target="_blank">《拉勾用户协议》</a></div>
			</div>
			</div>
		)
	}
}

export default Register
