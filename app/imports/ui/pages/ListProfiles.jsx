import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Profile from '/imports/ui/components/Profile';
/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListProfiles extends React.Component {

  profiles = [{
    firstName: 'Philip', lastName: 'Johnson', favorite: 'Da Spot',
    image: 'https://philipmjohnson.github.io/images/philip2.jpeg',
    description: 'I am a Professor of Information and Computer Sciences at the University of Hawaii, Director ' +
        'of the Collaborative Software Development Laboratory, and the CEO of OpenPowerQuality.com.',
  },
  ];
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }
  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center" inverted>Profile</Header>
          <Card.Group>
            {this.profiles.map((profile, index) => <Profile key={index} profile={profile}/>)}
          </Card.Group>
        </Container>
    );
  }
}
/** Require an array of Stuff documents in the props. */
ListProfiles.propTypes = {
  stuffs: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};
/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Stuff');
  return {
    stuffs: Stuffs.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListProfiles);
