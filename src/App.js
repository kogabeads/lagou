import React, { Component } from 'react';
import {Link,IndexLink} from 'react-router';
import logo from './logo.svg';
import './App.css';
import Job from './pages/Job';

class Footer extends Component {
  render() {
    return (
      <ul id="footer">
        <li><IndexLink to="/" activeClassName="now_page"><i className="iconfont icon-shouye1"></i>职位</IndexLink></li>
        <li><Link to="/search" activeClassName="now_page"><i className="iconfont icon-fangdajing"></i>搜索</Link></li>
        <li><Link to="/user" activeClassName="now_page"><i className="iconfont icon-my"></i>我的</Link></li>
      </ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header id="header">拉勾网</header>
        {this.props.children || <Job />}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
