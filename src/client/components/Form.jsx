import React,{Component} from 'react';
import MultiSelect from './custom/MultiSelect.jsx';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import colors from '../colors.json';
import uid from 'uid';

import './Form.css';

export default class Form extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null,
      colors:[],
      text:''
    }
  }

  handleChange = (e,type) => {
    if(type == 'select'){
      this.setState({colors:e});
    }
    if(type == 'text'){
      this.setState({text:e.target.value});
    }
  }

  submit = () => {
    const {addItem} = this.props;
    const {text,colors} = this.state;
    addItem({name:text, colors, id:uid()});
  }
  render(){
    const style = {
        maxWidth:'50%',
        margin:'50px auto',
        padding:'30px'
      }
    const {error} = this.state;
    return (
      <Paper style={style}>
        <form action="" className="item-form">
          <h3>Add items to collection:</h3>
          <TextField
            hintText="Radiator"
            floatingLabelText="Name"
            errorText={error ? "Invalid name" : ""}
            onChange={(e) => this.handleChange(e,'text')}/>
          <MultiSelect
            onChange={(e) => this.handleChange(e,'select')}
            options={colors.slice(0,12)}/>
          <RaisedButton
            secondary={true}
            style={{marginTop:'20px'}}
            label="Submit"
            onClick={this.submit}/>
        </form>
      </Paper>
    );
  }
}
