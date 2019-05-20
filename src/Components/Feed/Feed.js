import React, { Component } from 'react';
import FeedTeaser from '../FeedTeaser/FeedTeaser';
import './Feed.css'

class Feed extends Component {

  render() {  
    const feedTeasers = this.props.articles.map((article, i) => <FeedTeaser key={i} article={article} />)
    return (
      <div className='feed'>
        <h3 className='feed-title'>Latest</h3>
        {feedTeasers}
      </div>
    );
  }
}

export default Feed;