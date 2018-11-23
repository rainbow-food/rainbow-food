import React from 'react';
import { Grid } from 'semantic-ui-react';
import FoodCard from '../components/FoodCard';

class FoodsAvailable extends React.Component {
  render(){
    return(
      <div>
        <Grid centered divided>
          <Grid.Row>
            <FoodCard
                image={'https://1.bp.blogspot.com/-IWWvNoPOQfI/U6-2R99DcqI/AAAAAAAABrg/jMW8SpuTgCQ/s1600/holoholo001.jpg'}
                title={'Holoholo Grill'}
                hours={'Monday - Friday 8:00am - 3:00pm'}
                description={'Poached Apple Toss'}
            />
            <FoodCard
                image={'https://media-cdn.tripadvisor.com/media/photo-s/10/91/6c/25/holoholo-grill-s-lava.jpg'}
                title={'Holoholo Grill'}
                hours={'Monday - Friday 8:00am - 3:00pm'}
                description={'Lava Cake'}
            />
            <FoodCard
                image={'https://img.grouponcdn.com/deal/931bfa0ddedb49a880cc5925c7eff317/17/v1/c700x420.jpg'}
                title={'Le Crêpe Café'}
                hours={'Monday - Friday 8:00am - 5:00pm (Paradise Palms Café)'}
                description={'Authentic Crepes '}
            />
            <FoodCard
                image={'https://s3.amazonaws.com/product-images.imshopping.com/nimblebuy/crepe-cafe-20-for-10-2-7164322-regular.jpg'}
                title={'Le Crêpe Café'}
                hours={'Monday - Friday 8:00am - 5:00pm (Paradise Palms Café)'}
                description={'Authentic Crepes '}
            />
            <FoodCard
                image={'https://s3-media4.fl.yelpcdn.com/bphoto/wxIyz_1YGvGPVILHCcfFnQ/o.jpg'}
                title={'The Sistah'}
                hours={'Holmes Hall 10:00am - 2:00pm (Monday, Wednesday, Friday), Center for Korean Studies 10:00am - 2:00pm (Tuesday, Thursday)'}
                description={'Mushroom bowl'}
            />
            <FoodCard
                image={'https://s3-media2.fl.yelpcdn.com/bphoto/5OfTwg1IRLssCRfc0ZXaLw/o.jpg'}
                title={'The Sistah'}
                hours={'Holmes Hall 10:00am - 2:00pm (Monday, Wednesday, Friday), Center for Korean Studies 10:00am - 2:00pm (Tuesday, Thursday)'}
                description={'Chicken broccoli speacial'}
            />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default FoodsAvailable;
