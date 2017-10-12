import React,{Component} from 'react';
import Item from './Item.jsx';
import Paper from 'material-ui/Paper';
import {GridList} from 'material-ui/GridList';

import './ItemList.css';


export default class ItemList extends React.Component {
  render() {
    const {items,deleteItem} = this.props;
    return (
      <div className="item-list">
        <GridList cols={3}>
          {
            items.map((item,index) => <Item data={item} key={index} deleteItem={deleteItem}/>)
          }
        </GridList>
      </div>
    );
  }
}
