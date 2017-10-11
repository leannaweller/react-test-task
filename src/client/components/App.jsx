import Form from './Form.jsx';
import React,{Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import ItemList from './items/ItemList.jsx';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {addItem,deleteItem} from '../reducer/actions'

import './App.css'

 class App extends React.Component {
  render() {
    const {items, addItem, deleteItem} = this.props;
    return (
      <Tabs>
        <Tab label="Add item">
          <Form addItem={addItem}/>
        </Tab>
        <Tab label="Show items">
            <ItemList items={items} deleteItem={deleteItem}/>
        </Tab>
      </Tabs>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    addItem: bindActionCreators(addItem, dispatch),
    deleteItem: bindActionCreators(deleteItem, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchtoProps)(App);
