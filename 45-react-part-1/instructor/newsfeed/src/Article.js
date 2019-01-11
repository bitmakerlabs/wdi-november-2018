import React, { Component } from 'react'

class Article extends Component {
  render() {
    return (
      <article className="article">
        <section className="featuredImage">
          <img src={ this.props.article.image } aslt="" />
        </section>
        <section className="articleContent">
          <a href="#" id="40">
            <h3>{ this.props.article.title }</h3>
          </a>
          <h6 className="tags">{ this.props.article.tags }</h6>
        </section>
        <section className="impressions">
          { this.props.article.impressions }
        </section>
        <div className="clearfix"></div>
      </article>
    )
  }
}

export default Article
