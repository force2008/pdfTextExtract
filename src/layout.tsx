import React from 'react';
import { Layout, Space } from 'antd';
import Upload from './pages/upload';
import SideMenu from './side'
const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  fontSize:24,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  height: window.innerHeight-2*64,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height:64,
  backgroundColor: '#7dbcea',
};

const LayoutCom: React.FC = () => (
  <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
    <Layout>
      <Header style={headerStyle}>a site for pdf process</Header>
      <Layout hasSider>
        <Sider style={siderStyle}><SideMenu /></Sider>
        <Content style={contentStyle}>
          <Upload />
        </Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Space>
);

export default LayoutCom;