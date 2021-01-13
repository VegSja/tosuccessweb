import {React, Component} from 'react';

import {Button, Link, Container} from "react-floating-action-button";

export default class AddActivityButton extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>    
                <Container>       
                <Button
                    tooltip="The big plus button!"
                    text="fa fa-plus"
                    rotate={true}
                    onClick={this.props.handleClick} />
                </Container>
            </div>
          );
    }
}