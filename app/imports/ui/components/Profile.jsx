import React from 'react';
import { Card, Image, Feed } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Profile extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image floated='right' size='mini' src={this.props.profile.image} />
            <Card.Header>{this.props.profile.firstName} {this.props.profile.lastName}</Card.Header>
            <Card.Meta>{this.props.profile.address}</Card.Meta>
            <Card.Description>
              {this.props.profile.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/edit/${this.props.profile._id}`}>Edit</Link>
          </Card.Content>

          <Card.Content extra>
            <AddNote owner={this.props.profile.owner} contactId={this.props.profile._id}/>
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
Profile.propTypes = {
  contact: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Profile);
