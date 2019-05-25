import React, { Component } from 'react';
import Article from '../Components/Article/Article';
import Feed from '../Components/Feed/Feed'
import ArticlesAPI from '../api/ArticlesAPI.js'


class SectionPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles : []
    }
  }

  getArticleByID() {
    const id = this.props.match.params.id
    ArticlesAPI.fetchArticleById(id)
      .then(json => this.setState({mainArticle: json}))
  }

  getLatestArticles(){
    const section = this.props.match.params.section
    ArticlesAPI.fetchArticlesBySection(section)
      .then(json => this.setState({articles: json.articles, has_next: json.has_next, next_page: json.next_page}) )
  }

  componentDidUpdate(_prevProps, prevState){
    if(prevState === this.state) {
      this.getLatestArticles()
      
      if(this.props.match.params.id){
        this.getArticleByID()
      }
    }
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    if(this.props.match.params.id){
      this.getArticleByID()
    }
    this.getLatestArticles()
  }

  render() {  
    const articles = this.state.articles
    const mainArticle = this.state.mainArticle || this.state.articles[0]
    const section = this.props.match.params.section
    return (
      <div className='section-page'>
        <h1 className='section-title'>3 Star {section.charAt(0).toUpperCase() + section.slice(1)}s</h1>
        { mainArticle ? <Article article={mainArticle} /> : null } 
        <Feed  articles={articles}/>
      </div>
    );
  }
}

export default SectionPage;