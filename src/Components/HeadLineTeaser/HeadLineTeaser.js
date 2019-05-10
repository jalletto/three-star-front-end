import React, { Component } from 'react';
import './HeadLineTeaser.css'

class HeadLineTeaser extends Component {
  
  render() {
    const article = this.props.article 
    return (
      <div className='headline-teaser' style={{backgroundImage: `url(${article.image_url})`}}>
        <div className='headline-info'>
          <h1>{article.title}</h1>
          <p>{article.body.substring(0, 300)}</p>
        </div>
      </div>
    );
  }
}

export default HeadLineTeaser;