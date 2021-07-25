// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from "react";
import {Navbar, Button, Nav} from "react-bootstrap";
import {Auth} from "aws-amplify";

function Navigation(props) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        &nbsp; AWS Cognito Unicorn Gym
      </Navbar.Brand>
      <Nav className="justify-content-end" style={{ width: "100%" }}>
      {props.token ? (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button style={{textAlign: "right", float: 'right'}} variant="danger" onClick={() => Auth.signOut()}>
          Sign Out
        </Button>
        </div>
      ) : null}
      </Nav>
      
    </Navbar>
  );
}

export default Navigation;
