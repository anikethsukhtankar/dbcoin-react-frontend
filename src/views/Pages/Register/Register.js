import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email:"",
      username:"",
      number:"",
      password:"",
      favorite1:"",
      favorite2:"",
      favorite3:""
  }
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:8080/RegisterUser', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name:this.state.name,
        email:this.state.email,
        username:this.state.username,
        number:this.state.number,
        password:this.state.password,
        favorite1:this.state.favorite1,
        favorite2:this.state.favorite2,
        favorite3:this.state.favorite3
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.username) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  onFavourite1Change = (event) => {
    this.setState({favorite1: event.target.value})
  }

  onFavourite2Change = (event) => {
    this.setState({favorite2: event.target.value})
  }

  onFavourite3Change = (event) => {
    this.setState({favorite3: event.target.value})
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onUsernameChange = (event) => {
    this.setState({username: event.target.value})
  }

  onNumberChange = (event) => {
    this.setState({number: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Name" onChange={this.onNameChange} />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Username" onChange={this.onUsernameChange}/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Phone Number" onChange={this.onNumberChange}/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Email" onChange={this.onEmailChange}/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-lock"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="password" placeholder="Password" onChange={this.onPasswordChange}/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Favourite 1" onChange={this.onFavourite1Change}/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Favourite 2" onChange={this.onFavourite2Change}/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Favourite 3" onChange={this.onFavourite3Change}/>
                  </InputGroup>
                  <Button color="success" block onClick={this.onSubmitSignIn}>Create Account</Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
