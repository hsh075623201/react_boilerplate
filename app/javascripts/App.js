import React, {
  Component
} from 'react';
import {
  Layout
} from 'antd';
const {
  Content,
  Footer
} = Layout;
import SiderMenu from './components/SiderMenu';

class App extends Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout className="ant-layout-has-sider">
              <SiderMenu path={this.props.location.pathname} collapsed={this.state.collapsed} />
              <Layout>
                <Content style={{ margin: '0 16px', overflow: 'initial' }}>
                  {this.props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                  React-Boilerplate ©2017 Created by hank
                </Footer>
              </Layout>
            </Layout>
    );
  }
}

export default App;