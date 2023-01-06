import { Button, Form, Input, Select, Row,DatePicker, Col, Checkbox } from 'antd';
import { useFormik } from 'formik';
//import { useState } from 'react';
import { useDispatch ,useSelector} from "react-redux";
import {signUpSchema} from '../schemas/index'


import '../css/form.css'
const initialValues={
  name:'',
  number :'',
  bank_name:'',
  card_type : '',
  cvv:'',
  // expiry : ''
}
function ModalForm(props) {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cardItem.cards);
  const initialState = useSelector((state)=>state.cardItem)

 const { values,errors,handleBlur,handleChange,handleSubmit,touched, setFieldValue } = useFormik({
   initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values,actions)=>{
      // console.log("registration Deatils",values)
      actions.resetForm()
      props.handleSubmit()

      dispatch({
        type :"ADD_TO_CARD",
        payload : values,
        extra :  values.card_type
      })      
   console.log("cards",initialState)
    },
 

  }) 


  return (
    <>
      <Form layout="vertical" onFinish={handleSubmit}   >
       
        <Form.Item label="Name:">
          <Input 
          placeholder="i.e. James Carlon" name='name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
          {errors.name && touched.name && (<p className='error-msg'>{errors.name}</p>) }
        </Form.Item>

        <Form.Item label="Bank Name:">
          <Input placeholder="i.e. HDFC BANK" name='bank_name' value={values.bank_name} onChange={handleChange} onBlur={handleBlur}/>
          {errors.bank_name && touched.bank_name ? (<p className='error-msg'>{errors.bank_name}</p>):null}
        </Form.Item>

        <Form.Item label="Card Type:">
          <Select name='card_type' onChange={(value) => setFieldValue("card_type", value)} onBlur={handleBlur}
            placeholder='Select Card Type' >
              <Select.Option value="credit">credit</Select.Option>
              <Select.Option value="debit">debit</Select.Option>
          </Select>
         
        
        </Form.Item>

        <Form.Item label="Card Number:">
          <Input type='number' placeholder="i.e. 7754 1542 6584 4875" name='number' value={values.number} onChange={handleChange} onBlur={handleBlur}/>
          {errors.number && touched.number ?(<p className='error-msg'>{errors.number}</p>):null}
        </Form.Item>

        <Row>
          <Col span={8}>
             <Form.Item label="Valid Till:" >
            <DatePicker minDate={new Date()} picker="month"
             name="expiry"
              value={values.checkIn}
              onChange={(value) => setFieldValue("checkIn", value)}/>
    
            </Form.Item> 
          </Col>
          <Col span={5}>
            <Form.Item label="CVV:">
              <Input type='password' placeholder="_ _ _"  name='cvv' value={values.cvv} onChange={handleChange} onBlur={handleBlur}/>
              {errors.cvv && touched.cvv ? (<p className='error-msg'>{errors.cvv}</p>):null}
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Checkbox>Set this card as Default</Checkbox>
        </Form.Item>

        <Form.Item>
          <Checkbox>Add this card to GPay?</Checkbox>
        </Form.Item>

        <div className='bottom_line'> </div>

        <div className='footer'>
        <Form.Item className='footer'> 
          <Button className='cancel-primary' onClick={props.handleCancel}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" on className='submit-primary'>
            Submit
          </Button>
        </Form.Item> 
        </div>
      </Form>
    </>
  )
}

export default ModalForm
