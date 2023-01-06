//  

import React from 'react';
import { DownCircleTwoTone , UserOutlined } from '@ant-design/icons';
import { Button, Dropdown, message, Space } from 'antd';
import { CreditCardTwoTone } from '@ant-design/icons';
import '../css/content.css';
const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};
const items = [
  {
    label: '1st menu item',
    key: '1',
    icon: <UserOutlined />,
  },
  {
    label: '2nd menu item',
    key: '2',
    icon: <UserOutlined />,
  },
  {
    label: '3rd menu item',
    key: '3',
    icon: <UserOutlined />,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const ColumnOne = () => {
  return (
    <div>
<Dropdown menu={menuProps} >
      <Button className= 'dropdown--menu'>
        
      <CreditCardTwoTone style={{paddingRight : "10px"}} /> 
        <Space className='dropdown--content'>
       
          <span > Card Details</span>
          <div ><DownCircleTwoTone /></div>
   
        </Space>
      </Button>
</Dropdown>

    </div>
  )
}

export default ColumnOne