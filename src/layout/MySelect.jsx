import React from 'react'
import { Select, Space } from 'antd';
const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
const MySelect = () => {
  return (
    <Space wrap>
    <Select
      defaultValue="Active"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'Active',
          label: 'Active',
        },
        {
          value: 'Start',
          label: 'Start',
        },
        {
          value: 'End',
          label: 'End',
        },
        {
          value: 'disabled',
          label: 'Disabled',
          disabled: true,
        },
      ]}
    />

  </Space>
  )
}

export default MySelect