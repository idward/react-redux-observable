import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  fetchUser,
  sendPing,
  cancelFetchUser,
  increment,
  incrementIfOdd
} from './store/action'

class App extends Component {
  onFetchUser = () => {
    this.props.fetchUser('mojombo')
  }

  onCancellFetchUser = () => {
    this.props.cancelFetchUser()
  }

  onIncrement = () => {
    this.props.increment()
  }

  onIncrementIfOdd = () => {
    this.props.incrementIfOdd()
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <button onClick={this.onFetchUser}>fetch user</button>
        <button onClick={this.onCancellFetchUser}>cancel</button>
        <hr/>
        <h2>Count: {this.props.count}</h2>
        <button onClick={this.onIncrement}>increment</button>
        <button onClick={this.onIncrementIfOdd}>increment if odd</button>
      </div>
    )
  }
}

export default connect(({users, count}) => ({users, count}), ({
  fetchUser,
  sendPing,
  cancelFetchUser,
  increment,
  incrementIfOdd
}))(App)