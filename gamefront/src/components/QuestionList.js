import { Component } from 'react';
import { Row, Col, ListGroup, Card } from 'react-bootstrap';

import QuestionDetail from './QuestionDetail';
import  { getQuestions } from '../services/api';

class QuestionList extends Component {

    state = {
        questions: [],
        selectedQuestion: null
    }

    componentDidMount = async () => {
        const {authToken} = this.props;
        const questions = await getQuestions(authToken);
        this.setState({questions});
    }

    render() {

        return (
            <Row className="mt-2">
                <Col>

                    {this.state.questions.map(question => {
                        return (
                        <Card 
                            className="m-2" key={question.id} 
                            onClick={()=>this.setState({selectedQuestion:question})}
                        ><Card.Body>
                            {question.question_text}
                        </Card.Body></Card>
                        );
                    })}
                </Col>
                <Col>
                    {this.state.selectedQuestion ? <QuestionDetail question={this.state.selectedQuestion} authToken={this.props.authToken} />: "Click question to view detail"}
                </Col>
            </Row>
        );
    }
}

export default QuestionList;
