import {React, Component} from 'react';

//Bootstrap imports
import {Card} from 'react-bootstrap';

export default class ActivityCard extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Card className="activity-card">
            <Card.Body>
        <Card.Title>{this.props.start_time} - {this.props.end_time}</Card.Title>
                <Card.Subtitle className="activity-name">{this.props.activity_name}</Card.Subtitle>
            </Card.Body>
            </Card>
        )
    }
}