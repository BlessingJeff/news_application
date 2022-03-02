import './App.css';
import { useEffect, useState } from "react";


function App() {

  let searchdata = "Today trending";

const [articles, setArticles] = useState([])

//Function for read the value that we entered on input field
function readValue(value) {
    searchdata = value;
    }

useEffect(() => {
  getNews()
  return () => {
   
  }
},)

//Function for getting the news
function getNews(params) {

//Fetch the API 
fetch(`https://newsapi.org/v2/everything?q=${searchdata}&apiKey=6a0cb1ceb9a3466e9db1a9cff461027c`)
.then((res)=>res.json())
.then((news)=>{
setArticles(news.articles)
})
.catch((err)=>{
  console.log(err)
})
}
  return (
    <div className="App">

<div className='search'>

<input placeholder='Search News' className='search-input' onChange={(event)=>{readValue(event.target.value)}}></input>

<button className='search-btn' onClick={getNews}>Submit</button>
</div>

<div className="articles">
{
  articles.map((article, index)=>{
    return (
      <div key={index} className='article'>
      <img  className='news-img' alt='' src={article.urlToImage}></img>
      <div className='news-details'>
        <h3>{article.title}</h3>
 <h4 className='author'>{article.author}</h4>
 <h4 className='author1'>Published At :{article.publishedAt.split("T")[0]}</h4>
 <a href={article.url} target="_blank" rel='noreferrer'>
   <button className='btn'>Read More</button>
 </a>
      </div>
        </div>
    )
  })
}


</div>
    </div>
  );
}

export default App;
