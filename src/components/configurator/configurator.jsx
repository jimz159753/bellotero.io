import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getData } from '../store/actions';
import { Row, Col, InputNumber, Slider } from 'antd';

class configurator extends Component {
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

    componentDidMount() {
        const { getData } = this.props;
        getData('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page2.json')
    }

    render() {
        console.log('RENDER-PAGE2',this.props)
        const { monthly, fulltime, food, anual } = this.state
        const { request } = this.props
        return (
            <div className="backgroundColor">
                <Row>
                    <Col span={12}>
                        <div className="title-container">
                            <div className="title-save">
                                <span>
                                <p className="Our-customers-love-u"><span>{request.calculator && request.calculator.title}</span></p>
                                </span>
                            </div>
                        </div>
                        <div className="description-container">
                            <p>{request.calculator && request.calculator.description}</p>
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

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    getData
}

export default connect(mapStateToProps, mapDispatchToProps)(configurator);