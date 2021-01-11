import { Autorenew } from '@material-ui/icons'
import {React, Component} from 'react'

import {Button} from 'react-bootstrap'

export default class DeleteButton extends Component {
    render(){
        const style = {
            margin:"auto",
            position: "absolute",
            right: "1%",
            top:"5%"
        }

        return(
            <div>
                <Button style={style} onClick={this.props.onClick}>Delete</Button>
            </div>
        )
    }
}