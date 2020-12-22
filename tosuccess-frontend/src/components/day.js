import {React, Component} from 'react'

import {Table} from 'react-bootstrap';

import ActivityCard from './activityCard';

export default class Day extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Table>
            <thead>
                <th>{this.props.date}</th>
            </thead>
            <tbody>
                {this.createJSXItems(this.props.activities_for_day)}
            </tbody>
        </Table>
        )
    }

    //Creates the JSX items used to populate the table from the object created in CreateActivityObject function
    createJSXItems(activities_array){
        const items = []
        for(const activity of activities_array){
            items.push(<tr><ActivityCard activity_name={activity.activity_name} start_time={activity.start_time} end_time={activity.end_time} /> </tr>);
        }
        return items;
    }

    //TODO: Sort start time on the different activities before creating
}