import React from 'react';
import { Layout, Row, Col } from 'antd';
import { Link } from 'dva/router';

function MainHeader() {

  const { Header } = Layout;

  return (
    <Header className="pd-l-r-2">
      <Row>
        <Col span={12} className="ft-15em"><Link to="/#" className="ft-white">React Demos</Link></Col>
        <Col span={3} offset={9} className="ft-white">Demo环境</Col>
      </Row>
    </Header>
  );
}


export default MainHeader;
