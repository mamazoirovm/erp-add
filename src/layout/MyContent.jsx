import React from 'react'
import { Content } from 'antd/es/layout/layout'
import Buttons from "./Buttons";
import MySelect from "./MySelect";
import MyInputs from "./MyInput";

import { Outlet } from 'react-router-dom';

const MyContent = () => {
  return (
    <div>
         <Content
          style={{
            margin: "24px 16px",
            padding: '24px',
            minHeight: 280,
            background: "#fff",
            borderRadius: "12px",
          }}
        >
          
        <Outlet></Outlet>
      
        </Content>
       
    </div>
  )
}

export default MyContent
