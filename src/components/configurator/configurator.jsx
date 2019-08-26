import React, { Component } from 'react'
import { Row, Col, InputNumber, Slider } from 'antd';

export default class configurator extends Component {
    render() {
        return (
            <div className="backgroundColor">
                <Row>
                    <Col span={12}>
                        <div className="title-container">
                            <div className="title-save">
                                <p className="Our-customers-love-u">Save more with</p>
                            </div>
                            <div className="title-save">
                                <p className="Our-customers-love-u">Bellotero.io</p>
                            </div>
                        </div>
                        <div className="description-container">
                            <p>With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety.</p>
                        </div>
                    </Col>
                    <Col span={12}> 
                        <Row>
                            <div className="controls-container">
                                <Col span={12}>
                                    
                                        <p className="Monthly-ingredient-s">Monthly ingredient spending</p>
                                    
                                </Col>
                                <Col span={12}>
                                    <InputNumber className="input-number" value={5} size="large" formatter={value => `$ ${value}`.replace('/\B(?=(\d{3})+(?!\d))/g', ',')}/>
                                </Col>
                            </div>
                            <Col span={18}>
                                <div className="slider-container">
                                    <Slider
                                        min={1}
                                        max={20}
                                    />
                                </div>
                            </Col>
                            <Col span={12}>
                                <div className="controls-container">hello</div>
                            </Col>
                            <Col span={12}>
                                <div className="controls-container">hello</div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
            </div>
        )
    }
}
