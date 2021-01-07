# Where to find
The website can be viewed at https://vegsja.github.io/tosuccessweb/#/

# About
This is the website for the ToSuccess project - A project focused on making scheduling and daily planning easier.

## How it is made
### Design
For the webpage itself ReactJS, Bootstrap are used, in addition to normal Javascript, HTML and CSS

### Communications with REST-API
To send GET/POST requests to the REST-API (see [The GitHub page of the backend](https://github.com/VegSja/ToSuccessBackend) for more information) the website uses the package Axios.

Authorization with the backend is completed wtih oAuth Google sign in and the backend uses a token/refresh token system to keep the user signed in. See [The GitHub page of the backend](https://github.com/VegSja/ToSuccessBackend) for more information

# Goals
There are a few goals for this project. Firstly there are goals to reach a MVP, secondly there are goals regarding non-essantials features.

## MVP Goals:
- <s>Successfully autheticate using oAuth</s>
- <s>Recieve and handle JSON data from backend</s>
    - <s>Only ask for relevant data (not data from 10 days ago)</s>
    - <s>Recieve the data</s>
    - <s>Create activities based on data</s>
    - <s>Render said activities</s>
- <s>Send JSON data to backend and update database</s>

## Non-essantial goals
- <s>Categorize activities
    - Create a system where the user can add different groups of activities
    - Let user choose a group for each activity in modal
    - Create page which displays these categories created by the user</s>
- Get statitics
    - Get statitics from backend
    - Display statitics with different diagrams

# Images
Keep in mind that the design of the website is still a work in progress, as the functionality of the website has been the main focus.

## Central pages

### The landing page
![The landing page](/website_imgs/landingpage.png)

### Activities page
![Activities page](/website_imgs/homepage_filled.png)

### Categories page
![Categories page](/website_imgs/categories_filled.png)

## Adding to database

### Add activity
![Add activity](/website_imgs/homepage_add.png)

### Add category
![Add category](/website_imgs/add_category.png)