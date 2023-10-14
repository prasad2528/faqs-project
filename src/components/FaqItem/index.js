// Write your code here.
import {Component} from 'react'
import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  rendorAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state
    if (isActive) {
      return (
        <div>
          <hr />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  onToggleImage = () => {
    const {isActive} = this.state
    const imgUrl = isActive ? minusImage : plusImage
    const altText = isActive ? 'minus' : 'plus'
    return (
      <button type="button" className="button" onClick={this.onToggleIsActive}>
        <img className="image" src={imgUrl} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="list-item">
        <div className="faq-question-item-container">
          <h1 className="question">{questionText}</h1>
          {this.onToggleImage()}
        </div>
        <div className="ans-section">{this.rendorAnswer()}</div>
      </li>
    )
  }
}
export default FaqItem
