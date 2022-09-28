import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeReview: 0}

  getCurrentReview = currentReview => {
    const {imgUrl, username, companyName, description} = currentReview

    return (
      <div className="profile-list-container">
        <img src={imgUrl} alt={username} className="profile-image" />
        <p className="username">{username}</p>
        <p className="companyname">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickRightArrow = () => {
    const {activeReview} = this.state
    const {reviewsList} = this.props

    if (activeReview < reviewsList.length - 1) {
      this.setState(prevState => ({activeReview: prevState.activeReview + 1}))
    }
  }

  onClickLeftArrow = () => {
    const {activeReview} = this.state

    if (activeReview > 0) {
      this.setState(prevState => ({activeReview: prevState.activeReview - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {activeReview} = this.state
    const currentActiveReview = reviewsList[activeReview]
    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">Reviews</h1>
          <div className="profile-container">
            <button
              type="button"
              className="button"
              testid="leftArrow"
              onClick={this.onClickLeftArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
                className="left-right-arrow"
              />
            </button>
            {this.getCurrentReview(currentActiveReview)}
            <button
              type="button"
              className="button"
              testid="rightArrow"
              onClick={this.onClickRightArrow}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
                className="left-right-arrow"
              />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
