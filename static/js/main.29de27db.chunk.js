(this["webpackJsonptosuccess-activities"]=this["webpackJsonptosuccess-activities"]||[]).push([[0],{103:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},213:function(e,t,n){},324:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n(0),i=n(20),c=n.n(i),s=(n(183),n(184),n(12)),o=n(10),u=n(15),l=n(14),h=n(371),d=n(370),j=n(369),b=n(17),v=n.n(b),f=n(25),p=n(86),_=n(163),g=n(18),O=n(101),y=function(){function e(t,n){Object(s.a)(this,e),this.url_activities="https://vegsja.pythonanywhere.com/activities/",this.url_categories="https://vegsja.pythonanywhere.com/categories/",this.url_date="https://vegsja.pythonanywhere.com/date/",this.url_refresh="https://vegsja.pythonanywhere.com/refresh/",this.logoutUrl="https://vegsja.pythonanywhere.com/logout/",this.token=t,this.refreshToken=n,this.categories=void 0,this.errorFromServer=!1,this.errorMessage=null,localStorage.setItem("current_token",this.token),localStorage.setItem("refresh_token",this.refreshToken)}return Object(o.a)(e,[{key:"handleError",value:function(e){throw this.errorMessage=e.request.statusText,this.errorFromServer=!0,this.errorMessage}},{key:"sendRefreshToken",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,n=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={refresh:this.refreshToken},e.next=3,O.post(this.url_refresh,t,{"Content-Type":"text/json"}).then((function(e){n.token=e.data.access,localStorage.setItem("current_token",n.token),n.errorFromServer=!1}));case 3:e.sent;case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"get_current_date",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get(this.url_date,{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){return t.date=e.data,t.date})).catch((function(e){t.handleError(e)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"get_activities",value:function(){var e=Object(f.a)(v.a.mark((function e(t){var n,r=this,a=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:2,e.next=3,O.get(this.url_activities+"?date="+t.toString()+"&nb_days="+n.toString(),{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){return r.activities=e.data,console.log("Successfully retrieved activities: ",r.activities),r.activities})).catch((function(e){r.handleError(e)}));case 3:e.sent;case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"post_activity",value:function(){var e=Object(f.a)(v.a.mark((function e(t,n,r,a,i,c){var s,o=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={activity_name:t,activity_category:n,minutes_after_midnight_start:r,minutes_after_midnight_end:a,date:i,date_string:c},e.next=3,O.post(this.url_activities,s,{"Content-Type":"text/json",headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){console.log("Successfully posted data:",s)})).catch((function(e){o.handleError(e)}));case 3:e.sent;case 4:case"end":return e.stop()}}),e,this)})));return function(t,n,r,a,i,c){return e.apply(this,arguments)}}()},{key:"post_category",value:function(){var e=Object(f.a)(v.a.mark((function e(t,n){var r,a=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={name:t,color:n},e.next=3,O.post(this.url_categories,r,{"Content-Type":"text/json",headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){console.log("Successfully posted data: ",r)})).catch((function(e){a.handleError(e)}));case 3:e.sent;case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"get_categories",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.get(this.url_categories,{headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){return t.categories=e.data,t.categories})).catch((function(e){t.handleError(e)}));case 2:e.sent;case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"post_logout",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,n=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={refresh_token:this.refreshToken,access_token:this.token},e.next=3,O.post(this.logoutUrl,t,{"Content-Type":"text/json",headers:{Authorization:"Bearer ".concat(this.token)}}).then((function(e){console.log("Successfully logged out of server: ",e.status)})).catch((function(e){n.handleError(e)}));case 3:e.sent;case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();n(101);function m(){return k.apply(this,arguments)}function k(){return(k=Object(f.a)(v.a.mark((function e(){var t,n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=localStorage.getItem("refresh_token").toString(),n=localStorage.getItem("current_token").toString(),(r=new y(n,t)).post_logout().catch((function(e){r.sendRefreshToken().then((function(){m()})).catch((function(){alert("Error on logout:",e)}))}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x,C=function(){var e=Object(g.k)();return Object(r.jsx)("div",{children:Object(r.jsx)(p.GoogleLogout,{clientId:"767187782063-nm6b5i4a6uscq2d9sj8kcfv9taoeej5d.apps.googleusercontent.com",buttonText:"Logout",onLogoutSuccess:function(t){m().then((function(){e.push({pathname:"/landing"})}))},render:function(e){return Object(r.jsx)(_.a,{onClick:e.onClick,disabled:e.disabled,variant:"danger",size:"lg",children:"Log out"})}})})},S=n(44),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(h.a,{bg:"dark",variant:"dark",children:[Object(r.jsx)(S.LinkContainer,{to:"/activities",children:Object(r.jsx)(h.a.Brand,{href:"#home",children:"ToSuccess"})}),Object(r.jsxs)(d.a,{className:"mr-auto",children:[Object(r.jsx)(S.LinkContainer,{to:"/activities",children:Object(r.jsx)(d.a.Link,{children:"Activities"})}),Object(r.jsx)(S.LinkContainer,{to:"/categories",children:Object(r.jsx)(d.a.Link,{children:"Categories"})}),Object(r.jsx)(S.LinkContainer,{to:"/stats",children:Object(r.jsx)(d.a.Link,{children:"Stats"})}),Object(r.jsx)(S.LinkContainer,{to:"/settings",children:Object(r.jsx)(d.a.Link,{children:"Settings"})})]}),Object(r.jsx)(j.a,{inline:!0,children:Object(r.jsx)(S.LinkContainer,{to:"/landing",children:Object(r.jsx)(C,{})})})]})}}]),n}(a.Component),T=n(45),L=n(101),I="https://vegsja.pythonanywhere.com/google/";function H(){return(H=Object(f.a)(v.a.mark((function e(t){var n,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={token:t},e.next=3,L.post(I,n,{"Content-Type":"text/json"}).then((function(e){return e.data}));case 3:return r=e.sent,x=r,e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var N=function(){var e=Object(g.k)();return Object(r.jsx)("div",{children:Object(r.jsx)(p.GoogleLogin,{clientId:"767187782063-nm6b5i4a6uscq2d9sj8kcfv9taoeej5d.apps.googleusercontent.com",render:function(e){return Object(r.jsx)(_.a,{onClick:e.onClick,disabled:e.disabled,variant:"primary",size:"lg",children:"Start planning!"})},buttonText:"Login",onSuccess:function(t){(function(e){return H.apply(this,arguments)})(t.tokenId).then((function(n){e.push({pathname:"/activities",state:{userid:t.profileObj.userid,name:t.profileObj.givenName,backend_access_token:x.access_token,backend_refresh_token:x.refreash_token}})}))},onFailure:function(e){console.log("[Login failed] res:",e)},cookiePolicy:"single_host_origin"})})},D=n.p+"static/media/conquer.ece66679.jpg",M=(n(103),n(213),{backgroundImage:"url("+D+")"});function A(){return console.log("Langing page"),Object(r.jsx)("div",{className:"page-contain",style:M,children:Object(r.jsxs)("div",{className:"content-left",children:[Object(r.jsx)("h1",{class:"landingPage",children:"Achieve it!"}),Object(r.jsx)("p",{children:" The daily planner which structures your day in a revolutinary way"}),Object(r.jsx)(S.LinkContainer,{to:"/activities",children:Object(r.jsx)(N,{})})]})})}function E(){return Object(r.jsx)("h1",{children:"Stats"})}function F(){return Object(r.jsx)("h1",{children:"Settings"})}var B=n(42),R=n(125),z=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{children:Object(r.jsx)(R.Container,{children:Object(r.jsx)(R.Button,{tooltip:"The big plus button!",text:"fa fa-plus",rotate:!0,onClick:this.props.handleClick})})})}}]),n}(a.Component),G=n(173),P=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={color:r.props.defaultColor},r}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)(G.a,{color:this.state.defaultColor,onChange:this.props.onChange})}}]),n}(a.Component),J=n(358),q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).circleStyle={margin:"1vh",display:"inline-block",position:"relative",backgroundColor:r.props.color,borderRadius:"50%",width:r.props.size,height:r.props.size,left:0,top:0},r}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{style:this.circleStyle})}}]),n}(a.Component),Y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={loading:!0,backend_access_token:r.props.backendAccessToken,api_connection:r.props.api_connection,server_error:!1,server_error_message:null,categories:r.props.categories},r}return Object(o.a)(n,[{key:"render_categories",value:function(){var e=[];for(var t in this.state.categories){var n=this.state.categories[t];e.push(Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:Object(r.jsx)(q,{color:n.color,size:"5vh"})}),Object(r.jsx)("th",{children:Object(r.jsx)("h3",{children:n.name})})]}))}return e}},{key:"render",value:function(){return Object(r.jsxs)(J.a,{hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Color"}),Object(r.jsx)("th",{children:"Name"})]})}),Object(r.jsx)("tbody",{children:this.render_categories()})]})}}]),n}(a.Component),U=n(359),V=n(360),X=n(368),K=n(164),Q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;Object(s.a)(this,n),(r=t.call(this,e)).state={showHide:!1,category_name:null,category_color:"#FFFFFFF",backend_access_token:null,backend_refresh_token:null,error_on_server:!1,error_message_from_server:null,categories:null,loading:!0};var a=localStorage.getItem("routeState");return a&&(a=JSON.parse(a)),r.state.backend_access_token=a.backend_access_token,r.state.backend_refresh_token=a.backend_refresh_token,r.API=new y(r.state.backend_access_token,r.state.backend_refresh_token),r.submitHandler=r.submitHandler.bind(Object(B.a)(r)),r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.sendGetRequest()}},{key:"sendGetRequest",value:function(){var e=this;this.API.get_categories().then((function(t){e.state.categories=e.API.categories,e.setState({loading:!1})})).catch((function(t){e.API.sendRefreshToken().then((function(t){e.sendGetRequest()})).catch((function(t){e.handleServerError(t.request.statusText)}))}))}},{key:"handleServerError",value:function(e){this.setState({error_on_server:!0,error_message_from_server:e})}},{key:"handleModalShowHide",value:function(){this.setState({showHide:!this.state.showHide})}},{key:"onColorSelect",value:function(e,t){this.setState({category_color:e.hex})}},{key:"submitHandler",value:function(){var e=this;this.API.post_category(this.state.category_name,this.state.category_color).then((function(){e.setState({loading:!0}),e.handleModalShowHide(),e.sendGetRequest()})).catch((function(){e.API.sendRefreshToken().then((function(){console.log("Successfully posted category"),e.submitHandler()})).catch((function(){console.log("Caught an error while sending refresh token")}))}))}},{key:"render",value:function(){var e=this;return this.state.loading?this.state.error_on_server?"Unauthorized"===this.state.error_message_from_server?Object(r.jsx)("div",{children:Object(r.jsx)(g.c,{to:"/landing"})}):Object(r.jsxs)(U.a,{variant:"danger",children:["Server error: ",this.state.error_message]}):Object(r.jsx)(V.a,{animation:"grow",className:"loading-table"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Categories"}),Object(r.jsx)(Y,{backendAccessToken:this.state.backend_access_token,api_connection:this.API,categories:this.state.categories}),Object(r.jsx)(z,{handleClick:function(){return e.handleModalShowHide()}}),Object(r.jsxs)(X.a,{show:this.state.showHide,centered:!0,children:[Object(r.jsx)(X.a.Header,{closeButton:!0,onClick:function(){return e.handleModalShowHide()},children:Object(r.jsx)(X.a.Title,{children:"Add category"})}),Object(r.jsxs)(j.a,{children:[Object(r.jsxs)(X.a.Body,{children:[Object(r.jsxs)(K.a,{controlId:"formCategoryName",children:[Object(r.jsx)(j.a.Label,{children:"Category name:"}),Object(r.jsx)(j.a.Control,{type:"string",placeholder:"Enter category name...",onChange:function(t){return e.setState({category_name:t.target.value})}})]}),Object(r.jsxs)(K.a,{controlId:"formColor",children:[Object(r.jsx)(j.a.Label,{children:"Category Color:"}),Object(r.jsx)(P,{color:"#FFFFFF",onChange:function(t,n){return e.onColorSelect(t,n)}})]})]}),Object(r.jsxs)(X.a.Footer,{children:[Object(r.jsx)(_.a,{variant:"secondary",onClick:function(){return e.handleModalShowHide()},children:"Close"}),Object(r.jsx)(_.a,{variant:"primary",type:"submit",onClick:function(){return e.submitHandler()},children:"Add Category"})]})]})]})]})}}]),n}(a.Component);function W(){return Object(r.jsx)("div",{children:Object(r.jsx)(Q,{})})}var Z=n(169),$=n(373),ee=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={category:r.props.category,color:r.props.color,position_style:r.props.position_style},r}return Object(o.a)(n,[{key:"render",value:function(){var e={width:"fit-content",borderRadius:"10%",backgroundColor:this.state.color,position:this.state.position_style};return Object(r.jsx)("div",{style:e,children:Object(r.jsx)("p",{style:{margin:"5px",color:"white","font-size":"1vw"},children:this.state.category})})}}]),n}(a.Component),te=function(){function e(){Object(s.a)(this,e)}return Object(o.a)(e,[{key:"timeConvert",value:function(e){var t=e/60,n=Math.floor(t),r=60*(t-n),a=Math.round(r);if(n<10)var i="0"+n;else i=n;if(a<10)var c="0"+a;else c=a;return i+":"+c}},{key:"convertDateToDDMMMMYYYY",value:function(e){var t,n=e.split("-"),r=n[0],a=parseInt(n[1]),i=n[2];switch(a){case 1:t="January";break;case 2:t="February";break;case 3:t="March";break;case 4:t="April";break;case 5:t="May";break;case 6:t="June";break;case 7:t="July";break;case 8:t="August";break;case 9:t="September";break;case 10:t="October";break;case 11:t="November";break;case 12:t="December"}return i+". "+t+" "+r}},{key:"convertDateToDayNumber",value:function(e){var t=e.split("-"),n=parseInt(t[2]),r=parseInt(t[1]),a=parseInt(t[0]),i=new Date(a,r-1,n),c=new Date(i.getFullYear(),0,0);return Math.floor((i-c)/1e3/60/60/24)}},{key:"convertTimeToMinutes",value:function(e){var t=e.split(":");return 60*parseInt(t[0])+parseInt(t[1])}}]),e}(),ne=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;Object(s.a)(this,n),r=t.call(this,e);var a=new te;return r.start_time=a.timeConvert(r.props.start_time),r.end_time=a.timeConvert(r.props.end_time),r}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)($.a,{className:"activity-card",children:Object(r.jsxs)($.a.Body,{children:[Object(r.jsxs)($.a.Title,{children:[Object(r.jsx)(ee,{category:this.props.activity_category,color:this.props.color,position_style:"absolute"}),this.start_time," - ",this.end_time]}),Object(r.jsx)($.a.Subtitle,{className:"activity-name",children:this.props.activity_name})]})})}}]),n}(a.Component);function re(e,t){return e.sort((function(e,n){var r=e[t],a=n[t];if(!(Math.abs(parseInt(r)-parseInt(a))>10))return r<a?-1:r>a?1:0}))}var ae=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(J.a,{children:[Object(r.jsx)("thead",{children:Object(r.jsx)("th",{children:this.props.date})}),Object(r.jsx)("tbody",{children:this.createJSXItems(this.props.activities_for_day)})]})}},{key:"createJSXItems",value:function(e){e=re(e,"minutes_after_midnight_start");var t,n=[],a=Object(Z.a)(e);try{for(a.s();!(t=a.n()).done;){var i=t.value,c=i.activity_category,s=this.props.colorList[c];n.push(Object(r.jsxs)("tr",{children:[Object(r.jsx)(ne,{activity_name:i.activity_name,activity_category:c,color:s,start_time:i.minutes_after_midnight_start,end_time:i.minutes_after_midnight_end})," "]}))}}catch(o){a.e(o)}finally{a.f()}return n}}]),n}(a.Component),ie=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={loading:!0,backend_access_token:r.props.backendAccessToken,api_connection:r.props.api_connection,day_number_to_view:r.props.day_number_to_view,colorList:r.props.colorList,activities:re(r.props.activities,"date")},r.dateHandler=new te,r}return Object(o.a)(n,[{key:"CreateActivityObject",value:function(e){for(var t={},n=0;n<e.length;n++)e[n].date_string in t||(t[e[n].date_string]=[]),t[e[n].date_string].push(e[n]);return t}},{key:"renderDays",value:function(){var e=this.CreateActivityObject(this.state.activities),t=[];for(var n in e)t.push(Object(r.jsx)("th",{children:Object(r.jsx)(ae,{date:n,activities_for_day:e[n],colorList:this.state.colorList})}));return 0==t.length?Object(r.jsx)(U.a,{variant:"warning",children:"ALERT: No activities found for these days. To add an activity click the add button"}):t}},{key:"render",value:function(){return Object(r.jsx)("div",{className:"table-div",children:Object(r.jsxs)(J.a,{children:[" ",this.renderDays()," "]})})}}]),n}(a.Component),ce=n(367),se=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={label:r.props.label,defaultValue:r.props.value,onChange:r.props.onChange},r}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)("form",{noValidate:!0,children:Object(r.jsx)(ce.a,{id:"date",label:this.state.label,type:"date",defaultValue:this.state.defaultValue,InputLabelProps:{shrink:!0},onChange:this.state.onChange})})}}]),n}(a.Component),oe=n(174),ue=n(365),le=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={api_data:r.props.data,selected_value:null},r}return Object(o.a)(n,[{key:"createSelectItems",value:function(){var e=[];for(var t in this.state.api_data){var n=this.state.api_data[t].name,a=this.state.api_data[t].color;e.push(Object(r.jsx)(oe.a.Item,{children:Object(r.jsx)(ee,{category:n,color:a,position_style:"relative"})}))}return e}},{key:"render",value:function(){return Object(r.jsx)(ue.a,{style:{position:"relative",display:"inline-block"},title:"Categories",onSelect:this.props.onSelect,children:this.createSelectItems()})}}]),n}(a.Component),he=n(372),de=(a.Component,n(366)),je=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var r,a;return Object(s.a)(this,n),(r=t.call(this,e)).state={activityName:"",activityCategory:"",activityDate:"",activityStartTime:"",activityEndTime:"",showHide:!1,loading_data_from_api:!0,backend_access_token:null,backend_refresh_token:null,server_error:!1,error_message:null,date_to_view:new Date,dayNumber_to_view:null,activities:null,colorList:{}},r.props.location.state?(localStorage.setItem("routeState",JSON.stringify(r.props.location.state)),a=r.props.location.state):(a=localStorage.getItem("routeState"))&&(a=JSON.parse(a)),r.state.backend_access_token=a.backend_access_token,r.state.backend_refresh_token=a.backend_refresh_token,r.submitHandler=r.submitHandler.bind(Object(B.a)(r)),r.api_connection=new y(r.state.backend_access_token,r.state.backend_refresh_token),r.dateHandler=new te,r}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.initGet()}},{key:"initGet",value:function(){var e=this;this.api_connection.get_current_date().then((function(t){e.currentdate=e.api_connection.date.date,e.currentDayNumber=e.api_connection.date.daynumber,e.setState({date_to_view:e.currentdate,dayNumber_to_view:e.currentDayNumber}),e.api_connection.get_categories().then((function(t){e.categories=e.api_connection.categories,e.setState({colorList:e.createColorList(e.categories)}),e.api_connection.get_activities(e.state.dayNumber_to_view,4).then((function(t){e.setState({activities:e.api_connection.activities,loading_data_from_api:!1})}))}))})).catch((function(){e.api_connection.sendRefreshToken().then((function(){e.initGet()})).catch((function(){e.setState({server_error:!0,error_message:e.api_connection.errorMessage})}))}))}},{key:"GET_date",value:function(){var e=this;this.api_connection.get_current_date().then((function(t){e.currentdate=e.api_connection.date.date,e.currentDayNumber=e.api_connection.date.daynumber,e.setState({date_to_view:e.currentdate,dayNumber_to_view:e.currentDayNumber})})).catch((function(){e.handleServerError(e.GET_date)}))}},{key:"GET_categories",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.api_connection.get_categories().then((function(e){return t.categories=t.api_connection.categories,t.setState({colorList:t.createColorList(t.categories)}),e}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"GET_activities",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading_data_from_api:!0}),this.api_connection.get_activities(this.state.dayNumber_to_view,4).then((function(e){t.setState({activities:t.api_connection.activities,loading_data_from_api:!1})}));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleServerError",value:function(){var e=Object(f.a)(v.a.mark((function e(t){var n=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.api_connection.sendRefreshToken().then((function(){t()})).catch((function(){n.setState({server_error:!0,error_message:n.api_connection.errorMessage})}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"handleModalShowHide",value:function(){this.setState({showHide:!this.state.showHide})}},{key:"onDropdownSelect",value:function(e,t){this.setState({activityCategory:t.target.outerText})}},{key:"submitHandler",value:function(){var e=this,t=this.dateHandler.convertDateToDDMMMMYYYY(this.state.activityDate),n=this.dateHandler.convertDateToDayNumber(this.state.activityDate),r=this.dateHandler.convertTimeToMinutes(this.state.activityStartTime),a=this.dateHandler.convertTimeToMinutes(this.state.activityEndTime);this.api_connection.post_activity(this.state.activityName,this.state.activityCategory,r,a,n,t).then((function(){e.GET_activities(),e.handleModalShowHide()})).catch((function(){e.api_connection.sendRefreshToken().then((function(){e.submitHandler()})).catch((function(){alert("Could not send activitiy")}))}))}},{key:"createColorList",value:function(e){var t={};for(var n in e)t[e[n].name]=e[n].color;return t}},{key:"render",value:function(){var e=this;return this.state.loading_data_from_api?this.state.server_error?"Unauthorized"===this.state.error_message?Object(r.jsx)("div",{children:Object(r.jsx)(g.c,{to:"/landing"})}):Object(r.jsxs)(U.a,{variant:"danger",children:["Server error: ",this.state.error_message]}):Object(r.jsx)("div",{children:Object(r.jsx)(V.a,{animation:"grow",className:"loading-table"})}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Here are your activities for the next 4 days!"}),Object(r.jsx)(se,{value:this.state.date_to_view,label:"Date:",onChange:function(t){return e.setState({date_to_view:t.target.value,dayNumber_to_view:e.dateHandler.convertDateToDayNumber(t.target.value)})}}),Object(r.jsx)(ie,{activities:this.state.activities,backendAccessToken:this.state.backend_access_token,day_number_to_view:this.state.dayNumber_to_view,colorList:this.state.colorList}),Object(r.jsx)(z,{handleClick:function(){return e.handleModalShowHide()}}),Object(r.jsxs)(X.a,{show:this.state.showHide,centered:!0,children:[Object(r.jsx)(X.a.Header,{closeButton:!0,onClick:function(){return e.handleModalShowHide()},children:Object(r.jsx)(X.a.Title,{children:"Add activity"})}),Object(r.jsxs)(j.a,{children:[Object(r.jsxs)(X.a.Body,{children:[Object(r.jsxs)(de.a,{controlId:"formActivityName",children:[Object(r.jsx)(j.a.Label,{children:"Activity Name:"}),Object(r.jsx)(j.a.Control,{type:"string",placeholder:"Enter activity name...",style:{width:"fit-content",display:"inline-block"},onChange:function(t){return e.setState({activityName:t.target.value})}}),Object(r.jsx)(le,{data:this.categories,onSelect:function(t,n){return e.onDropdownSelect(t,n)}})]}),Object(r.jsxs)(de.a,{controlId:"formDate",children:[Object(r.jsx)(j.a.Label,{children:"Date:"}),Object(r.jsx)(j.a.Control,{type:"date",onChange:function(t){return e.setState({activityDate:t.target.value})}})]}),Object(r.jsxs)(de.a,{controlId:"formStartTime",children:[Object(r.jsx)(j.a.Label,{children:"Start Time:"}),Object(r.jsx)(j.a.Control,{type:"time",onChange:function(t){return e.setState({activityStartTime:t.target.value})}})]}),Object(r.jsxs)(de.a,{controlId:"formEndTime",children:[Object(r.jsx)(j.a.Label,{children:"End Time:"}),Object(r.jsx)(j.a.Control,{type:"time",onChange:function(t){return e.setState({activityEndTime:t.target.value})}})]})]}),Object(r.jsxs)(X.a.Footer,{children:[Object(r.jsx)(_.a,{variant:"secondary",onClick:function(){return e.handleModalShowHide()},children:"Close"}),Object(r.jsx)(_.a,{variant:"primary",type:"submit",onClick:function(){return e.submitHandler()},children:"Add Activity"})]})]})]})]})}}]),n}(a.Component),be=Object(g.o)(je);function ve(){return Object(r.jsx)(T.HashRouter,{children:Object(r.jsxs)(g.g,{children:[Object(r.jsx)(g.d,{exact:!0,path:"/landing",children:Object(r.jsx)(A,{})}),Object(r.jsx)(g.d,{exact:!0,path:"/",children:Object(r.jsx)(A,{})}),Object(r.jsxs)(g.d,{exact:!0,path:"/activities",children:[Object(r.jsx)(w,{}),Object(r.jsx)("div",{className:"page-container",children:Object(r.jsx)(be,{})})]}),Object(r.jsxs)(g.d,{exact:!0,path:"/categories",children:[Object(r.jsx)(w,{}),Object(r.jsx)("div",{className:"page-container",children:Object(r.jsx)(W,{})})]}),Object(r.jsxs)(g.d,{exact:!0,path:"/stats",children:[Object(r.jsx)(w,{}),Object(r.jsx)("div",{className:"page-container",children:Object(r.jsx)(E,{})})]}),Object(r.jsxs)(g.d,{exact:!0,path:"/settings",children:[Object(r.jsx)(w,{}),Object(r.jsx)("div",{className:"page-container",children:Object(r.jsx)(F,{})})]})]})})}var fe=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(ve,{})})},pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,375)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),i(e),c(e)}))};c.a.render(Object(r.jsx)(T.BrowserRouter,{children:Object(r.jsx)(fe,{})}),document.getElementById("root")),pe()}},[[324,1,2]]]);
//# sourceMappingURL=main.29de27db.chunk.js.map