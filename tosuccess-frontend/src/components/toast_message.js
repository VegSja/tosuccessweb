import {React, Component} from 'react'

import { Toast } from 'react-bootstrap'

export default class ToastMessage extends Component{
    constructor(props){
        super(props);
        this.state = {
            message : this.props.message,
        }
    }
    render(){
        return(
            <Toast>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Tosuccess</strong>
                </Toast.Header>
                <Toast.Body>{this.state.message}</Toast.Body>
            </Toast>
        );
    }
}