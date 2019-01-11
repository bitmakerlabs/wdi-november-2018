import React, { Component } from 'react'

import Article from './Article'

class NewsFeedApp extends Component {
  render() {
    let allArticles = this.props.data.map( (article, index) =>
      <Article key={index} article={article} />
    )

    return (
      <section id="main" className="container">
        { allArticles }
      </section>
    )
  }
}

export default NewsFeedApp
