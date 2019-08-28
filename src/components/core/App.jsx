import React, { Component } from 'react';
import '../../assets/css/App.css';
import Header from '../header/header';
import { connect } from 'react-redux';
import { getData } from '../store/actions';

class mainApp extends Component {
  
  componentDidMount() {
    const { getData } = this.props
    
    this.props.getData(8777)
    console.log('DIDMOUNT',this.props)
  }
  
  render(){
    console.log('RENDER',this.props)
    return (
      <div>
        <Header/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = {
  getData
}

export default connect(mapStateToProps, mapDispatchToProps)(mainApp);
