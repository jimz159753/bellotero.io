import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getData } from '../store/actions';
import { Row, Col, Icon, Pagination } from 'antd';


const itemRender = (current, type, originalElement)  => {
    if (type === 'prev') {
      return <Icon type="arrow-left" />;
    }
    if (type === 'next') {
      return <Icon type="arrow-right" />;
    }
    return originalElement;
  }

export class home extends Component {
    constructor(props){
        super(props);
        this.state = {
            current: 0,
            size: 10,
            title: '',
            reviews: []
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(current, pageSize) {
        this.setState({current});
    }

    componentDidMount() {
        const { getData } = this.props;
        getData('https://raw.githubusercontent.com/Bernabe-Felix/Bellotero/master/page1.json')
        const { request } = this.props;
        this.setState({title: request.slider && request.slider.title, reviews: request.slider && request.slider.reviews})
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate',prevProps, prevState)
    }

    render() {
        console.log('RENDER',this.state)
        const { current, size, title } = this.state;
        const { request } = this.props;
        return (
            <div className="backgroundColor">
                <Row>
                    <div className="Rectangle">
                        <p className="Our-customers-love-u-1">{title}</p>
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
                                <p>{current}/{size}</p>
                            </div>
                            <div className="Rectangle-pagination">
                                <Pagination simple defaultCurrent={1} current={current} onChange={this.onChangePage} itemRender={itemRender} />
                            </div>
                        </div>
                    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(home);
