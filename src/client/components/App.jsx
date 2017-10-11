import Form from './Form.jsx';
import React,{Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import './App.css'

export default class App extends React.Component {
  render() {
    return (
      <Tabs>
        <Tab label="Add item">
          <Form/>
        </Tab>
        <Tab label="Show items">
            
        </Tab>
      </Tabs>
    );
  }
}
