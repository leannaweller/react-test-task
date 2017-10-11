import React,{Component} from 'react';
import Paper from 'material-ui/Paper';

import './MultiSelect.css';

export default class MultiSelect extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected:[],
      show: false
    }
  }

  emitChange = (colors) => {
    this.props.onChange(colors);
  }

  hasColor = (color) => {
    const {selected} = this.state;
    const res  = selected.filter(el => el.hex == color.hex);
    return res.length ? true : false;
  }
  render() {
    const {options} = this.props;
    const {show,selected} = this.state;
    let _selected = selected.slice();
    return (
      <div className="multiselect">
        <div className="area">Select colors:
          <div className="selected-colors">
            {
              selected.map(color =>
                <span className="color-span"
                  style={{backgroundColor:color.hex}}
                  key={color.hex}
                  onClick={()=>{
                    _selected = _selected.filter(item => color.hex != item.hex);
                    this.setState({selected:_selected});
                    this.emitChange(_selected);
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
                      _selected.push(option);
                      this.setState({selected:_selected,show:false});
                      this.emitChange(_selected);
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
