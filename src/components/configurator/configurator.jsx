import React, { Component } from 'react'
import { Row, Col, InputNumber, Slider } from 'antd';

export default class configurator extends Component {
    constructor(props){
        super(props);
        this.state = {
            monthly: 10,
            fulltime: 1,
            food: 0,
            anual: 0
        }
        this.onChangeMontly = this.onChangeMontly.bind(this);
        this.onChangeFulltime = this.onChangeFulltime.bind(this);
    }

    onChangeMontly(monthly){
        this.setState({monthly, food: monthly * 0.03})
    }

    onChangeFulltime(fulltime){
        const { food } = this.state
        this.setState({fulltime, anual: fulltime * 1337 + food })
    }

    render() {
        const { monthly, fulltime, food, anual } = this.state
        return (
            <div className="backgroundColor">
                <Row>
                    <Col span={12}>
                        <div className="title-container">
                            <div className="title-save">
                                <span>
                                <p className="Our-customers-love-u"><span>lorem ipsum 
                                    <br/> <br/> Bellotero</span>  </p>
                                </span>
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
                                    <p className="dollar-sign">$</p>
                                    <InputNumber 
                                        className="input-number-monthly" 
                                        value={monthly} 
                                        size="large" 
                                        formatter={value => `${value}.00`.replace('/\B(?=(\d{3})+(?!\d))/g', ',')}
                                        parser={value => value.replace(/\$\s?|(,*)/g, '')}/>
                                </Col>
                            </div>
                            <Col span={18}>
                                <div className="slider-container">
                                    <Slider
                                        min={10}
                                        max={100}
                                        onChange={this.onChangeMontly}
                                    />
                                </div>
                            </Col>
                            <div className="controls-container">
                                <Col span={12}>
                                    <p className="Monthly-ingredient-s">Full-time employees that process invoices</p>
                                </Col>
                                <Col span={6}>
                                    <InputNumber 
                                        className="input-number-fulltime" 
                                        value={fulltime} 
                                        size="large"/>
                                </Col>
                            </div>
                            <Col span={18}>
                                <div className="slider-container">
                                    <Slider
                                        min={1}
                                        max={10}
                                        onChange={this.onChangeFulltime}
                                    />
                                </div>
                            </Col>
                            <Col span={10}>
                                <div className="price-estimate">
                                    <p>$</p>
                                    <p>{food.toFixed(2)}</p>
                                </div>
                                <p className="cost-title">Estimated cost food savings</p>
                            </Col>
                            <Col span={8}>
                                <div className="price-estimate">
                                    <p>$</p>
                                    <p>{anual.toFixed(2)}</p>
                                </div>
                                <p className="cost-title">Your estimated annual savings</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}
