import React from 'react';
import { connect } from 'dva';
import MainHeader from './MainHeader.js';
import { Link } from 'dva/router';
import { Layout, Menu, Icon } from 'antd';


function MainLayout(props) {
  let { collapsed, mode } = props;
  const { Content, Sider } = Layout;

  const SubMenu = Menu.SubMenu;

  const siderProps = {
    collapsedWidth: 0,
    collapsible: true,
    collapsed,
    onCollapse,
  };

  function onCollapse(collapsed) {
    props.dispatch({
      type: 'mainLayout/concat',
      payload: {
        collapsed,
        mode: collapsed ? 'vertical' : 'inline',
      },
    });
  }
  return (
    <Layout>
      <MainHeader />
      <Layout>
        <Sider {...siderProps} style={{ minHeight: document.body.clientHeight }} >
          <Menu theme="dark" mode={mode}>
            <Menu.Item><Link to={'/wtChart'} className="ft-black">WtChart</Link></Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Content>
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

function mapStateToProps(state) {
  return { loading: state.loading.models.mainLayout, ...state.mainLayout };
}
export default connect(mapStateToProps)(MainLayout);
