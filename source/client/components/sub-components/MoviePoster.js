import React from 'react'

export default class MoviePoster extends React.Component {
  render() {
    let poster
    if (this.props.posterUrl) {
      poster = (
        <div className="pull-left thumb-lg">
          <img src={this.props.posterUrl} className="media-object"/>
        </div>
      )
    }
    return poster
  }
}