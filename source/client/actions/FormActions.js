import alt from '../alt'

class FormActions {
  constructor () {
    // TODO: Do it in one handle functions with fields[name] = value - kenov's example
    this.generateActions(
      'handleUsernameChange',
      'handlePasswordChange',
      'handleConfirmedPasswordChange',
      'handleFirstNameChange',
      'handleLastNameChange',
      'handleAgeChange',
      'handleGenderChange',
      'usernameValidationFail',
      'passwordValidationFail',
      'unauthorizedAccessAttempt',
      'handleCommentChange',
      'commentValidationFail',
      'handleScoreChange',
      'scoreValidationFail'
    )
  }
}

export default alt.createActions(FormActions)