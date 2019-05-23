import React, { Component } from 'react';
import ArticleTeaser from '../Components/ArticleTeaser/ArticleTeaser';
import HeadLineTeaser from '../Components/HeadLineTeaser/HeadLineTeaser';
import ArticlesAPI from '../api/ArticlesAPI.js'

class HomePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles : []
    }
  }

  componentDidMount(){
    ArticlesAPI.fetchLatestArticles()
      .then(json => this.setState({articles: json}) )
  }

  render() {  
    const isDeskTop = window.innerWidth > 900;
    const artilceTeasers = this.state.articles.map((article, i) => {
      if(i === 0 && isDeskTop) {
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