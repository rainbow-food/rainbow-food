import React from 'react';
import PropTypes from 'prop-types';
import {Card, Image, Icon } from 'semantic-ui-react';

class FoodCard extends React.Component {
  render() {
    const cardStyle = { margin: '3em' };
    return (
        <Card style={cardStyle}>
          <Image src={this.props.image}/>
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Meta>{this.props.hours}</Card.Meta>
            <Card.Content description={this.props.description}/>
          </Card.Content>
          <Card.Content extra>
            <Icon name='star'/>
            {this.props.numLikes} Likes
          </Card.Content>
        </Card>
    );
  }
}

FoodCard.propTypes={
  image: PropTypes.string,
  title: PropTypes.string,
  hours: PropTypes.string,
  description: PropTypes.string,
  numLikes: PropTypes.number,
};

export default FoodCard;
