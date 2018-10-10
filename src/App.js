import React, { Component } from 'react';
import { FirstVisit, Shop } from './components';
let self;

class App extends Component {
  constructor(props) {
    super(props);
    self = this;
    this.state = {
      switch: false
    }
  }

  render() {
    return (
      <div className="App">
        {/* Button to display/hide First component */}
        <button onClick={() => self.setState({ switch: !self.state.switch })}>
          {self.state.switch && "Hide"}
          {!self.state.switch && "Display"}
        </button>

        {/* First Component */}
        {self.state.switch && <FirstVisit />}
        {/* Second Component */}
        <Shop />
        
      </div>
    );
  }
}

export default App;
