import React, { Component } from 'react';
import Article from '../Components/Article/Article';
import Feed from '../Components/Feed/Feed'
import ArticlesAPI from '../api/ArticlesAPI.js'


class SectionPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      mainArticle : null
    }
  }

  getArticleByID() {
    const id = this.props.match.params.id
    ArticlesAPI.fetchArticleById(id)
      .then(json => this.setState({mainArticle: json}))
  }

  getMostRecentArticle(){
    const section = this.props.match.params.section
    ArticlesAPI.fetchArticlesBySection(section)
      .then(json => this.setState({mainArticle: json.articles[0]}))
  }

  getMainArticle() {
    if(this.props.match.params.id){
      this.getArticleByID()
    } else {
      this.getMostRecentArticle()
    }
  }

  componentDidUpdate(_prevProps, prevState){
    if(prevState === this.state) { 
      this.getMainArticle()
    }
    window.scrollTo(0, 0)
  }

  componentDidMount() {
    this.getMainArticle()
  }

  render() {  
    const mainArticle = this.state.mainArticle 
    const section = this.props.match.params.section
    
    return (
      <div className='section-page'>
        <h1 className='section-title'>3 Star {section.charAt(0).toUpperCase() + section.slice(1)}s</h1>
        { mainArticle ? <Article article={mainArticle} /> : null } 
        <Feed  section={section} />
      </div>
    );
  }
}

export default SectionPage;