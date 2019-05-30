import React, { Component } from 'react';
import FeedTeaser from '../FeedTeaser/FeedTeaser';
import './Feed.css'
import ArticlesAPI from '../../api/ArticlesAPI.js'


class Feed extends Component {

  constructor(props){
    super(props)
    this.articles = []
    this.state = {
      articles: this.articles,
    }
  }

  getLatestArticles(){
    const section = this.props.section
    const nexPage = this.state.nextPage || 1
    ArticlesAPI.fetchArticlesBySection(section, nexPage)
      .then(json => {
        console.log(json)
        this.articles = this.articles.concat(json.articles)
        console.log(this.articles)
        this.setState({
                      articles: this.articles, 
                      hasNext: json.has_next, 
                      nextPage: json.next_page
                    })
        })
  }

  _handleClick(e){
    e.preventDefault()
    if(this.state.hasNext){
      this.getLatestArticles()
    }

  }

  componentDidMount(){
    this.getLatestArticles()
  }

  render() {  
    const feedTeasers = this.state.articles.map(article => <FeedTeaser key={article.id} article={article} />)
    return (
      <div className='feed'>
        <h3 className='feed-title'>Latest</h3>
        <div className='feed-teasers'>
          {feedTeasers}
          {this.state.hasNext ? <a className='load-more-teasers' onClick={(e) => this._handleClick(e)} href='#' >Click to Load More</a> : null}
        </div>
      </div>
    );
  }
}

export default Feed;