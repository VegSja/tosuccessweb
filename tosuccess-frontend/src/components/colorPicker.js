import {React, Component} from 'react'

import { CirclePicker } from 'react-color'

export default class ColorPicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            color : this.props.defaultColor,
        }
    }

    render(){
        return(
            <CirclePicker
                color={this.state.defaultColor}
                onChange={ this.props.onChange }
            />
        )
    }
}