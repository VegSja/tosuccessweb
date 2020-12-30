const axios = require('axios');

export default class API_Connection {
    constructor(token){
        this.url_activities = "http://vegsja.pythonanywhere.com/activities/"
        this.url_date = "http://vegsja.pythonanywhere.com/date/"
        this.token = token;
    }

    async get_current_date(){
        console.log("Getting current date", this.token)
        const res = await axios.get(this.url_date, {
            headers: {
                "Authorization": `Bearer ${this.token}` 
            }
        })
        .then((res) => {
            this.date = res.data;
            return(this.date)
        })
    }
    // + "?date="+ date.toString() + "?nb_days=2"
    async get_activities(date, nb_days=2){
        const res = await axios.get(this.url_activities + "?date="+ date.toString() + "&nb_days=" + nb_days.toString(), {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then((res) => {
            this.activities = res.data;
            return(this.activities);
        })
    }

    async post_activity(name, minutes_start, minutes_end, dayNumber, date_string){
        const data = {
            activity_name: name ,
            minutes_after_midnight_start: minutes_start,
            minutes_after_midnight_end: minutes_end,
            date: dayNumber,
            date_string: date_string,
        }
        const res = await axios.post(this.url_activities, data, {
            'Content-Type': 'text/json',
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then((res) => {
            console.log("Successfully posted data")
        })
    }
}