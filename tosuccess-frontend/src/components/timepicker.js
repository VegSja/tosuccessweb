import {React, Component} from 'react';
import TimePicker from 'react-bootstrap-time-picker';

export default class TimePickerBootstrap extends Component{
    constructor(props){
        super(props);
    }


    render(){

        return(
            <div>
                <TimePicker start={this.props.start} end={this.props.end} step={this.props.step} />
            </div>
        )
    }
    
}
