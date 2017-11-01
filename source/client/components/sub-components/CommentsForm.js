import React from 'react'

import FormStore from '../../stores/FormStore'
import FormActions from '../../actions/FormActions'
import MovieActions from '../../actions/MovieActions'

export default class MovieCommentsPanelForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = FormStore.getState()

    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange (state) {
    this.setState(state)
  }

  componentDidMount () {
    FormStore.listen(this.onChange)
  }

  componentWillUnmount () {
    FormStore.unlisten(this.onChange)
  }

  handleSubmit (e) {
    e.preventDefault()

    if (!this.state.comment) {
      FormActions.commentValidationFail()
      return
    }

    MovieActions.addComment(this.props.movieId, this.state.comment)
  }

  render() {
    return (
      <form key={this.props.movieId} onSubmit={ this.handleSubmit } >
        <div className={ `form-group ${ this.state.commentValidationState }` }>
          <label className="control-label"
                 htmlFor="content">
            Add comment
          </label>
          <textarea id="content"
                    className="form-control"
                    value={ this.state.comment }
                    onChange={ FormActions.handleCommentChange }
                    rows="5"/>
          <span className='help-block'>
            { this.state.message }
            </span>
        </div>
        <div className="form-group">
          <input type="submit" className="btn btn-primary" value="Comment" />
        </div>
      </form>
    )
  }
}