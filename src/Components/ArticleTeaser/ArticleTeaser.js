import React, { Component } from 'react';
import './ArticleTeaser.css'

class ArticleTeaser extends Component {
  
  render() {
    const article = this.props.article
    let fontSize = '2vw'
    if (article.title.length > 37) {
      fontSize = '1em'
    }
    return (
      <div className='article-teaser' style={{backgroundImage: `url(${article.image_url})`}}>
        <div className='article-teaser-info'>
          <h4 className='article-teaser-title' style={{fontSize: fontSize}}>{article.title} - ({article.year})</h4>
        </div>
      </div>
    );
  }
}

export default ArticleTeaser;



