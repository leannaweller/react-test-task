import React,{Component} from 'react';


import './MultiSelect.css';

export default class MultiSelect extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected:[]
    }
  }
  render() {
    const {options} = this.props;
    return (
      <div className="multiselect">
        <div className="area"></div>
        <div className="list">
          <ul>
            {
              options.map(option => <li style={{backgroundColor:`${option.hex}`}} 
                key={option.rgb}> {option.name}</li>)
            }
          </ul>
        </div>
      </div>
    );
  }
}
