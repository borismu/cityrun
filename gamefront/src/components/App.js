import { Component } from 'react';
import { Container } from 'react-bootstrap';

import Auth from './Auth';
import Game from './Game';

class App extends Component {

  state = {
    isAuthenticated: false,
    authToken: null
  }

  render() {
    const { isAuthenticated } = this.state;

    return (
      <Container className="mt-2">
        {isAuthenticated ? <Game authToken={this.state.authToken} /> : <Auth parentSetState={this.setState.bind(this)} />}
      </Container>
    );
  }
}

export default App;
