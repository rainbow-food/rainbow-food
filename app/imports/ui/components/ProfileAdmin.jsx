import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class ProfileAdmin extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image floated='left' rounded size='large' src={this.props.profile.image} />
            <Card.Header>{this.props.profile.firstName} {this.props.profile.lastName}</Card.Header>
            <Card.Meta>{this.props.profile.address}</Card.Meta>
            <Card.Description>
              {this.props.profile.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            {this.props.profile.owner}
          </Card.Content>
        </Card>
    );
  }
}

/** Require a document to be passed to this component. */
ProfileAdmin.propTypes = {
  profile: PropTypes.object.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(ProfileAdmin);
