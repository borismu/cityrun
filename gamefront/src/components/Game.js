import { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';

import QuestionList from './QuestionList';

class Game extends Component {

    state = {
        questions: [],
        selectedQuestion: null
    }

  render() {

    return (
        <Tabs defaultActiveKey="questions" id="main-game-tab">
          <Tab eventKey="questions" title="Home">
            <QuestionList authToken={this.props.authToken} />
          </Tab>
          <Tab eventKey="leaders" title="Leaderboard">
            456
          </Tab>
        </Tabs>
    );
  }
}

export default Game;
