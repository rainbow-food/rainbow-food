import React from 'react';
import { Container, Image } from 'semantic-ui-react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */

class Footer extends React.Component {

  render() {
    const footWidth = {paddingTop: '20px', width: "100%"};
    return (
        <Container style={footWidth}>
          <Image src="/images/rainbows.jpg" />
        </Container>
    );
  }
}

export default Footer;
