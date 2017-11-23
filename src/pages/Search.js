import './Search.css';
import React,{Component} from 'react';

class HistoryList extends Component{
	constructor(){
		super();
		this.state = {
			isSearch : 1
		}
	}

	render(){
		var HistoryListItem = this.props.hislist.map(function(his,index){
			return <HistoryListItems info={his} key={index} />
		});
		
		var hid = {display:'none'},
			sho = {display:'block'};
		return (
			<ul className="history" style={this.props.isShow?sho:hid}>
				{HistoryListItem}
			</ul>
		)
	}
}

class HistoryListItems extends Component{

	render(){
		return (
			<li className="activeable history-item">
				<span className="text" data-name="w">{this.props.info}</span>
				<div className="delcon" data-time="1509414082797" data-name="w">
					<span className="delicon"></span>
				</div>
			</li>
		)
	}
}

class Search extends Component{
	constructor(){
		super();
		this.state = {
			nowCity : '全国',
			isCity : 0,
			isShow : 1,
			value : "",
			his : []
		}
		this.handleCity = this.handleCity.bind(this);
		this.handleChangeCity = this.handleChangeCity.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleSearchNo = this.handleSearchNo.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	handleCity(){
		this.setState({
			isCity : !this.state.isCity
		})
	}

	handleChangeCity(e){
		if(e.target.dataset.item === undefined){
			return
		}
		this.setState({
			nowCity : e.target.dataset.item,
			isCity : !this.state.isCity
		})
	}

	handleSearch(){
		var search = JSON.parse(localStorage.getItem('Search')) || [];
		this.setState({
			isShow : 1,
			his : search
		})
	}

	handleSearchNo(e){
		var yy = this.refs.searchTxt.value;
		this.setState({
			isShow : 0,
			value : yy
		})
	}

	handleSave(e){
		if (window.localStorage) {
			var search = JSON.parse(localStorage.getItem('Search')) || [],
				nowSearch = (this.state.value).trim();
			for(var i = 0,len = search.length; i < len; i++){
				if(nowSearch === search[i] || nowSearch === ''){
					return
				}
			}
			search.unshift(this.state.value);
			this.setState({
				his : search
			})
	        localStorage.setItem("Search",JSON.stringify(search));
		};
	}

	render(){

		var hid = {display:'none'},
			sho = {display:'block'};
		return(
			<div>
				<div className="linputer" style={this.state.isCity?hid:sho}>
		            <div className="lbutton" onClick={this.handleCity}>
		                <span className="city">{this.state.nowCity}</span>
		                <span className="cityicon iconfont icon-xiala"></span>
		            </div>
		            <div className="rinput">
		                <input className="inputer" ref="searchTxt" onFocus={this.handleSearch} onBlur={this.handleSearchNo} type="text" placeholder="搜索职位或公司" />
		                <span className="search iconfont icon-fangdajing" onClick={this.handleSave} ></span>
		            </div>
		        </div>
		        <HistoryList hislist={this.state.his} isShow={this.state.isShow} />
		        <div id="fulldialog-conid-1" className="fdialog-content" style={this.state.isCity?sho:hid}>
		        	<div className="fdialog-rcon" onClick={this.handleChangeCity}>
		        	<div className="cities-header">热门城市</div><table className="cities-list"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr className="cities-list-item"><td className="activeable cities-item" data-item="北京">北京</td><td className="activeable cities-item" data-item="上海">上海</td><td className="activeable cities-item" data-item="广州">广州</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="深圳">深圳</td><td className="activeable cities-item" data-item="成都">成都</td><td className="activeable cities-item" data-item="杭州">杭州</td></tr></tbody></table><div className="cities-header">ABCDEF</div><table className="cities-list"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr className="cities-list-item"><td className="activeable cities-item" data-item="保定">保定</td><td className="activeable cities-item" data-item="北京">北京</td><td className="activeable cities-item" data-item="宝鸡">宝鸡</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="包头">包头</td><td className="activeable cities-item" data-item="亳州">亳州</td><td className="activeable cities-item" data-item="滨州">滨州</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="长春">长春</td><td className="activeable cities-item" data-item="成都">成都</td><td className="activeable cities-item" data-item="重庆">重庆</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="长沙">长沙</td><td className="activeable cities-item" data-item="常州">常州</td><td className="activeable cities-item" data-item="沧州">沧州</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="东莞">东莞</td><td className="activeable cities-item" data-item="大连">大连</td><td className="activeable cities-item" data-item="东营">东营</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="德州">德州</td><td className="activeable cities-item" data-item="佛山">佛山</td><td className="activeable cities-item" data-item="阜阳">阜阳</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="福州">福州</td><td className="activeable cities-item" data-item="&nbsp;">&nbsp;</td><td className="activeable cities-item" data-item="&nbsp;">&nbsp;</td></tr></tbody></table><div className="cities-header">GHIJ</div><table className="cities-list"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr className="cities-list-item"><td className="activeable cities-item" data-item="桂林">桂林</td><td className="activeable cities-item" data-item="贵阳">贵阳</td><td className="activeable cities-item" data-item="广州">广州</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="赣州">赣州</td><td className="activeable cities-item" data-item="淮安">淮安</td><td className="activeable cities-item" data-item="邯郸">邯郸</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="哈尔滨">哈尔滨</td><td className="activeable cities-item" data-item="合肥">合肥</td><td className="activeable cities-item" data-item="呼和浩特">呼和浩特</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="海口">海口</td><td className="activeable cities-item" data-item="黄石">黄石</td><td className="activeable cities-item" data-item="杭州">杭州</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="惠州">惠州</td><td className="activeable cities-item" data-item="湖州">湖州</td><td className="activeable cities-item" data-item="金华">金华</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="吉林">吉林</td><td className="activeable cities-item" data-item="江门">江门</td><td className="activeable cities-item" data-item="佳木斯">佳木斯</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="济南">济南</td><td className="activeable cities-item" data-item="济宁">济宁</td><td className="activeable cities-item" data-item="嘉兴">嘉兴</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="揭阳">揭阳</td><td className="activeable cities-item" data-item="荆州">荆州</td><td className="activeable cities-item" data-item="&nbsp;">&nbsp;</td></tr></tbody></table><div className="cities-header">KLMN</div><table className="cities-list"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr className="cities-list-item"><td className="activeable cities-item" data-item="昆明">昆明</td><td className="activeable cities-item" data-item="聊城">聊城</td><td className="activeable cities-item" data-item="廊坊">廊坊</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="拉萨">拉萨</td><td className="activeable cities-item" data-item="丽水">丽水</td><td className="activeable cities-item" data-item="临沂">临沂</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="洛阳">洛阳</td><td className="activeable cities-item" data-item="连云港">连云港</td><td className="activeable cities-item" data-item="兰州">兰州</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="柳州">柳州</td><td className="activeable cities-item" data-item="泸州">泸州</td><td className="activeable cities-item" data-item="马鞍山">马鞍山</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="茂名">茂名</td><td className="activeable cities-item" data-item="绵阳">绵阳</td><td className="activeable cities-item" data-item="梅州">梅州</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="宁波">宁波</td><td className="activeable cities-item" data-item="南昌">南昌</td><td className="activeable cities-item" data-item="南充">南充</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="南京">南京</td><td className="activeable cities-item" data-item="南宁">南宁</td><td className="activeable cities-item" data-item="南通">南通</td></tr></tbody></table><div className="cities-header">OPQR</div><table className="cities-list"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr className="cities-list-item"><td className="activeable cities-item" data-item="莆田">莆田</td><td className="activeable cities-item" data-item="青岛">青岛</td><td className="activeable cities-item" data-item="秦皇岛">秦皇岛</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="泉州">泉州</td><td className="activeable cities-item" data-item="日照">日照</td><td className="activeable cities-item" data-item="&nbsp;">&nbsp;</td></tr></tbody></table><div className="cities-header">STUV</div><table className="cities-list"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr className="cities-list-item"><td className="activeable cities-item" data-item="上海">上海</td><td className="activeable cities-item" data-item="石家庄">石家庄</td><td className="activeable cities-item" data-item="遂宁">遂宁</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="宿迁">宿迁</td><td className="activeable cities-item" data-item="汕头">汕头</td><td className="activeable cities-item" data-item="绍兴">绍兴</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="沈阳">沈阳</td><td className="activeable cities-item" data-item="三亚">三亚</td><td className="activeable cities-item" data-item="深圳">深圳</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="苏州">苏州</td><td className="activeable cities-item" data-item="泰安">泰安</td><td className="activeable cities-item" data-item="天津">天津</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="铜陵">铜陵</td><td className="activeable cities-item" data-item="唐山">唐山</td><td className="activeable cities-item" data-item="太原">太原</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="台州">台州</td><td className="activeable cities-item" data-item="泰州">泰州</td><td className="activeable cities-item" data-item="&nbsp;">&nbsp;</td></tr></tbody></table><div className="cities-header">WXYZ</div><table className="cities-list"><thead><tr><th></th><th></th><th></th></tr></thead><tbody><tr className="cities-list-item"><td className="activeable cities-item" data-item="潍坊">潍坊</td><td className="activeable cities-item" data-item="武汉">武汉</td><td className="activeable cities-item" data-item="芜湖">芜湖</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="威海">威海</td><td className="activeable cities-item" data-item="乌鲁木齐">乌鲁木齐</td><td className="activeable cities-item" data-item="无锡">无锡</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="温州">温州</td><td className="activeable cities-item" data-item="西安">西安</td><td className="activeable cities-item" data-item="香港特别行政区">香港特别行政区</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="厦门">厦门</td><td className="activeable cities-item" data-item="西宁">西宁</td><td className="activeable cities-item" data-item="湘潭">湘潭</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="咸阳">咸阳</td><td className="activeable cities-item" data-item="信阳">信阳</td><td className="activeable cities-item" data-item="徐州">徐州</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="银川">银川</td><td className="activeable cities-item" data-item="盐城">盐城</td><td className="activeable cities-item" data-item="宜昌">宜昌</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="烟台">烟台</td><td className="activeable cities-item" data-item="岳阳">岳阳</td><td className="activeable cities-item" data-item="扬州">扬州</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="淄博">淄博</td><td className="activeable cities-item" data-item="珠海">珠海</td><td className="activeable cities-item" data-item="镇江">镇江</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="湛江">湛江</td><td className="activeable cities-item" data-item="肇庆">肇庆</td><td className="activeable cities-item" data-item="中山">中山</td></tr><tr className="cities-list-item"><td className="activeable cities-item" data-item="郑州">郑州</td><td className="activeable cities-item" data-item="漳州">漳州</td><td className="activeable cities-item" data-item="株洲">株洲</td></tr></tbody></table></div>
		        </div>
	        </div>		
	    )
	}
}
export default Search
