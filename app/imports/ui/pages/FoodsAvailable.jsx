import React from 'react';
import { Grid } from 'semantic-ui-react';
import FoodCard from '../components/FoodCard';

class FoodsAvailable extends React.Component {
  render(){
    return(
      <div>
        <Grid centered>
          <Grid.Row>
            <FoodCard
                image={'https://s3-media3.fl.yelpcdn.com/bphoto/OgerRwVuvfneqBEezNusqQ/300s.jpg'}
                title={'The Sistah'}
                hours={'Holmes Hall (Monday, Wednesday, Friday) and Center for Korean Studies (Tuesday, Thursday)'}
                description={'Sistah Truck serves Korean-inspired local cuisine.'}
            />
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default FoodsAvailable;
