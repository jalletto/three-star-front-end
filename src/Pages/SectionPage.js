import React, { Component } from 'react';

class SectionPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles : []
    }
  }

  componentDidMount(){
    return fetch(`http://127.0.0.1:8000/blog/latest/${this.props.match.params.section}`)
      .then(response => response.json())
      .then(json => this.setState({articles: json}) )
  }

  render() {  
    console.log(this.state.articles)
    return (
      <div className='section-page'>
        Section Page
        
      </div>
    );
  }
}

export default SectionPage;