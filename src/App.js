import React, { Component } from 'react';
import articles from './data/articles.json';
import ArticleList from './ArticleList/ArticleList';
import Header from './ArticleList/Header';
import Footer from './ArticleList/Footer';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header/>
        <ArticleList articles={articles}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
