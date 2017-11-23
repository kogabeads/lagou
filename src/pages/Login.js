import './Login.css';
import React,{Component} from 'react';
import {Link} from 'react-router';

class Login extends Component{
	constructor(){
		super();
		this.state={
			test:1,
			eye:false
		}
		this.handleChangeTest = this.handleChangeTest.bind(this);
		this.handleChangeEye = this.handleChangeEye.bind(this);
	}

	handleChangeTest(){
		this.setState({
			test:this.state.test+=1
		})
	}

	handleChangeEye(){
		this.setState({
			eye:!this.state.eye
		})
	}

	handleLogin(){
		window.location.href = "/#"
	}

	render(){
		console.log(this.state)
		var j = (1509515894520 + this.state.test).toString();
		return(
			<div className="register_page Login_page">
			<div className="new_wrapper">
			    <form data-view="loginView">
			    	<div className="new_register">
			    		<div data-propertyname="username" data-controltype="Phone"  >
			    			<input type="text" placeholder="已验证手机/邮箱" className="border_btm r_email top"/>
			    		</div>
			    		<div data-propertyname="password" data-controltype="Password"  >
							<div>
								<input type={this.state.eye?"text":"password"} placeholder="密码" className="r_psw btm" maxLength="16"/>
								<i onClick={this.handleChangeEye} className={this.state.eye?"eye iconfont icon-yanjing":"eye iconfont icon-biyan"}></i>
							</div>
			    			
			    		</div>
			    		
			    	</div>
			        <div id="vcodeWrap" data-propertyname="request_form_verifyCode" data-controltype="VerifyCode">
			            <input type="text" id="vcode" name="vcode" tabIndex="3" placeholder="请证明你不是机器人"/>
			            <img src={"https://passport.lagou.com/vcode/create?from=register&amp;refresh="+j} width="113" height="42" id="vcodeImg"/>
			            <a>看不清楚，<em onClick={this.handleChangeTest}>换一张</em></a>   
			            <span className="error" id="vcodeError"></span>
			        </div>
			    	<div data-propertyname="submit" data-controltype="Botton"  >
			    		<input onClick={this.handleLogin} type="button" className="btn_green" value="登录"/>
			    	</div>
			    	
			    </form>
			    <div className="register_text">还没帐号？</div>
			    <Link to="Register" className="btn_green_border">注册</Link>
			</div>
			</div>
		)
	}
}

export default Login
