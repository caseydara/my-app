# 🌙 🪐 Getting Started with Space News 🪐 🌙
 
 <p align="center">

This website was created with react using the NASA Astronomy Picture of the Day API and the News API. A NASA APOD picture is loaded and the description of the picture and title are shown next to it. Beneath the picture, relevant news articles about the picture will appear. Additionally, using the left and right arrows next to the pictures allows you to scroll through additional NASA APOD pictures with relevant news displayed below.
 
 </p>

<p align="center">
 
 https://github.com/caseydara/my-app/assets/35241746/7f819ef0-e5e5-46ab-9674-691c091a26b4
 </p>



## ✨ Available Scripts ✨

In the project directory, you can run:


### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

# 🌞 Git Hub Pages Website 🌞
The Git Hub pages website only displays the part of the website that uses the NASA APOD API. Unfortuantely, the Git Hub pages website does not display the relevant news articles since I utilized a free version of the API that only allows API calls to be made when using a local host. I provide a screen recording of my website so you can see what it looks like with the news articles displayed below. Alternatively, you can download the repository and run npm start. 

## 👽  App.js 👽 

The bulk of the relevant code for this website is located in the App.js file. First, a call is made to the NASA Apod API, the starting date defaults to 4/22/23. This date is stored in several states so it can be updated accordingly when the left and right arrows are clicked. Everytime the day state is changed the NASA APOD API data is re-retreived.

Next, a query is set based on the title of the NASA APOD picture. To make this query, the title of the photo is split up into an array of every word in the title. A query is formulated with the string "OR" between each word since the News API allows for multiple query words to be inputed. 

```javascript
var splitTitle = title.split(" ");
console.log(title);
console.log(splitTitle.length)
var query = splitTitle[0]
for(var i = 1; i < splitTitle.length; i++){
  query = query + " OR " + splitTitle[i];
}
await setSearchWord(query);
```
A call is made to the News API based on the query that is set.

Lastly, there is also an advance date and decrement date function for when a user clicks the left and right arrow. When the date is updated the NASA APOD picture and relevant news articles will also be updated. This allows the user to see an endless stream of NASA APOD API pictures + relevant news!


