import React from 'react';
import { Tabs } from 'antd';
import bellotero from '../../assets/images/bellotero.png'
import Home from  '../home/home';
import Configurator from '../configurator/configurator';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const Title = <img src={bellotero} width="150" height="30" />

const Header = () => (
  <div>
    <Tabs defaultActiveKey="2" onChange={callback} tabBarExtraContent={Title} >
      <TabPane tab="Home" key="1">
        <Home/>
      </TabPane>
      <TabPane tab="Solutions" key="2">
        <Configurator/>
      </TabPane>
      <TabPane tab="Stories" key="3">
        Stories
      </TabPane>
      <TabPane tab="Partners" key="4">
        Partners
      </TabPane>
      <TabPane tab="About" key="5">
        About
      </TabPane>
      <TabPane tab="Blog" key="6">
        Blog
      </TabPane>
    </Tabs>
  </div>
);

export default Header;