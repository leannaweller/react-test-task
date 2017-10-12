import React,{Component} from 'react';
import Paper from 'material-ui/Paper';

import './MultiSelect.css';

export default class MultiSelect extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false
    }
  }

  emitChange = (colors) => {
    this.props.onChange(colors);
  }

  hasColor = (color) => {
    const {colors} = this.props;
    const res  = colors.filter(el => el.hex == color.hex);
    return res.length ? true : false;
  }
  render() {
    const {options,colors,error} = this.props;
    const {show} = this.state;
    let _colors = colors.slice();
    return (
      <div className="multiselect">
        <div className="area">Select colors:
          <div className="selected-colors">
            {
              (error && error.colors) ?
              <span className="error">{error.colors}</span>
              :
              colors.map(color =>
                <span className="color-span"
                  style={{backgroundColor:color.hex}}
                  key={color.hex}
                  onClick={()=>{
                    this.emitChange(this.hasColor(item));
                  }}>
                </span>)

            }
          </div>
          <i className="ion-arrow-down-b"
            onClick={()=>{this.setState({show:!show})}}
          >
          </i>
        </div>
        <div className="list" style={{display: show ? 'block' : 'none'}}>
          <Paper>
            <ul>
              {
                options.map(option => <li style={{backgroundColor:`${option.hex}`}}
                  onClick={() => {
                    if(!this.hasColor(option)){
                      _colors.push(option);
                      this.setState({show:false});
                      this.emitChange(_colors);
                    }
                  }}
                  key={option.rgb}>
                  {
                    this.hasColor(option) &&
                    <i className="ion-checkmark-round"></i>
                  }
                    <span>{option.name}</span>
                  </li>)
              }
            </ul>
          </Paper>
        </div>
      </div>
    );
  }
}
