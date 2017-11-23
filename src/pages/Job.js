import './Job.css';
import axios from 'axios';
import {Link} from 'react-router';
import React,{Component} from 'react';

class Joblist extends Component{
	constructor(){
		super();
		this.state = {
			skip:10,
			jobList:[{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3698167,"positionName":"数据助理","city":"北京","createTime":"昨天 14:46","salary":"5k-6k","companyId":235408,"companyLogo":"i/image/M00/54/12/CgpEMll4TkSACRqnAAAV_KnNScA089.png","companyName":"巨掌广告","companyFullName":"巨掌互动科技（北京）有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3698056,"positionName":"前端H5","city":"上海","createTime":"昨天 14:43","salary":"9k-15k","companyId":128998,"companyLogo":"i/image/M00/2A/A6/Cgp3O1cyziuAfM5AAAAe20ZOb-4754.png","companyName":"江苏亿科达","companyFullName":"上海海万信息科技股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3698845,"positionName":"财务经理","city":"珠海","createTime":"昨天 14:42","salary":"8k-15k","companyId":107539,"companyLogo":"i/image/M00/02/93/Cgp3O1aUqtOAHpvxAAAzqISM43I075.png","companyName":"筑巢科技","companyFullName":"珠海市筑巢科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3703450,"positionName":"PHP高级工程师／工程师","city":"北京","createTime":"昨天 14:40","salary":"20k-35k","companyId":98754,"companyLogo":"i/image/M00/1C/C7/Cgp3O1cDUViARKDdAAF6UGnlOHE226.jpg","companyName":"云账户","companyFullName":"北京云予网络科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3709991,"positionName":"运营总监","city":"北京","createTime":"昨天 14:40","salary":"10k-20k","companyId":274086,"companyLogo":"i/image2/M00/0E/89/CgotOVnlgKKAJz_mAABjx7LmZMw617.png","companyName":"火了科技","companyFullName":"北京火了科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3709993,"positionName":"销售","city":"北京","createTime":"昨天 14:40","salary":"6k-10k","companyId":274086,"companyLogo":"i/image2/M00/0E/89/CgotOVnlgKKAJz_mAABjx7LmZMw617.png","companyName":"火了科技","companyFullName":"北京火了科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3709958,"positionName":"广告设计","city":"上海","createTime":"昨天 14:40","salary":"8k-15k","companyId":8414,"companyLogo":"image1/M00/00/11/CgYXBlTUWDOAeZQdAABbV0qQVPE716.jpg","companyName":"一点资讯","companyFullName":"一点网聚科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3709937,"positionName":"平面设计（移动广告）","city":"上海","createTime":"昨天 14:40","salary":"8k-15k","companyId":8414,"companyLogo":"image1/M00/00/11/CgYXBlTUWDOAeZQdAABbV0qQVPE716.jpg","companyName":"一点资讯","companyFullName":"一点网聚科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3702873,"positionName":"采购专员/主管","city":"广州","createTime":"昨天 14:39","salary":"5k-8k","companyId":3346,"companyLogo":"i/image/M00/10/3E/CgpEMljrCN-AEwF5AAAr_ojLdYY305.jpg","companyName":"妈妈网","companyFullName":"广州盛成妈妈网络科技股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3711854,"positionName":"旅游编辑","city":"广州","createTime":"昨天 14:39","salary":"5k-7k","companyId":3346,"companyLogo":"i/image/M00/10/3E/CgpEMljrCN-AEwF5AAAr_ojLdYY305.jpg","companyName":"妈妈网","companyFullName":"广州盛成妈妈网络科技股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3711566,"positionName":"视频运营实习生","city":"北京","createTime":"昨天 14:39","salary":"1k-2k","companyId":83497,"companyLogo":"image1/M00/3D/16/CgYXBlW3RAuAEZgCAAAXQCuN6Mw798.jpg","companyName":"星拍档","companyFullName":"星拍档（北京）文化传媒有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3711222,"positionName":"新媒体运营经理","city":"广州","createTime":"昨天 14:36","salary":"10k-18k","companyId":163891,"companyLogo":"i/image/M00/84/AD/CgqKkVhd0TyAXi5OAAW7iJsJPmg289.jpg","companyName":"普融教育","companyFullName":"广州普融教育科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3711246,"positionName":"运营总监","city":"广州","createTime":"昨天 14:36","salary":"25k-50k","companyId":163891,"companyLogo":"i/image/M00/84/AD/CgqKkVhd0TyAXi5OAAW7iJsJPmg289.jpg","companyName":"普融教育","companyFullName":"广州普融教育科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3711026,"positionName":"资深SEO工程师","city":"杭州","createTime":"昨天 14:36","salary":"10k-20k","companyId":46629,"companyLogo":"i/image/M00/2E/A8/CgpEMlkufKSAAUL0AAAWlYBHst0935.png","companyName":"金诚集团","companyFullName":"浙江诚泽金开投资管理有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3711077,"positionName":"基础支持工程师","city":"杭州","createTime":"昨天 14:36","salary":"6k-10k","companyId":46629,"companyLogo":"i/image/M00/2E/A8/CgpEMlkufKSAAUL0AAAWlYBHst0935.png","companyName":"金诚集团","companyFullName":"浙江诚泽金开投资管理有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3687753,"positionName":"项目经理","city":"深圳","createTime":"今天 08:43","salary":"15k-25k","companyId":103077,"companyLogo":"i/image/M00/66/F3/CgpEMlmekH6AK2tiAADHW3B1G_s735.jpg","companyName":"智慧享联","companyFullName":"深圳市智慧享联网络技术有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3681915,"positionName":"产品市场总监/经理","city":"北京","createTime":"今天 08:42","salary":"20k-30k","companyId":28818,"companyLogo":"i/image/M00/47/F7/CgpFT1lnOvOAWArMAAAMLUXDZ5Y742.jpg","companyName":"畅捷通","companyFullName":"畅捷通信息技术股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3688526,"positionName":"数据库开发工程师","city":"深圳","createTime":"今天 08:35","salary":"15k-30k","companyId":44982,"companyLogo":"image1/M00/00/72/Cgo8PFTUXZmAZ0iNAAA24NvDc1A297.jpg","companyName":"友金所","companyFullName":"深圳前海用友力合金融服务有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3677589,"positionName":"高级软件测试工程师","city":"深圳","createTime":"今天 08:35","salary":"15k-25k","companyId":44982,"companyLogo":"image1/M00/00/72/Cgo8PFTUXZmAZ0iNAAA24NvDc1A297.jpg","companyName":"友金所","companyFullName":"深圳前海用友力合金融服务有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3677636,"positionName":"项目助理","city":"广州","createTime":"今天 08:35","salary":"3k-4k","companyId":51796,"companyLogo":"i/image/M00/21/2B/CgqKkVcQP7OAGmlnAAAOMWYxUAc112.jpg","companyName":"icon","companyFullName":"广州艾空网络科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3681802,"positionName":"电子书制作","city":"武汉","createTime":"今天 08:34","salary":"3k-5k","companyId":113615,"companyLogo":"i/image/M00/03/15/CgqKkVaofi2AEINkAABluIUlr10804.png","companyName":"圣才电子书","companyFullName":"圣才电子书（武汉）有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3681820,"positionName":"产品设计经理","city":"武汉","createTime":"今天 08:34","salary":"8k-10k","companyId":113615,"companyLogo":"i/image/M00/03/15/CgqKkVaofi2AEINkAABluIUlr10804.png","companyName":"圣才电子书","companyFullName":"圣才电子书（武汉）有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3678485,"positionName":"天猫客服（储备店长）","city":"深圳","createTime":"今天 08:24","salary":"4k-6k","companyId":117948,"companyLogo":"i/image/M00/0E/9B/CgqKkVbc24SADVGxAAAchNDEpHw195.jpg","companyName":"上海菁创","companyFullName":"上海菁创电子有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3676902,"positionName":"媒介助理","city":"上海","createTime":"昨天 23:17","salary":"4k-7k","companyId":268209,"companyLogo":"i/image2/M00/0C/CA/CgotOVng_kCAWXO9AABlOHSbQIE558.jpg","companyName":"TOPKOL意妆广告","companyFullName":"上海乐妆文化传播有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3688880,"positionName":"市场营销实习生","city":"青岛","createTime":"昨天 22:13","salary":"6k-8k","companyId":149034,"companyLogo":"i/image/M00/5B/EE/CgqKkVfiaO2AeouUAABrk5W83EQ723.jpg","companyName":"弘历软件","companyFullName":"北京骏嘉财通科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3688823,"positionName":"人事助理/实习生","city":"青岛","createTime":"昨天 22:13","salary":"3k-5k","companyId":149034,"companyLogo":"i/image/M00/5B/EE/CgqKkVfiaO2AeouUAABrk5W83EQ723.jpg","companyName":"弘历软件","companyFullName":"北京骏嘉财通科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3681618,"positionName":"高级产品经理（B2B交易平台）-上海-00298","city":"上海","createTime":"昨天 22:07","salary":"25k-33k","companyId":98698,"companyLogo":"i/image/M00/5B/36/CgqKkVfgo4SAMNyDAAAK7-0-_2o804.png","companyName":"领健信息","companyFullName":"上海领健信息技术有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3687712,"positionName":"机器学习平台产品经理","city":"杭州","createTime":"昨天 21:48","salary":"10k-20k","companyId":133891,"companyLogo":"i/image/M00/35/EF/Cgp3O1dc02OAQJjRAABZpUynagc570.png","companyName":"桃树数据","companyFullName":"杭州桃树科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3687749,"positionName":"资深人工智能科学家","city":"杭州","createTime":"昨天 21:48","salary":"30k-50k","companyId":133891,"companyLogo":"i/image/M00/35/EF/Cgp3O1dc02OAQJjRAABZpUynagc570.png","companyName":"桃树数据","companyFullName":"杭州桃树科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3676300,"positionName":"咖啡店店长","city":"上海","createTime":"昨天 21:21","salary":"8k-12k","companyId":19585,"companyLogo":"i/image/M00/5E/D2/Cgp3O1fs30WAHeOxAAAruuxujio663.jpg","companyName":"君学中国","companyFullName":"上海真己化人教育科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3676731,"positionName":"护士","city":"北京","createTime":"今天 08:56","salary":"4k-6k","companyId":165202,"companyLogo":"i/image/M00/A7/AA/Cgp3O1iuN0-AIqH3AABOrjIDUUg116.jpg","companyName":"基石生命","companyFullName":"北京基石生命科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3677419,"positionName":"品牌推广/渠道招商","city":"上海","createTime":"今天 08:55","salary":"8k-12k","companyId":18469,"companyLogo":"i/image/M00/2A/FD/CgpFT1kuixuAYNtpAAAfDS9DV-E649.png","companyName":"联璧","companyFullName":"上海联璧电子科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3687215,"positionName":"嵌入式硬件工程师","city":"广州","createTime":"今天 08:53","salary":"10k-15k","companyId":88390,"companyLogo":"i/image/M00/41/F9/CgqKkVd-DHCAZPIXAABzVuhpzpA836.png","companyName":"CNICG","companyFullName":"广州中国科学院计算机网络信息中心"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3687804,"positionName":"嵌入式软件开发工程师","city":"广州","createTime":"今天 08:53","salary":"10k-15k","companyId":88390,"companyLogo":"i/image/M00/41/F9/CgqKkVd-DHCAZPIXAABzVuhpzpA836.png","companyName":"CNICG","companyFullName":"广州中国科学院计算机网络信息中心"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3688883,"positionName":"在线客服专员","city":"上海","createTime":"今天 08:53","salary":"4k-6k","companyId":4950,"companyLogo":"i/image/M00/01/1A/Cgp3O1Zf5E-AKA4bAADd5BVsEKo767.png","companyName":"好买基金网（联想腾讯注资企业）","companyFullName":"好买财富管理股份有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3688980,"positionName":"新媒体运营专员","city":"成都","createTime":"今天 08:53","salary":"4k-8k","companyId":33184,"companyLogo":"i/image/M00/69/11/Cgp3O1gSpdOAKwqGAABICcH_QZQ026.jpg","companyName":"顶呱呱","companyFullName":"成都顶呱呱集团投资有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3677553,"positionName":"网络推广专员","city":"成都","createTime":"今天 08:53","salary":"4k-8k","companyId":33184,"companyLogo":"i/image/M00/69/11/Cgp3O1gSpdOAKwqGAABICcH_QZQ026.jpg","companyName":"顶呱呱","companyFullName":"成都顶呱呱集团投资有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3689096,"positionName":"高级iOS研发工程师","city":"北京","createTime":"今天 08:52","salary":"15k-30k","companyId":139755,"companyLogo":"i/image2/M00/01/B5/CgoB5lm_Z2eAO7g_AAAsw5Ww4Ig707.jpg","companyName":"京东商城","companyFullName":"北京京东世纪贸易有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3676423,"positionName":"销售管培生--2018校园招聘（厦门）","city":"厦门","createTime":"今天 08:52","salary":"4k-8k","companyId":168709,"companyLogo":"i/image/M00/91/EF/Cgp3O1iYQO2AAN3VAAB-XS4zBI4765.jpg","companyName":"环球资源","companyFullName":"环球资源广告（深圳）有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3676427,"positionName":"销售管培生--2018校园招聘（福州）","city":"福州","createTime":"今天 08:52","salary":"4k-8k","companyId":168709,"companyLogo":"i/image/M00/91/EF/Cgp3O1iYQO2AAN3VAAB-XS4zBI4765.jpg","companyName":"环球资源","companyFullName":"环球资源广告（深圳）有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3688087,"positionName":"java高级开发工程师","city":"广州","createTime":"今天 08:51","salary":"15k-30k","companyId":90627,"companyLogo":"image2/M00/04/AD/CgpzWlXyjSKADXu6AAA2S9MkF6A083.png","companyName":"品骏","companyFullName":"品骏控股有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3687022,"positionName":"软件测试工程师","city":"上海","createTime":"今天 08:51","salary":"10k-15k","companyId":29211,"companyLogo":"i/image/M00/41/77/CgpEMllUvhuAWu9QAAD6vdVFKRU670.png","companyName":"圆通","companyFullName":"圆通速递有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3687121,"positionName":"软件测试工程师（高级）","city":"上海","createTime":"今天 08:51","salary":"15k-25k","companyId":29211,"companyLogo":"i/image/M00/41/77/CgpEMllUvhuAWu9QAAD6vdVFKRU670.png","companyName":"圆通","companyFullName":"圆通速递有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3678027,"positionName":"商务BD专员","city":"上海","createTime":"今天 08:47","salary":"6k-9k","companyId":18469,"companyLogo":"i/image/M00/2A/FD/CgpFT1kuixuAYNtpAAAfDS9DV-E649.png","companyName":"联璧","companyFullName":"上海联璧电子科技有限公司"},{"logger":{"traceCapable":true,"name":"com.lagou.entity.mobile.MobilePosition"},"positionId":3681484,"positionName":"人事专员","city":"北京","createTime":"今天 08:47","salary":"4k-8k","companyId":150030,"companyLogo":"i/image/M00/4A/76/CgpEMllli-qAYWKDAAAaNfCDIT0057.png","companyName":"北京瑞友","companyFullName":"北京瑞友科技股份有限公司"}]
		}
		this.handleLoadMore = this.handleLoadMore.bind(this);
	}

	handleLoadMore(){
		this.setState({
      	 	skip:this.state.skip+5
      	 })
	}

	render(){
		var skip = this.state.skip;
        var joblist = this.state.jobList.map(function(job, index) {
        	if(index<skip){
        		return <Joblistitem job={job} key={job.positionId} />;
        	}
        })

   	    return (
            <ul className="list">
            	{joblist}
            	<li onClick={this.handleLoadMore} className="activeable list-more">加载更多</li>
            </ul>
   	  	)
   }
}

class Joblistitem extends React.Component{
    constructor(){
       super();
	}
    render(){
   	    let {positionId,positionName,city,salary,companyLogo,companyName,createTime} = this.props.job;
   	    companyLogo = 'https://static.lagou.com/' + companyLogo;

   	    return (
			<li className="activeable list-item" data-positionid={positionId}>
	            <img src={companyLogo} className="item-logo" />
	            <div className="item-desc">
	                <h2 className="item-title">{companyName}</h2>
	                <p className="item-info">
	                    <span className="item-pos">
	                        {positionName} [ {city} ]
	                    </span>
	                    <span className="item-salary">{salary}</span>
	                </p>
	                <p className="item-time">{createTime}</p>
	            </div>
			</li>
   	 	)
   }

} 

class Job extends Component{
	render(){
		return(
			<div>
				<div className="custom-info none">
		            <span className="info">
		                10秒钟定制职位
		            </span>
		            <Link to="/Login" className="go" href="/frontLogin.do" target="_self">
		                <em className="icon"></em>
		                <em className="text">去登录</em>
		            </Link>
	            	
		        </div>
		        <Joblist />
		        <div id="copyright">
		        	<p>©2015 lagou.com, all right reserved </p>
		        	<div className="copyright-item">
		        		<span className="phone active">移动版&nbsp;·&nbsp;</span>
		        		<span className="computer">电脑版&nbsp;·&nbsp;</span>
		        		<a href="#header">回顶部</a>
		        	</div>
		        </div>
	        </div>
		)
	}
}

export default Job
