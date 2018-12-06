import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Vendor extends React.Component {
  render() {
    return (
        <Card centered>
            <Card.Header>
              {this.props.vendor.name}
            </Card.Header>
          <Card.Meta>{this.props.vendor.hours}</Card.Meta>
          <Card.Meta>{this.props.vendor.location}</Card.Meta>
            <Card.Description>
              {this.props.vendor.description}
            </Card.Description>
          <Link to={this.props.vendor.more}>more info</Link>
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
