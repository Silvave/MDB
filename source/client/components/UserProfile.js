import React from 'react'

import UserStore from '../stores/UserStore'

import UserProfileInfo from './sub-components/UserProfileInfo'
import UserRatedMovies from './sub-components/UserRatedMovies'
import UserReviews from './sub-components/UserReviews'

export default class UserProfile extends React.Component {
  constructor (props) {
    super(props)

    this.state = UserStore.getState()

    this.onChange = this.onChange.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    UserStore.listen(this.onChange)
  }

  componentWillUnmount () {
    UserStore.unlisten(this.onChange)
  }

  render () {
    return (
      <div className="container">
        <UserProfileInfo roles={this.state.roles}
                         name={this.state.name}
                         information={this.state.information} />
        <UserRatedMovies votes={this.state.votes} />
        <UserReviews reviews={this.state.reviews} />
      </div>
    )
  }
}