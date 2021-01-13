import {React, Component} from 'react'

import {Table} from 'react-bootstrap';

import ActivityCard from './Card/activityCard';
import sort_array_based_on_key from '../../other/sorting'

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
        activities_array = sort_array_based_on_key(activities_array, "minutes_after_midnight_start")
        const items = []
        for(const activity of activities_array){
            var category = activity.activity_category
            var currentColor = this.props.colorList[category]
            items.push(<tr><ActivityCard api={this.props.api} activity_name={activity.activity_name} activity_category={category} color={currentColor} start_time={activity.minutes_after_midnight_start} end_time={activity.minutes_after_midnight_end} unique_id={activity.unique_id} /> </tr>);
        }
        return items;
    }

    //TODO: Sort start time on the different activities before creating
}