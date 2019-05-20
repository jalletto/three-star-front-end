import React, { Component } from 'react';
import ArticleTeaser from '../Components/ArticleTeaser/ArticleTeaser';
import HeadLineTeaser from '../Components/HeadLineTeaser/HeadLineTeaser';

class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles : []
    }
  }

  componentDidMount(){
    return fetch('http://127.0.0.1:8000/blog/')
      .then(response => response.json())
      .then(json => this.setState({articles: json}) )
  }

  render() {  
  const artilceTeasers = this.state.articles.map((article, i) => {
    if(i === 0) {
      return <HeadLineTeaser key={i} article={article} />
    }
    return <ArticleTeaser key={i} article={article} />
  })
    return (
      <div className='home-page'>
        {artilceTeasers}
      </div>
    );
  }
}

export default HomePage;