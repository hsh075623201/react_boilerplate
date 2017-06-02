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
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import {
  Link
} from 'react-router'
import SiderMenu from './components/SiderMenu';
const PubSub = require('pubsub-js');
import styles from '../css/index.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      user: {}
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
            <Menu
                    mode="horizontal"
                    style={{ lineHeight: '64px', float: 'right' }}
                >
    {
      /*<Menu.Item key="full" onClick={this.screenFull} >
                              <Icon type="arrows-alt" onClick={this.screenFull} />
                          </Menu.Item>
                          <Menu.Item key="1">
                              <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                                  <Icon type="notification" />
                              </Badge>
                          </Menu.Item>*/
    }
                    <SubMenu  title={<span >
                    <img style={{ borderRadius: '500px',width: '40px',marginTop: '12px'}} src="http://cheng_haohao.oschina.io/reactadmin/static/media/b1.553c69e9.jpg" alt="头像" />
                    <i  className={styles.dot}/></span>}>
                        <MenuItemGroup style={{left:'-40px',width:'120px'}} title="用户中心">
                            <Menu.Item key="">你好 - {this.state.user.login}</Menu.Item>
                            <Menu.Item key="/user"><Link to={"/user"}> 个人信息</Link></Menu.Item>
                        </MenuItemGroup>
                        <MenuItemGroup title="设置中心">
                            <Menu.Item key="/setting"><Link to={"/setting"}> 个人设置</Link></Menu.Item>
                        </MenuItemGroup>
                    </SubMenu>
                </Menu>
                 <style>{`
                    .ant-menu-submenu-horizontal > .ant-menu {
                        width: 120px;
                        left: -40px;
                        top: 58px;
                        border-top: 2px solid #108ee9;
                    }
                    
                `}</style>
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