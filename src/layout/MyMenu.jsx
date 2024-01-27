
import React from 'react'
import { Menu } from 'antd'
import {
    UsergroupAddOutlined,
    ReadOutlined
  } from "@ant-design/icons";
import {  NavLink, useLocation } from 'react-router-dom';
const MyMenu = () => {
    const location = useLocation()
    const menu = [
        {
            path: "/teachers",
            label: "Teachers",
            icon: <UsergroupAddOutlined/>
        },
        {
            path: "/classes",
            label: "Classes",
            icon: <ReadOutlined/>
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