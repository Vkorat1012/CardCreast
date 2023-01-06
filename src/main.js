import React from "react";
import Slider from "./components/slider";
import ContentBox from "./components/contentBox";

import "antd/dist/antd.min.css";
import "./css/content.css";
import "./css/header.css";
import "./css/slider.css";

import { Menu, Breadcrumb, Layout } from "antd";

import { MenuOutlined } from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

const Main = ({ children }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <Slider />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          <Menu mode="horizontal">
            <Menu.Item
              icon={<MenuOutlined />}
              style={{ fontSize: "16px", fontWeight: "bold", color: "#5fa6b7" }}
            >
              Cards
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ margin: "0 0 0 25px" }}>
          <div>
            <Breadcrumb style={{ margin: "16px 0px" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Cards</Breadcrumb.Item>
              {/* state required */}
            </Breadcrumb>
          </div>
          <div
            className="site-layout-background"
            style={{ backgroundColor: "white" }}
          >
            <ContentBox children={children} />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Main;
