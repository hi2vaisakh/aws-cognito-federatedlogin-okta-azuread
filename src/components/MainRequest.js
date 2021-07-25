// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, {useState} from "react";
import {Card, Row, Col, Button, Modal, Spinner, Image} from "react-bootstrap";
import {API} from "aws-amplify";
import unicorngym from './unicorngym.png';
import jwt_decode from "jwt-decode";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

function MainRequest(props) {
  const [json, setJson] = useState(null);
  const [show, setShow] = useState(false);
  const [tkn, setTkn] = useState("");

  async function handleSubmit() {
    //setShow(true);
    const response = await getData();
    setTkn(response);
  }

  function handleClose() {
    setJson(null);
    setShow(!show);
  }

  function decodeToken(){
    var decoded = jwt_decode(props.token);
    console.log(decoded);
    setTkn(decoded);
  }

  function getData() {
    const apiName = "tokenvalidator";
    const path = "/dev/products";
    const myInit = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: props.token,
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*"
      }
    };
    return API.get(apiName, path, myInit);
  }

  return (
    <>
      <Row>
        <Col sm={3}></Col>
        <Col sm={6}>
          <Card style={{width: "100%"}}>
            <Card.Body>
              <Card.Title>
                <p style={{textAlign: "center", color: "green"}}>Hello {props.user ? (props.user.email) : (" ")}</p>
              </Card.Title>
              <Row>
                <Col sm={2}></Col>
                <Col sm={8}>
                  {" "}
                  <p style={{textAlign: "center", color: "red"}}>{props.user ? ("Welcome to AWS Cognito Unicorn Gym") : (" ")}</p>
                </Col>
                <Col sm={2}> </Col>
              </Row>
              <Row>
              <Col sm={2}></Col>
                <Col sm={8}>
                {" "}
                <Image style={{width: "50%", alignSelf: 'center'}} src={unicorngym} roundedCircle ></Image>
                </Col>
                <Col sm={8}>
                <Button variant="success" onClick={decodeToken}>
            View my Token
          </Button>{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}{" "}
          <Button variant="primary" onClick={handleSubmit}>
            View Products
          </Button>
                </Col>
                <Col sm={8}>
        <Editor
        value={tkn?(JSON.stringify(tkn)):("")}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
        </Col>
                <Col sm={2}> </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={3}></Col>
      </Row>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>
            <h3 style={{textAlign: "center"}}>Response</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {json ? (
            <p>Here is the response: {json}</p>
          ) : (
            <h3 style={{textAlign: "center"}}>
              <Spinner animation="border" variant="primary" />
            </h3>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MainRequest;
