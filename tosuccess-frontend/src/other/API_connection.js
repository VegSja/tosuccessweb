const axios = require('axios');

export default class API_Connection {
    constructor(token, refreshToken){
        this.url_activities = "https://vegsja.pythonanywhere.com/activities/"
        this.url_categories = "https://vegsja.pythonanywhere.com/categories/"
        this.url_date = "https://vegsja.pythonanywhere.com/date/"
        this.url_refresh = "https://vegsja.pythonanywhere.com/refresh/"
        this.token = token;
        this.refreshToken = refreshToken;


        this.categories = undefined;

        this.errorFromServer = false;
        this.errorMessage = null;

        //Save to localstorage
        localStorage.setItem("current_token", this.token)
        localStorage.setItem("refresh_token", this.refreshToken)
    }

    handleError(errorMessage){
        console.log("Error from server: ", errorMessage)
        this.errorFromServer = true;
        this.errorMessage = errorMessage;
        throw errorMessage;
    }

    async sendRefreshToken(){
        const data = {
            refresh : this.refreshToken,
        }
        const res = await axios.post(this.url_refresh, data, {
            'Content-Type' : 'text/json'
        })
        .then((res) => {
            this.token = res.data.access;
            localStorage.setItem('current_token', this.token)
            this.errorFromServer = false;
            //this.errorMessage = null;
        })
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
        .catch((error) => {
            this.handleError(error.request.statusText);
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
        .catch((error) => {
            this.handleError(error.request.statusText);
        })
    }

    async post_activity(name, category, minutes_start, minutes_end, dayNumber, date_string){
        const data = {
            activity_name: name ,
            activity_category : category,
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
            console.log("Successfully posted data:", data)
        })
        .catch((error) => {
            this.handleError(error.request.statusText);
        })
    }

    async post_category(name, color){
        const data = {
            name: name,
            color: color,
        }
        const res = await axios.post(this.url_categories, data, {
            'Content-Type': 'text/json',
            headers : {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then((res) =>{
            console.log("Successfully posted data: ", data)
        })
        .catch((error) => {
            this.handleError(error.request.statusText);
        })
    }

    async get_categories(){
        const res = await axios.get(this.url_categories, {
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        })
        .then((res) => {
            this.categories = res.data;
            return(this.categories);
        })
        .catch((error) => {
            this.handleError(error.request.statusText);
        })
    }
}