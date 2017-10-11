import React,{Component} from 'react';
import MultiSelect from './custom/MultiSelect.jsx';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import colors from '../colors.json';

import './Form.css';

export default class Form extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const style = {
      maxWidth:'50%',
      margin:'50px auto',
      padding:'30px'
    }
    return (
      <Paper style={style}>
        <form action="" className="item-form">
          <h3>Add items to collection:</h3>
          <TextField
            hintText="Radiator"
            floatingLabelText="Name"/>
          <MultiSelect options={colors}/>
          <RaisedButton secondary={true} style={{marginTop:'20px'}} label="Submit"/>
        </form>
      </Paper>
    );
  }
}
