import { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import {performAuth} from '../services/api';


class Auth extends Component {

    state = {
        loading: false,
        name: '',
        password:''
    }

    onTeamNameChange = (event) => {
        this.setState({name: event.target.value||''});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value||''});
    }

    onAuthSubmit = async (event) => {
        event.preventDefault()
        this.setState({loading: true});
        const {name, password} = this.state;
        try {
            const token = await performAuth(name, password);
            console.log(token);
            this.props.parentSetState({
                isAuthenticated: true,
                authToken: token
            })
        }
        catch(err){
            console.error(err.message);
        }
        finally{
            this.setState({loading: false});
        }
    }

    render() {
        return (
            <Form onSubmit={this.onAuthSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Team</Form.Label>
                    <Form.Control type="text" placeholder="Enter team's name" onChange={this.onTeamNameChange} value={this.state.name}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange} value={this.state.password} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={this.state.loading}>
                    Start
                </Button>
            </Form>
        );
    }
}

export default Auth;
