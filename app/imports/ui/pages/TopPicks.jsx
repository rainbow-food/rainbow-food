import { Grid } from 'semantic-ui-react';
import React from 'react';
import FoodCard from '../components/FoodCard';

class TopPicks extends React.Component {
  render() {
    return (
        <div>
          <Grid centered>
            <Grid.Row>
              <FoodCard
                  image={'https://img.grouponcdn.com/deal/931bfa0ddedb49a880cc5925c7eff317/17/v1/c700x420.jpg'}
                  title={'Le Crêpe Café'}
                  hours={'Monday - Friday 8:00am - 5:00pm (Paradise Palms Café)'}
                  description={'Authentic Crepes '}
                  numLikes={100}
              />
              <FoodCard
                  image={'https://s3-media4.fl.yelpcdn.com/bphoto/wxIyz_1YGvGPVILHCcfFnQ/o.jpg'}
                  title={'The Sistah'}
                  hours={'Holmes Hall 10:00am - 2:00pm (Monday, Wednesday, Friday), Center for Korean Studies 10:00am - 2:00pm (Tuesday, Thursday)'}
                  description={'Mushroom bowl'}
                  numLikes={95}
              />
              <FoodCard
                  image={'https://s3.amazonaws.com/product-images.imshopping.com/nimblebuy/crepe-cafe-20-for-10-2-7164322-regular.jpg'}
                  title={'Le Crêpe Café'}
                  hours={'Monday - Friday 8:00am - 5:00pm (Paradise Palms Café)'}
                  description={'Authentic Crepes '}
                  numLikes={78}
              />
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
export default TopPicks;
