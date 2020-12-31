import {React, Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default class DatePicker extends Component{
    constructor(props){
        super(props);
        this.state = {
            label : this.props.label,
            defaultValue : this.props.value,
            onChange : this.props.onChange,
        }
    }

    render(){
        return(
            <form noValidate>
                <TextField
                    id="date"
                    label={this.state.label}
                    type="date"
                    defaultValue={this.state.defaultValue}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    onChange={this.state.onChange}
                />
            </form>
        )
    }
}