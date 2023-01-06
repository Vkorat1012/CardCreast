import React,{ useState } from 'react';
import { Button,Card, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import ColumnOne from './column_one';
import CardShow from './cardShow';
import Test from './test';
import ModalForm from './ModalForm';
import { Form } from 'antd';


const tabList = [
  {
    key: 'tab1',
    tab: 'Saved Cards',
  },
  {
    key: 'tab2',
    tab: 'GD Cards',
  },
];
const contentList = {
  tab1: <div style={{display : 'flex' }}>
            <div>  
              <ColumnOne />
            </div>
            <div style={{display : 'box',paddingLeft : '30px' }} >
                <CardShow  type= "debit"/>
                <div style ={{paddingTop : '25px'}}>
                  <CardShow   type = "credit"/>
                </div>
            </div>
        </div> 
        ,
  tab2: <p><Test /></p>,
};
const Content_box = (props) => {
  const [form] = Form.useForm();

  // Cards start 
  const [activeTabKey1, setActiveTabKey1] = useState('tab1');
  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };
  // Cards End

  // modal starts
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
    console.log(e);
    form.submit();
    setOpen(false);
  };
  const handleCancel = (e) => {
    console.log(e);
    form.submit();
    setOpen(false);
  };
  // modal ends
  return (<>   
  <Card style={{width: '100%'}}
    tabList={tabList}
    activeTabKey={activeTabKey1}
    tabBarExtraContent={ <Button onClick={showModal} style={{marginLeft : "auto" , marginRight : "10px" }} type="primary"><PlusOutlined />Add Card</Button>}
    onTabChange={(key) => {
      onTab1Change(key);
    }}> 
  
  <div style={{minHeight : "300px"}}>
    {contentList[activeTabKey1]}
  </div>
  <Modal
        title="Add New Card"
        open={open}
        //\\ onOk={handleOk}
        // onCancel={handleCancel}
        // okButtonProps={{
        //   disabled: false,
        // }}
        // cancelButtonProps={{
        //   disabled: false,
        // }}
        footer ={null} > 
        <ModalForm  form="form"  handleCancel ={handleCancel} handleSubmit={handleOk} />
      
  </Modal>
  </Card>

</>

  )
}

export default Content_box