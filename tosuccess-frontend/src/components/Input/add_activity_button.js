import {React, Component} from 'react';

import {Button, Link, Container} from "react-floating-action-button";

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default class AddActivityButton extends Component{
    constructor(props){
        super(props);
    }

    style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
        outline: "none"
    };

    render(){
        return (
            <Fab color="primary" aria-label="add" style={this.style} onClick={this.props.handleClick}>
                <AddIcon />
            </Fab>
          );
    }
}