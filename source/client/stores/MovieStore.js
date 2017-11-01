import alt from '../alt'
import MovieActions from '../actions/MovieActions'

class MovieStore {
  constructor () {
    this.bindActions(MovieActions)

    this.topTenMovies = []
    this.mostRecentMovies = []
  }

  addVoteSuccess (data) {
    for (let movie of this.topTenMovies) {
      if (movie._id === data.movieId) {
        movie.loggedInUserScore = data.voteScore
        movie.score = data.movieScore
        movie.votes = data.movieVotes
      }
    }
  }

  onAddCommentSuccess (data) {
    let comment = data.comment
    let movieId = data.comment.movie

    for (let movie of this.topTenMovies) {
      if (movie._id === movieId) {
        movie.comments.push(comment)
      }
    }
  }

  onAddMovieToTopTen (movie) {
    this.topTenMovies.push(movie)
  }

  onEmptyTopTenMovies () {
    this.topTenMovies = []
  }

  onGetTopTenMoviesSuccess (movies) {
    this.topTenMovies = movies
  }

  onGetTopTenMoviesFail (err) {
    console.log('Could connect to DB', err)
  }

  onGetFiveRecentMovieSuccess (data) {
    this.mostRecentMovies = data
  }

  onGetFiveRecentMovieFail () {
    console.log('Could not connect to DB')
  }
}

export default alt.createStore(MovieStore)