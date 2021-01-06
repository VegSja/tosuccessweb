import {React, Component} from 'react';

//Bootstrap imports
import {Card} from 'react-bootstrap';

import CategoryDisplay from './category_display'

//Other imports
import DateHandler from '../other/dateHandler';


export default class ActivityCard extends Component{
    constructor(props){
        super(props);
        const dateHandler = new DateHandler();
        this.start_time = dateHandler.timeConvert(this.props.start_time)
        this.end_time = dateHandler.timeConvert(this.props.end_time)
    }


    render(){
        return(
            <Card className="activity-card">
            <Card.Body>
                <Card.Title>
                <CategoryDisplay category={this.props.activity_category} color={this.props.color} position_style="absolute"/>
                    {this.start_time} - {this.end_time}
                </Card.Title>
                <Card.Subtitle className="activity-name">{this.props.activity_name}</Card.Subtitle>
            </Card.Body>
            </Card>
        )
    }
}