// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, {useEffect, useState, Fragment} from "react";
import Amplify, {Auth, Hub, API} from "aws-amplify";
import {Container} from "react-bootstrap";

import Navigation from "./components/Navigation.js";
import FederatedSignIn from "./components/FederatedSignIn.js";
import MainRequest from "./components/MainRequest.js";
import "./App.css";

const config = {
  Auth: {
    region: "us-east-1",
    userPoolId: "us-east-1_JJTUjyI1S",
    userPoolWebClientId: "284o5rp9tab3g377tm303q6hi7",
    identityPoolId: "us-east-1:2daea76b-892f-4878-9580-4a93174e64da",
    oauth: {
      domain: "azureadunicorngymdemo.auth.us-east-1.amazoncognito.com",
      scope: ["email", "openid", "aws.cognito.signin.user.admin", "profile"],
      redirectSignIn: "https://dev.d1we7at3yfgko.amplifyapp.com/",
      redirectSignOut: "https://dev.d1we7at3yfgko.amplifyapp.com/",
      responseType: "code"
    }
  } ,
  API: {
    endpoints: [
      {
        name: "tokenvalidator",
        endpoint: "https://vs08pbf9rk.execute-api.us-east-1.amazonaws.com"
      }
    ]
  } 
};
Amplify.configure(config);

API.configure(config);

const federatedIdName =
  "Okta";
  const federatedAzureIdName =
  "azureadunicorngymdemo";

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);


  useEffect(() => {
    Hub.listen("auth", ({payload: {event, data}}) => {
      switch (event) {
        case "signIn":
        case "cognitoHostedUI":
          setToken("grating...");
          getToken().then(userToken => setToken(userToken.idToken.jwtToken));
          getUserInfo();
          break;
        case "signOut":
          setToken(null);
          break;
        case "signIn_failure":
        case "cognitoHostedUI_failure":
          console.log("Sign in failure", data);
          break;
        default:
          break;
      }
    });
  }, []);

  function getToken() {
    return Auth.currentSession()
      .then(session => session)
      .catch(err => console.log(err));
  }

  async function getUserInfo() {
    const userDetails = await Auth.currentAuthenticatedUser();
    console.log('attributes:', userDetails.attributes);
    setUser(JSON.parse(JSON.stringify(userDetails.attributes)));
  }

  return (
    <Fragment>
      <Navigation token={token} />
      <Container fluid>
        <br />
        {token ? (
          <MainRequest token={token} user={user}/>
        ) : (
          <FederatedSignIn federatedIdName={federatedIdName} federatedAzureIdName={federatedAzureIdName} />
        )}
      </Container>
    </Fragment>
  );
}

export default App;
