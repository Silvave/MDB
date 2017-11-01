import React from 'react'

import UserRatedMoviesPanel from './UserRatedMoviesPanel'

export default class UserRatedMovies extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showRatedMoviesPanel: false
    }

    this.toggleRatedMovies = this.toggleRatedMovies.bind(this)
  }

  toggleRatedMovies () {
    this.setState(prevState => ({
      showRatedMoviesPanel: !prevState.showRatedMoviesPanel
    }))
  }

  render () {
    return (
      <div className="container profile-container">
        <div className="profile-stats clearfix">
          <ul>
            <li>
              <span className="stats-number">
              {this.props.votes ? this.props.votes.length : 0}
              </span>
              Votes
            </li>
          </ul>
        </div>
        <div className="pull-right btn-group">
          <a className="btn btn-primary"
             onClick={this.toggleRatedMovies}>
            {this.state.showRatedMoviesPanel ? 'Hide' : 'Rated Movies'}
          </a>
        </div>
        {this.state.showRatedMoviesPanel ?
          <UserRatedMoviesPanel movies={this.props.votes} /> : null}
      </div>
    )
  }
}