import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Header, Loader } from 'semantic-ui-react';
import { Stuffs } from '/imports/api/stuff/stuff';
/** import StuffItem from '/imports/ui/components/StuffItem'; */
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class SavedVendors extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Header as="h2" textAlign="center" inverted>Saved Vendors</Header>
    );
  }
}

/** Require an array of Stuff documents in the props. */
SavedVendors.propTypes = {
  stuff: PropTypes.array.isRequired,
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
})(SavedVendors);
