import React, { Component } from 'react';
import './ArticleTeaser.css'

class ArticleTeaser extends Component {
  
  render() {
    const article = this.props.article
    return (
      <div className='article-teaser' style={{backgroundImage: `url(${article.image_url})`}}>
        {/* <img className='article-teaser-photo' src={article.image_url} alt={`${article.title}`}/> */}
        <div className='article-teaser-info'>
          <h4 className='article-teaser-title'>{article.title} - ({article.year})</h4>
        </div>
      </div>
    );
  }
}

export default ArticleTeaser;



