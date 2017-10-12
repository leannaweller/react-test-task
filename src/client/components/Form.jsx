import React,{Component} from 'react';
import MultiSelect from './custom/MultiSelect.jsx';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import options from '../colors.json';
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
    let error = null;
    if(!colors.length || (text.length < 4 || text.length >8)){
      error = {};
      if(!colors.length){
        error.text = 'Invalid text';
      }
      if (text.length < 4 || text.length >8){
        error.colors = 'Invalid colors';
      }
    }else{
      addItem({name:text, colors, id:uid()});
    }
    this.setState({text:'',colors:[],error});
  }
  render(){
    const style = {
        maxWidth:'50%',
        margin:'50px auto',
        padding:'30px'
      }
    const {error,text,colors} = this.state;
    return (
      <Paper style={style}>
        <form action="" className="item-form">
          <h3>Add items to collection:</h3>
          <TextField
            hintText="Radiator"
            floatingLabelText="Name"
            errorText={(error && error.text) ? "Invalid name" : "" }
            value={text}
            onChange={(e) => this.handleChange(e,'text')}/>
          <MultiSelect
            onChange={(e) => this.handleChange(e,'select')}
            options={options.slice(0,12)}
            colors={colors}
            error={error}
            />
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
