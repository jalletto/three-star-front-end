import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FeedTeaser.css'

class FeedTeaser extends Component {

  render() {  
    const article = this.props.article
    console.log('here' + article)
    const teaserBody = article.body.substring(0, 200) + '...'
    return (
      <Link className='feed-teaser' to={`/sections/${article.type_of}/${article.id}`}>
        <h4 className='feed-teaser-title'>{article.title}</h4>
        <div dangerouslySetInnerHTML={{__html: teaserBody}} className='feed-teaser-body'/>
        <div className='feed-teaser-image-container'>
          <img className='feed-teaser-image' src={article.image_url} />
        </div>
      </Link>
    );
  }
}

export default FeedTeaser;