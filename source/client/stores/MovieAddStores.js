import alt from '../alt'
import MovieAddActions from '../actions/MovieAddActions'
import Helpers from '../utilities/Helpers'

class MovieAddStores {
  constructor () {
    this.bindActions(MovieAddActions)

    this.name = ''
    this.description = ''
    this.genres = []
    this.moviePosterUrl = ''
    this.genresValidationState = ''
    this.nameValidationState = ''
    this.helpBlock = ''
  }

  onAddMovieSuccess () {
    console.log('Added movie!')
  }

  onAddMovieFail (err) {
    console.log('Failed to add movie', err)
  }

  onHandleNameChange (e) {
    this.name = e.target.value
    this.nameValidationState = ''
    this.helpBlock = ''
  }

  onHandleDescriptionChange (e) {
    this.description = e.target.value
    this.genresValidationState = ''
    this.helpBlock = ''
  }

  onHandleGenresChange (e) {
    console.log(e)
    let genresValue = e.target.value

    if (this.genres.indexOf(genresValue) === -1) {
      this.genres = Helpers.appendToArray(genresValue, this.genres)
    } else {
      this.genres = Helpers.removeFromArray(genresValue, this.genres)
    }

    this.genresValidationState = ''
    this.helpBlock = ''
  }

  onNameValidationFail () {
    this.nameValidationState = 'has-error'
    this.helpBlock = 'Enter movie name'
  }

  onGenresValidationFail () {
    this.genresValidationState = 'has-error'
    this.helpBlock = 'Select atleast one movie genre'
  }
}

export default alt.createStore(MovieAddStores)