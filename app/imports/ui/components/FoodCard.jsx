import React from 'react';
import PropTypes from 'prop-types';
import {Card, Image } from 'semantic-ui-react';

class FoodCard extends React.Component {
  render() {
    return (
        <Card>
          <Image src={this.props.image}/>
          <Card.Content>
            <Card.Header>{this.props.title}</Card.Header>
            <Card.Meta>{this.props.hours}</Card.Meta>
            <Card.Content description={this.props.description}/>
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
};

export default FoodCard;
