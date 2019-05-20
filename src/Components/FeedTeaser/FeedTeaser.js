import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FeedTeaser.css'

class FeedTeaser extends Component {

  render() {  
    const article = this.props.article
    return (
      <Link className='feed-teaser' to={`/sections/${article.type_of}/${article.id}`}>
        <h4 className='feed-teaser-title'>{article.title}</h4>
        <p className='feed-teaser-body'>{article.body.substring(0, 200)}...</p>
        <div className='feed-teaser-image-container'>
          <img className='feed-teaser-image' src={article.image_url} />
        </div>
      </Link>
    );
  }
}

export default FeedTeaser;