import alt from '../alt'

class UserActions {
  constructor () {
    this.generateActions(
      'registerUserSuccess',
      'registerUserFail',
      'loginUserSuccess',
      'loginUserFail',
      'logoutUserSuccess'
    )
  }

  registerUser (data) {
    let request = {
      method: 'post',
      url: '/user/register',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }

    $.ajax(request)
      .done(user => this.registerUserSuccess(user))
      .fail(err => {
        console.log('error', err)
        this.registerUserFail(err.responseJSON.message)
      })

    return true
  }

  loginUser (data) {
    let request = {
      method: 'post',
      url: '/user/login',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }

    $.ajax(request)
      .done(user => this.loginUserSuccess(user))
      .fail(err => this.loginUserFail(err.responseJSON))

    return true
  }

  logoutUser () {
    let request = {
      method: 'post',
      url: '/user/logout'
    }

    $.ajax(request)
      .done(() => this.logoutUserSuccess())

    return true
  }
}

export default alt.createActions(UserActions)