import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    stopwatchStarted: false,
    timeElapsedInSeconds: 0,
    site: 'https://ajaystopwatch1.ccbp.tech/',
  }

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  startStopWatch = () => {
    const {stopwatchStarted} = this.state

    if (!stopwatchStarted) {
      this.setState({stopwatchStarted: true})

      this.timerId = setInterval(() => {
        this.setState(prevState => ({
          timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
        }))
      }, 1000)
    }
  }

  pauseStopWatch = () => {
    this.setState({stopwatchStarted: false})
    this.clearTimerInterval()
  }

  resetTimer = () => {
    this.setState({stopwatchStarted: false, timeElapsedInSeconds: 0})
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.timerId)

  render() {
    const {timeElapsedInSeconds} = this.state
    const mins = Math.floor(timeElapsedInSeconds / 60)
    const secs = timeElapsedInSeconds % 60

    return (
      <div className="stopwatch-bg-con">
        <div className="stopwatch-heading-card-con">
          <h1 className="stopwatch-heading">Stopwatch</h1>

          <div className="stopwatch-card-con">
            <div className="stopwatch-img-name-con">
              <img
                className="stopwatch-img"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <h1 className="stopwatch-card-heading">Timer</h1>
            </div>

            <h1 className="stopwatch-timer">
              {`${mins < 10 ? 0 : ''}${mins}`}:{`${secs < 10 ? 0 : ''}${secs}`}
            </h1>

            <div className="stopwatch-btn-con">
              <button
                className="btn btn-start"
                type="button"
                onClick={this.startStopWatch}
              >
                Start
              </button>
              <button
                className="btn btn-stop"
                type="button"
                onClick={this.pauseStopWatch}
              >
                Stop
              </button>
              <button
                className="btn btn-reset"
                type="button"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
