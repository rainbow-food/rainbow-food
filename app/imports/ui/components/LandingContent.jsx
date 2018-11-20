import React from 'react';
import { Segment, Container } from 'semantic-ui-react';

export default class LandingContent extends React.Component {

  render() {
    const aboutColor = {
      backgroundColor: "transparent", boxShadow: "none",
      border: "none", margin: "2rem 130px"
    };
    const text = { color: "white", fontSize: "20px", fontWeight: "bold" };
    const back = { padding: "0px", background: "transparent", width: "100%" };
    return (
        <Container style={back}>
          <Segment textAlign="center" style={aboutColor}>
            <p style={text}>
              Rainbow Food is an application that can help students what food they want on any given day at the University of Hawaii at Manoa.<br/>
              This app allows you to know what food will be available today and what is the top picks at campus, and it also provide the locations.<br/>
              The best thing of this app is that you can give a rate of food that you like.
            </p>
          </Segment>
        </Container>
    );
  }
}
