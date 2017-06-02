// 主框架
import React from 'react'
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon
} from 'antd';
import NavLink from '../Nav/NavLink.js'
const {
  SubMenu
} = Menu;
const {
  Header,
  Content,
  Sider
} = Layout;
const PubSub = require('pubsub-js');
import styles from '../../css/index.css'

class SiderMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  componentWillUnmount = () => {
    //销毁监听的事件  
    PubSub.unsubscribe(this.pubsub_token);
  }

  componentDidMount = () => {

    this.pubsub_token = PubSub.subscribe('siderCollapsed', function(topic, collapsed) {
      this.setState({
        collapsed: !collapsed
      });
      if (!collapsed) {
        this.setState({
          openKey: ""
        })
      }
    }.bind(this));
    const _path = this.props.path
    this.setState({
      openKey: _path.substr(0, _path.lastIndexOf('/')),
      selectedKey: _path
    });

  }


  onOpenChange = (openKey) => {
    const state = this.state;

    this.setState({
      openKey: openKey.pop()
    })
  }
  handleClick = (obj) => {
    this.setState({
      selectedKey: obj.key
    })
  }

  render() {
    return (

      <Sider trigger={null}
          collapsible
          collapsed={this.state.collapsed} width={240} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[this.state.selectedKey]}
          openKeys={[this.state.openKey]}
          style={{ height: '100%' }}
          onOpenChange={this.onOpenChange}
          onClick={this.handleClick}
        >
          <SubMenu key="/sub1" title={<span><Icon type="user" />subnav 1</span>}>
            <Menu.Item key="/sub1/about"><NavLink to={"/sub1/about"}>about</NavLink></Menu.Item>
            <Menu.Item key="/sub1/inbox"><NavLink to={"/sub1/inbox"}>inbox</NavLink></Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="/sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
            <Menu.Item key="/sub2/messages/1"><NavLink to={"/sub2/messages/1"}> message</NavLink></Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
            <Menu.Item key="7">option7</Menu.Item>
            <Menu.Item key="8">option8</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
            <Menu.Item key="9">option9</Menu.Item>
            <Menu.Item key="10">option10</Menu.Item>
            <Menu.Item key="11">option11</Menu.Item>
            <Menu.Item key="12">option12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>

    );
  }
}


export default SiderMenu