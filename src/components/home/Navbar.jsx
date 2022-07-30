import React, { useState } from 'react'
import { Input, Space, Menu, Anchor, Col, Row } from 'antd';

import {RiCustomerService2Line} from 'react-icons/ri'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { category } from '../data/navdata'


const { Search } = Input;
const { Link } = Anchor
const onSearch = (value) => console.log(value);



const Navbar = () => {

    const [current, setCurrent] = useState('');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    }

  return (
    <div className='main-nav'>
        <div className='menu-wrapper'>
            <div className='header-left'>
                <Anchor>
                    <Link href="contac" title="Seller Contact" />
                    <Link href="contac" title="Sell here" />
                    <Link href="contac" title="Follow us" />
                </Anchor>
            </div>
            <div className='header-right'>
                <Anchor>
                    <Link href="#components-anchor-demo-basic" title="Notification"  />
                    <Link href="#components-anchor-demo-basic" title="Sign Up"  />
                    <Link href="#components-anchor-demo-basic" title="Sign In"  />
                </Anchor>
                
                
            </div>

        </div>
        <div className='nav-wrapper'>
          <Row>
              <Col xs={8} sm={7} md={6} lg={5}>
                  <div className='logo'>
                      <h1>XV-LOGO</h1>
                  </div>
              </Col>
              <Col xs={12} sm={13} md={14} lg={15} >
                      <Search placeholder="input search text" onSearch={onSearch} enterButton />
              </Col>
              <Col xs={4} sm={4} md={4} lg={4} >
                      <div className='shop-icon'>
                          <AiOutlineShoppingCart size={30}/>
                      </div>
              </Col>
          </Row>
        </div>
        <div className='header-lower'>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={category} />
        </div>
        

    </div>
  )
}

export default Navbar