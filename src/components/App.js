import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About"
import ArticleList from "./ArticleList"

function App() {
  return (
    <div className="App">
     <Header name = {blogData.name}/>
     <About about = {blogData.about} image = {blogData.image}/>
     <ArticleList key = {blogData.id} title = {blogData.title} date = {blogData.date} preview = {blogData.preview} minutes = {blogData.minutes} posts = {blogData.posts}/>
    </div>
  );
}

export default App;
