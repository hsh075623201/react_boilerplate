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
//import styles from '../../css/index.css'

class SiderMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openKey: 'sub1',
      selectedKey: '/about'
    };

  }

  componentWillUnmount = () => {
    //销毁监听的事件  
    PubSub.unsubscribe(this.pubsub_token);
  }

  componentDidMount = () => {

    this.pubsub_token = PubSub.subscribe('siderCollapsed', function(topic, collapsed) {
      console.log("collapsed####")
      console.log(collapsed)
      this.setState({
        collapsed: !collapsed
      });
    }.bind(this));

  }


  onOpenChange = (openKeys) => {
    const state = this.state;
    console.log(state)
      /*const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));
      const latestCloseKey = state.openKeys.find(key => !(openKeys.indexOf(key) > -1));

      let nextOpenKeys = [];
      if (latestOpenKey) {
        nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
      }
      if (latestCloseKey) {
        nextOpenKeys = this.getAncestorKeys(latestCloseKey);
      }
      this.setState({ openKeys: nextOpenKeys });*/
  }

  render() {
    return (

      <Sider trigger={null}
          collapsible
          collapsed={this.state.collapsed} width={240} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={[this.state.selectedKey]}
          defaultOpenKeys={[this.state.openKey]}
          style={{ height: '100%' }}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
            <Menu.Item key="/about"><NavLink to={"/about"}>about</NavLink></Menu.Item>
            <Menu.Item key="/inbox"><NavLink to={"/inbox"}>inbox</NavLink></Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
            <Menu.Item key="5">option5</Menu.Item>
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