import {React, Component} from 'react'

import {Button} from 'react-bootstrap'

import logo from "../../static/img/delete.svg"

export default class DeleteButton extends Component {
    render(){
        const style = {
            margin:"auto",
            position: this.props.position,
            backgroundColor: "white",
            borderColor: "white",
            color: "black",
            right: "1%",
            top:"5%"
        }

        return(
            <div>
                <Button type="Danger" style={style} onClick={this.props.onClick}>
                    <img src={logo} height="20vh" width="20vh" />
                </Button>
            </div>
        )
    }
}
//TODO: https://www.flaticon.com/free-icon/delete_3221845?term=delete%20bin&page=1&position=13&page=1&position=13&related_id=3221845&origin=tag