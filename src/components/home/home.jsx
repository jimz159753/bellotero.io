import React, { Component } from 'react'
import { Row, Col, Icon } from 'antd';

export class home extends Component {
    render() {
        return (
            <div className="backgroundColor">
                <Row>
                    <div className="Rectangle">
                        <p className="Our-customers-love-u">Our customers love us</p>
                    </div>
                </Row>
                <Row>
                    <div className="Rectangle-testimony">
                        <Col span={6}>
                            <div className="customer">
                                <h1>Pete Zahut</h1>
                                <p>Chef @ Maniak</p>
                            </div>
                        </Col>
                        <Col span={14}>
                            <div className="Its-funny-what-mem">
                                <p>“It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail"</p>
                            </div>
                        </Col>
                        <div className="Pagination-container">
                            <div className="Rectangle-number-pagination">
                                <p>1/4</p>
                            </div>
                            <div className="Rectangle-pagination">
                                <Icon type="arrow-left" />
                                <Icon type="arrow-right" />
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        )
    }
}

export default home
