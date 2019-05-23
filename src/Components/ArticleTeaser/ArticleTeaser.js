import React, { Component } from 'react';
import './ArticleTeaser.css'
import { Link } from 'react-router-dom';


class ArticleTeaser extends Component {
  
  render() {
    const article = this.props.article
  
    return (
      <Link to={`/sections/${article.type_of}/${article.id}`} className='article-teaser' style={{backgroundImage: `url(${article.image_url})`}}>
        <div className='article-teaser-info'>
          <h4 className='article-teaser-title' >{article.title} - ({article.year})</h4>
        </div>
      </Link>
    );
  }
}

export default ArticleTeaser;
