import React from 'react';
import { Card, Image, Icon, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Profile extends React.Component {
  render() {
    return (
        <Card centered>
          <Card.Content>
            <Image floated='left' size='large' src={this.props.profile.image}/>
            <Card.Header>
              {this.props.profile.firstName} {this.props.profile.lastName}
            </Card.Header>
            <Card.Meta>
              <Icon name='heart'/> {this.props.profile.favorite}
            </Card.Meta>
            <Card.Description>
              {this.props.profile.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Segment.Group horizontal>
              <Segment textAlign='center'>
                <Link to={`/edit/${this.props.profile._id}`}>Edit </Link>
              </Segment>
              <Segment textAlign='center'>
                <Link to={`/delete/${this.props.profile._id}`}>Delete</Link>
              </Segment>
            </Segment.Group>
          </Card.Content>
        </Card>
    );
  }
}
/** Require a document to be passed to this component. */
Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};
/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Profile);
