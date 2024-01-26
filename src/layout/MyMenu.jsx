
import React from 'react'
import { Menu } from 'antd'
import {
    UserOutlined,
   GroupOutlined
  } from "@ant-design/icons";
import {  NavLink, useLocation } from 'react-router-dom';
const MyMenu = () => {
    const location = useLocation()
    const menu = [
        {
            path: "/teachers",
            label: "Teachers",
            icon: <UserOutlined></UserOutlined>
        },
        {
            path: "/classes",
            label: "Classes",
            icon: <GroupOutlined></GroupOutlined>
        }
    ]
  return (
    <div>
          <Menu
          theme="dark"
          mode="vertical"
          style={{ height: 800, background: "#00152a" }}
          className="menu-list"
          defaultSelectedKeys={["1"]}
          selectedKeys={[location.pathname]}
          items={
         menu.map((m) => ({
            ...m,
            key: m.path,
            label: <NavLink to={m.path}>{m.label}</NavLink>
         }))}
        />
    </div>
  )
}

export default MyMenu