/**
 * Created by Administrator on 2017/5/1.
 */
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import {connect} from 'react-redux'
import Index from './Index'
import Destination from './Destination'
import Plan from './Plan'
import Detail from './Detail'
import About from './About'
import {Menu, Icon} from 'antd'
const SubMenu = Menu.SubMenu

const Basic = () => (

  <Router >
    <div className="clear container-main">
      <div className="fl">
        <Menu
          style={{width: 160}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub2']}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="mail"/><span>操作</span></span>}>
            <Menu.Item key="1"><Link to="/">主页</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/about">购物车</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/topics">购买记录</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/aboutus">关于</Link></Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" title={<span><Icon type="aliwangwang-o" /><span>评论</span></span>}>
            <Menu.Item key="1">评论列表</Menu.Item>
            <Menu.Item key="2">发表评论</Menu.Item>
          </SubMenu>
        </Menu>
      </div>

      <Route exact path="/" component={Index}/>
      <Route path="/about" component={Destination}/>
      <Route path="/topics" component={Plan}/>
      <Route path="/detail/:topicId" component={Detail} />
      <Route path="/aboutus" component={About} />
    </div>
  </Router>
)

export default connect()(Basic)


