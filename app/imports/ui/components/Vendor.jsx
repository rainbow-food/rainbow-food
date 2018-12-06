import React from 'react';
import { Card, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Vendor extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Header>{this.props.vendor.name}</Card.Header>
          <Image floated='left' size='large' src={this.props.vendor.image}/>
          <Card.Meta>{this.props.vendor.hours}</Card.Meta>
          <Card.Meta>{this.props.vendor.location}</Card.Meta>
          <Card.Description>{this.props.vendor.description}</Card.Description>
          <Card.Meta>
            <a href={this.props.vendor.menu}>more info</a>
          </Card.Meta>
          <Card.Content extra>
            <Segment.Group horizontal>
              <Segment textAlign='center'>
                <Link to={`/edit/${this.props.vendor._id}`}>Edit </Link>
              </Segment>
              <Segment textAlign='center'>
                <Link to={`/delete/${this.props.vendor._id}`}>Delete</Link>
              </Segment>
            </Segment.Group>
          </Card.Content>
        </Card>
    );
  }
}
/** Require a document to be passed to this component. */
Vendor.propTypes = {
  vendor: PropTypes.object.isRequired,
};
/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Vendor);
