import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Table, List, Card } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
/** import StuffItem from '/imports/ui/components/StuffItem'; */
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class Profile extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container>
          <Header as="h2" textAlign="center">Profile</Header>
          <Table>
            <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                <button className='ui button' role='button'>Edit</button>
              </Table.HeaderCell>
              <Table.HeaderCell width="80&"><Header as="h1" textAlign="center">INFO</Header></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as="h1" textAlign="center">NAME: John Doe</Header>
                  <Header as="h2">Food Preference</Header>
                  <List>
                    <List.Item>American</List.Item>
                    <List.Item>Japanese</List.Item>
                  </List>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Container>
                  <Header as="h2" textAlign="center">Saved Vendors</Header>
                  <Card>
                    Subway
                  </Card>
                </Container>
              </Table.Row>
          </Table.Body>
          </Table>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
Profile.propTypes = {
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
})(Profile);
