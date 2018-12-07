import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Image, Segment } from 'semantic-ui-react';
import { Vendors } from '/imports/api/vendor/vendor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Vendor from '/imports/ui/components/Vendor';
import { Link } from 'react-router-dom';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListVendors extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container style={{ height: '600px' }}>
          <Header as="h2" textAlign="center" inverted>List Vendors</Header>
          /** <Card.Group>
            {this.props.vendors.map((vendor, index) => <Vendor key={index} vendor={vendor}/>)}
          </Card.Group> */
          <Card.Group>
            <Card centered>
              <Card.Header>Da Spot</Card.Header>
              <Image floated='left' size='large' src='http://manoa.hawaii.edu/food/index_files/stacks_image_22.png'/>
              <Card.Meta>M-F 10:00am - 2:00pm</Card.Meta>
              <Card.Meta>Sustainability Courtyard & Saunders Hall (2 locations)</Card.Meta>
              <Card.Description>Da Spot Health Foods & Juices offers diverse, healthy and affordable cuisine with a unique take on tasty dishes from around the world. Da Spot specializes in Mediterranean and North African food with vegan and specialty meat options that can be certified halal or kosher. Offering imaginative cuisine in exotic styles of Egyptian, Greek, French, Italian, Indian, Thai, Malaysian, Ethiopian, American, Hawaiian, Japanese, Chinese, Korean, Pacific Rim and fusion cooking. Da Spots menu also features over 15 combinations of different fruit smoothies.</Card.Description>
              <Card.Meta>
                <a href='http://manoa.hawaii.edu/food/daSpot.php'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListVendors.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Vendors');
  return {
    vendors: Vendors.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListVendors);
