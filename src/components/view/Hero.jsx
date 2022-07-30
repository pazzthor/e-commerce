import React, { useState } from 'react'
import { Menu, Row, Col , Carousel, Image , Card} from 'antd'
import { items } from '../data/herodata'

//CAROUSEL ITEMS



const Hero = () => {

  const [current, setCurrent] = useState('');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };


  return (
    <div className='mainHero'>
        <div className='hero-banner'>
          <Row>
            <Col xs={8} sm={7} md={6} lg={5}>
              <div className='hero-menu'>
                <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={items} />;
              </div>
            </Col>
            <Col xs={16} sm={17} md={18} lg={19}>
              <div className='col-right'>
                      <Carousel effect="fade" autoplay>
                        <div>
                          <Image width={'100%'} height={400} src="https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </div>
                        <div>
                          <Image width={'100%'} height={400} src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </div>
                        <div>
                          <Image width={'100%'} height={400} src="https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </div>
                        <div>
                          <Image width={'100%'} height={400} src="https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        </div>
                      </Carousel>
              </div>
            </Col>
  
          </Row>
        </div>
        <div className='hero-card'>
            <Row gutter={[8, 8]} justify={'space-between'}>
              <div className='card'>
                  <h3>New Arrivals</h3>
                      <Row>
                        <Card
                            style={{width: 120,}}
                            cover={<img alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>        
                        </Card>

                        <Card
                            style={{width: 120,}}
                            cover={<img alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>
                        </Card>

                          <Card
                            style={{width: 120,}}
                            cover={<img alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>
                        </Card>


                      </Row>
              </div>

              <div className='card'>
                <h3>Top Rank Products</h3>

                <Row>

                    <Card
                        style={{width: 120,}}
                        cover={<img alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>        
                    </Card>

                    <Card
                        style={{width: 120,}}
                        cover={<img alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>
                      </Card>

                      <Card
                        style={{width: 120,}}
                        cover={<img alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>
                      </Card> 
                  </Row>
                </div>
                <div>
                  <Row>
                    <Card
                        style={{width: 120,}}
                        cover={<img alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>        
                    </Card>

                    <Card
                        style={{width: 120,}}
                        cover={<img alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>
                    </Card>

                    <Card
                        style={{width: 120,}}
                        cover={<img alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}>
                    </Card>


                </Row>
              </div>
            </Row>
        </div>
    </div>
  )
}

export default Hero