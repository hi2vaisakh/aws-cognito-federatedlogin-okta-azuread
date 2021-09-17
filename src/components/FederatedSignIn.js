// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, {useState}from "react";
import {Card, Row, Col, Button, Form, Alert} from "react-bootstrap";
import {Auth} from "aws-amplify";

function FederatedSignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await Auth.signIn(email, password);
      console.log("res "+res);
  } catch (error) {
      console.log('error signing in', error);
      setIsValid(false);
  }
  }

  return (
    <Row>
      <Col sm={3}></Col>
      <Col sm={6}>
        <Card style={{width: "100%"}}>
          <Card.Body>
            <Card.Title>
            {isValid 
      ? <p></p>
      : <Alert variant="danger">Oops! Invalid Username or Password</Alert>
}
              <h3 style={{textAlign: "center"}}>Welcome</h3>
            </Card.Title>
            <Card.Text style={{textAlign: "center"}}>
              In order to proceed please authenticate
            </Card.Text>
            <Row>
              <Col sm={3}></Col>
              <Col sm={6}>
                {" "}
                <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          
          <Form.Control
            autoFocus
            type="email"
            value={email}
            placeholder="username"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          
          <Form.Control
            type="password"
            value={password}
             placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block variant="success" type="submit" disabled={!validateForm()}>
          Sign In
        </Button>
      </Form>
    </div>
              </Col>
              <Col sm={3}> </Col>
            </Row>
            <Card.Text style={{textAlign: "center"}}>
              <a style={{color: "blue"}}>or Sigin in with below Federated Identities</a>
            </Card.Text>
            <Row>
              <Col sm={3}></Col>
              <Col sm={6}>
                {" "}
                <Button
                  block
                  variant="info"
                  onClick={() =>
                    Auth.federatedSignIn({provider: props.federatedIdName})
                  }
                >
                  Sign In with Okta
                </Button>
              </Col>
              <Col sm={3}> </Col>
            </Row>
            <Card.Text style={{textAlign: "center"}}>
              <a style={{color: "blue"}}></a>
            </Card.Text>
            <Row>
              <Col sm={3}></Col>
              <Col sm={6}>
                {" "}
                <Button
                  block
                  variant="primary"
                  onClick={() =>
                    Auth.federatedSignIn({provider: props.federatedAzureIdName})
                  }
                >
                  Sign In with Azure AD
                </Button>
              </Col>
              <Col sm={3}> </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={3}></Col>
    </Row>
  );
}

export default FederatedSignIn;
