import React, { Component } from 'react';
import './HeadLineTeaser.css'
import { Link } from 'react-router-dom';


class HeadLineTeaser extends Component {
  
  render() {
    const article = this.props.article 
    const bodyLength = (300 - article.title.length * 2)
    return (
      <Link to={`/sections/${article.type_of}/${article.id}`} className='headline-teaser' style={{backgroundImage: `url(${article.image_url})`}}>
        <div className='headline-info'>
          <h1 className='headline-title'>{article.title} - ({article.year})</h1>
          <p className='headline-body'>{article.body.substring(0, bodyLength)}...</p>
        </div>
      </Link>
    );
  }
}

export default HeadLineTeaser;