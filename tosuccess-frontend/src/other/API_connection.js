const axios = require('axios');

export default class API_Connection {
    constructor(token){
        this.url_activities = "http://vegsja.pythonanywhere.com/activities/"
        this.url_date = "http://vegsja.pythonanywhere.com/date/"
        this.token = token;
    }

    async get_current_date(){
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

    async get_activities(){
        const res = await axios.get(this.url_activities, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then((res) => {
            this.activities = res.data;
            return(this.activities);
        })
    }
}