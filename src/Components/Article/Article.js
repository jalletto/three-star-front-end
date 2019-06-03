import React, { Component } from 'react';
import './Article.css'

class Article extends Component {

  render() {  
    const article = this.props.article
    const body = article.body
    return (
      <div className='main-article'>
        <img className='main-article-image' src={article.image_url} alt={article.title} />
        <h2 className='main-article-title'>{article.title} - {article.year}</h2>
        <div dangerouslySetInnerHTML={{__html: body}} className='main-article-body'/>
      </div>
    );
  }
}

export default Article;