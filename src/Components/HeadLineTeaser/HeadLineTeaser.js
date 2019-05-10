import React, { Component } from 'react';
import './HeadLineTeaser.css'

class HeadLineTeaser extends Component {
  
  render() {
    const article = this.props.article 
    return (
      <div className='headline-teaser' style={{backgroundImage: `url(${article.image_url})`}}>
        {/* <img className='headline-photo' src={article.image_url} /> */}
        <h1>{article.title}</h1>
        <p>{article.body}</p>
      </div>
    );
  }
}

export default HeadLineTeaser;