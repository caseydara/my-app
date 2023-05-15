//App.js
import React, { useEffect, useState } from "react";
import axios from 'axios';
import './App.css'

function App() {

  const [newsData, setNewsData] = useState([]);
  const [spaceData, setSpaceData] = useState([]);
  const [searchWord, setSearchWord] = useState("nasa");
  const [day, setDay] = useState(22);
  const [month, setMonth] = useState(4);
  const [year, setYear] = useState(2023);
  const [url, setUrl] = useState("https://newsapi.org/v2/everything?q=nasa&apiKey=96f5ab8627de46c0adcb36a70eb357dd&pageSize=10");

  useEffect(() => {
    async function getNASAData(){
      //Make api call to nasa api
      const space = await axios.get("https://api.nasa.gov/planetary/apod?api_key=AFqQaB8YFhLpGKEM5Fx5ao87CGR6AvPdYKwXEHwW&date=2023-04-"+day);//=2016-11-06
      await setSpaceData(space.data);
    }
    getNASAData();
  },[day]);

  useEffect(() => {
    //create a search query based on nasa photo
    async function setQuery(){
      var title = spaceData.title;
      if(title!=null){
        var splitTitle = title.split(" ");
        console.log(title);
        console.log(splitTitle.length)
        var query = splitTitle[0]
        for(var i = 1; i < splitTitle.length; i++){
          query = query + " OR " + splitTitle[i];
        }
        await setSearchWord(query);
        console.log(query+"jjjkkkkk");
        
      }
    }
    setQuery();
  },[newsData, spaceData.title]);

  useEffect(() => {
    //Make api call to news api
    async function setUpPage(){
      await setUrl("https://newsapi.org/v2/everything?q="+searchWord+"&apiKey=96f5ab8627de46c0adcb36a70eb357dd&pageSize=10");
      console.log(url);

      //Make news api call using axios
      const resp = await axios.get(url);
      await setNewsData(resp.data.articles);
    }
    setUpPage();
  },[searchWord, url]);

  async function advanceDate(){
    if(day===28){
      await setDay(1);
      if(month === 12){
        await setYear(year + 1);
        await setMonth(1);
      }
      else{
        await setMonth(month + 1);
      }
    }
    else{
      setDay(day+1);
    }

  }

  async function decrementDate(){
    if(day===1){
      await setDay(28);
      if(month === 1){
        await setYear(year - 1);
        await setMonth(12);
      }
      else{
        await setMonth(month - 1);
      }
    }
    else{
      await setDay(day - 1);
    }

  }

  return (
    <div>
      <center><h1>Space News</h1></center>
      <div id="top-view">
        <button onClick={() => decrementDate()}><img src="https://cdn-icons-png.flaticon.com/512/60/60775.png"/></button>
        <div id="nasa-image">
        <center><h2>{spaceData.title}</h2></center>
        <div id ="image-and-text">
        <h3>{spaceData.explanation}</h3>
            <img src={spaceData.url} alt="image"/>
        </div>
        </div>
        <button onClick={() => advanceDate()}><img id="mirror-image" src="https://cdn-icons-png.flaticon.com/512/60/60775.png"/></button>
      </div>
      <div id="news-articles">
          {newsData.map((newsData, index) =>
            <a href={newsData.url}><h3>{newsData.title}</h3></a>
          )}

      </div>
    </div>
  );
}

export default App;
