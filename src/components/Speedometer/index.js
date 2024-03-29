// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    // eslint-disable-next-line no-undef
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="heading">Speed is {count}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="buttons">
          <button
            className="accelerate-btn"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="brake-btn"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
