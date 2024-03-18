import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import { Link } from 'react-router-dom'

function DropdownItems({ Category }) {
  const { C1, C2, C3 } = Category
  const items = [
    {
      key: '1',
      label: <Link to="https://www.antgroup.com">{C1}</Link>,
    },
    {
      key: '2',
      label: <Link to="https://www.antgroup.com">{C2}</Link>,
    },
    {
      key: '3',
      label: <Link to="https://www.antgroup.com">{C3}</Link>,
    },
  ]
  return (
    <>
      <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-lg font-medium">
            Category
            <DownOutlined style={{ fontSize: '12px' }} />
          </Space>
        </a>
      </Dropdown>
    </>
  )
}

export default DropdownItems
