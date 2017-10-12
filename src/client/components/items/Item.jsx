import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import './Item.css';

export default class Item extends React.Component {
  render() {
    const {data, deleteItem} = this.props;
    return (
      <div className="item">
        <Paper style={{height:'100%',padding:'10px'}}>
          <h3>Name: {data.name}</h3>
          <div className="colors">
            <h3>Colors:</h3>
            <div className="color-list">
              {
                data.colors.map(color =>
                  <span
                    className="color-circle"
                    style={{backgroundColor:color.hex}}>
                  </span>)
              }
            </div>
          </div>
          <RaisedButton
            secondary={true}
            label="Delete"
            type="submit"
            onClick={()=>{deleteItem(data.id)}}/>
        </Paper>
      </div>
    );
  }
}
