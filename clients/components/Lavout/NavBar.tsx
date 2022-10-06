import type { NextPage } from "next";
import { Menu } from "antd";
import {
  EnvironmentOutlined,
  StockOutlined,
  TableOutlined,
} from "@ant-design/icons";

const NavBar = () => {
  return (
    <Menu
      mode="horizontal"
      defaultSelectedKeys={["0"]}
      theme="dark"
      style={{
        padding: 10,
      }}
    >
      <Menu.Item key="0" icon={<EnvironmentOutlined />}>
        Mapa
      </Menu.Item>
      <Menu.Item key="1" icon={<StockOutlined />}>
        Grafico
      </Menu.Item>
      <Menu.Item key="2" icon={<TableOutlined />}>
        Grud
      </Menu.Item>
    </Menu>
  );
};
export default NavBar;
