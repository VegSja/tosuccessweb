import {React, Component} from "react"

import {Spinner} from "react-bootstrap"

export default class LoadingPage extends Component{
    render(){
        return(
            <div>
                <Spinner animation="grow" className="loading-table" />
            </div>
        )
    }
}