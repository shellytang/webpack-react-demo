import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';

class NavBar extends React.Component {
  render() {
    return (
      <header className='hello-navbar'>
        <h1>counter</h1>
      </header>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => {
      return {
        count: state.count + 1
      }
    })
  }

  render() {
    return (
      <div>
        <NavBar />
        <p onClick={this.handleClick}>counter: {this.state.count}</p>
      </div>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'))
