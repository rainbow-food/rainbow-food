import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class VendorAdmin extends React.Component {
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
            {this.props.vendor.owner}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
VendorAdmin.propTypes = {
  vendor: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(VendorAdmin);
