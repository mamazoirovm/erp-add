import React, { useState } from "react";
import "../index.css";
import {
    HomeFilled,
    ProfileFilled,
    SettingFilled,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Layout,  Button, theme, Table } from "antd";
import Sider from 'antd/es/layout/Sider'

import MyMenu from "./MyMenu";
import MyContent from "./MyContent";
const { Header, Content } = Layout;
const Root = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [span, setNoneSpan] = useState(true);
  const handleButtonClick = () => {
    setCollapsed(!collapsed);
    setNoneSpan(!span);
  };
  return (
    <Layout style={{ minHeight: "100%", background: "#00152a" }}>
         <Sider
        trigger={null}
        style={{ color: "#fff", width: 400, }}
        collapsible
        collapsed={collapsed}
      >
        <div className="demo-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="69px"
            height="46px"
            viewBox="0 0 69 46"
          >
            <g>
              <path d="M68.6634 13.8509L66.8451 14.1673C63.1394 14.8124 59.6919 15.7967 56.5541 16.9553V6.97317L55.5856 7.41088C53.3853 8.40349 51.2986 9.4407 49.31 10.5339L49.2429 0.075716L48.1897 0.751978C43.0664 4.0389 38.3685 7.7739 34.1734 11.8854C30.1332 8.04772 25.5788 4.32102 20.5783 0.769611L19.4942 0V10.8399C17.328 9.61703 15.1071 8.50306 12.8397 7.50734L11.8722 7.08208L11.9176 16.3641C8.59915 15.219 5.25795 14.4712 1.94669 14.133L0.317383 13.9671L13.3601 30.3426L13.3022 18.3555C15.5438 19.2341 17.6181 20.237 19.4952 21.2711V31.6484L19.6305 31.832C23.4652 37.0181 33.5539 45.4537 33.9813 45.8105L34.4181 46.1746L34.8569 45.8126C35.2844 45.4599 45.3803 37.1114 49.2181 31.7231L49.4442 31.3352L49.3823 21.6736C51.1458 20.7422 53.0848 19.8211 55.1808 18.9685V30.3934L68.6634 13.8509ZM56.5541 18.4292C59.2231 17.4189 62.1265 16.5332 65.2303 15.8828L56.5541 26.5267V18.4292ZM3.46551 15.7117C6.46289 16.1452 9.29609 16.8993 11.9228 17.839L11.9641 26.3815L3.46551 15.7117ZM47.8748 2.60133L47.8882 11.3336C44.8186 13.1031 41.9833 15.0219 39.3174 17.1399C38.7371 16.4989 38.1403 15.859 37.527 15.22C36.7588 14.4193 35.9658 13.6238 35.1543 12.8313C38.9818 9.08182 43.2109 5.68288 47.8748 2.60133ZM24.7703 22.8871C23.4859 22.0169 22.1828 21.2058 20.8674 20.4548V13.2452C23.4167 14.7937 25.8823 16.4989 28.2488 18.3514C27.0449 19.8149 25.8844 21.3271 24.7703 22.8871ZM29.3154 19.1998C30.6567 20.2879 31.9648 21.4236 33.2369 22.6039C32.0082 23.8486 30.8095 25.1545 29.6334 26.5277C28.5452 25.6285 27.2938 24.6576 25.8958 23.6661C26.9902 22.132 28.1291 20.6426 29.3154 19.1998ZM38.257 17.9998C36.8672 19.1511 35.5239 20.3584 34.2157 21.6331C32.9137 20.4227 31.5746 19.2589 30.2013 18.1439C31.4775 16.6452 32.8063 15.1951 34.1889 13.7928C35.621 15.1869 36.9777 16.5892 38.257 17.9998ZM38.0494 27.482C36.2085 28.9662 34.9364 30.1663 34.2787 30.8156C33.6458 30.1497 32.4264 28.9226 30.6856 27.4176C31.8451 26.0651 33.0283 24.7779 34.2395 23.552C35.5518 24.8142 36.8218 26.1242 38.0494 27.482ZM29.7945 28.4756C32.3159 30.66 33.7273 32.2479 33.749 32.2718L34.2488 32.8392L34.765 32.2863C34.7857 32.2635 36.2611 30.6963 38.9684 28.5161C39.8305 29.5035 40.6699 30.5148 41.4856 31.5478L34.4625 38.2181L27.3309 31.5955C28.1435 30.5179 28.9633 29.4786 29.7945 28.4756ZM35.2183 22.5822C36.4996 21.3365 37.8171 20.1561 39.1769 19.0308C40.5729 20.6208 41.8697 22.2181 43.0623 23.8175C42.9342 23.9025 42.8083 23.9866 42.6844 24.0695C41.3607 24.9595 40.1743 25.8235 39.1336 26.6263C37.8729 25.2291 36.5667 23.8808 35.2183 22.5822ZM40.2394 18.1719C42.6348 16.2749 45.1696 14.5407 47.8924 12.932L47.9047 20.9019C46.5656 21.6342 45.3328 22.3664 44.2156 23.0728C42.9982 21.4381 41.6715 19.8035 40.2394 18.1719ZM20.8674 2.67497C25.4146 5.96915 29.5415 9.37639 33.2059 12.849C32.4894 13.575 31.7873 14.3104 31.1017 15.0582C30.4336 15.7884 29.778 16.5342 29.1337 17.2914C26.4925 15.2221 23.7306 13.3313 20.8674 11.6354V2.67497ZM15.2764 17.6627C14.6166 17.3806 13.9548 17.113 13.2919 16.8619L13.2547 9.20629C15.3796 10.1771 17.4612 11.2537 19.4921 12.4289V19.6946C18.0972 18.9478 16.6899 18.2684 15.2764 17.6627ZM23.9794 24.0146C22.8953 25.5859 21.8566 27.1998 20.8685 28.8542V22.0522C21.9887 22.7118 23.0295 23.3736 23.9794 24.0146ZM34.4212 44.3792C32.4646 42.7196 24.4637 35.8388 21.0027 31.3653C22.2892 29.0876 23.6562 26.899 25.1049 24.7956C26.4605 25.7581 27.6799 26.7051 28.7434 27.5857C27.7687 28.7629 26.8085 29.9879 25.8576 31.2657L25.4869 31.7636L34.4728 40.109L43.34 31.6878L42.9559 31.1931C42.0194 29.9868 41.0509 28.8096 40.0525 27.6635C41.054 26.8918 42.1898 26.0651 43.4495 25.2188C43.5889 25.1244 43.7324 25.0289 43.8769 24.9335C45.3844 27.0432 46.7112 29.1571 47.8459 31.2647C44.4004 35.8854 36.3819 42.731 34.4212 44.3792ZM47.9161 28.5959C47.0447 27.1303 46.0824 25.6606 45.0302 24.1888C45.9172 23.6298 46.8774 23.0541 47.9068 22.4764L47.9161 28.5959ZM49.3699 20.1229L49.3182 12.1084C51.1799 11.0619 53.1282 10.0672 55.1788 9.11502V17.4822C53.089 18.3099 51.1468 19.2081 49.3699 20.1229Z"></path>
            </g>
          </svg>
          {span && <span className="logo-text">Teacher</span>}
        </div>
     <MyMenu/>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            color: "#fff",
            background: "#00152a",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={handleButtonClick}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              color: "#fff",
            }}
          />
        </Header>
     <MyContent/>
      </Layout>
    </Layout>
  );
};
export default Root;