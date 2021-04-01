import { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

import  { submitAnswer } from '../services/api';


class QuestionDetail extends Component {

    state = {
        answer: '',
        loading: false
    }

    onAnswerChange = (event) => {
        this.setState({answer: event.target.value||''});
    }

    onFormSubmit = async (event) => {
        event.preventDefault()
        this.setState({loading: true});
        const {answer} = this.state;
        const {question, authToken} = this.props;
        try {
            const isAnswerCorrect = await submitAnswer(question.id, answer, authToken);
            console.log(isAnswerCorrect);
            // this.props.parentSetState({
            //     isAuthenticated: true,
            //     authToken: token
            // })
        }
        catch(err){
            console.error(err.message);
        }
        finally{
            this.setState({loading: false});
        }
    }

    render() {
        const {question} = this.props 
        return (
            <Card className="m-2">
                <Card.Header>
                    {question.question_text}
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Answer</Form.Label>
                            <Form.Control type="text" placeholder="Type your answer" onChange={this.onTeamNameChange} value={this.state.name}/>
                        </Form.Group>

                        <Button variant="primary" type="submit" disabled={this.state.loading}>
                            Submit answer
                        </Button>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <Card.Link href="https://maps.google.com" target="blank">View map</Card.Link>
                </Card.Footer>
            </Card>
        );
    }
}

export default QuestionDetail;
