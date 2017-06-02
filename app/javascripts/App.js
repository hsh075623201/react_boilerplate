import React, {
  Component
} from 'react';
import {
  Layout,
  Breadcrumb,
  Menu,
  Icon
} from 'antd';
const {
  Content,
  Footer,
  Header
} = Layout;
import SiderMenu from './components/SiderMenu';
const PubSub = require('pubsub-js');
import styles from '../css/index.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };

  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    PubSub.publish('siderCollapsed', this.state.collapsed);
  };
  render() {
    return (
      <Layout>
    <Header style={{ background:'#fff', padding: 0 }}>
    <div style={{float:'left',textAlign:'center'}} className={styles.siderWidth}>
      <h3 style={{fontSize:'24px',fontWeight:'bold'}}>后台管理系统</h3>
    </div>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{fontSize:'16px',cursor:'pointer',padding:'0px 16px',margin:0}}
            />
          </Header>
    <Layout className="ant-layout-has-sider">
      <SiderMenu collapsed={this.state.collapsed} path={this.props.location.pathname}/>
      <Layout >
        
   
        <Content style={{ background: '#fff', padding: 24, margin: '24px 16px', minHeight: 280 }}>
          {this.props.children}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
      react-boilerplate ©2017 Created by hank
    </Footer>
      </Layout>
    </Layout>
  </Layout>
    )
  }
}

export default App;