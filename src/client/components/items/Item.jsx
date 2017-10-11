import React,{Component} from 'react';
import Paper from 'material-ui/Paper';

import './Item.css';

export default class Item extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <Paper>
        <div className="item">
          <h3>{data.name}</h3>
        </div>
      </Paper>
    );
  }
}
