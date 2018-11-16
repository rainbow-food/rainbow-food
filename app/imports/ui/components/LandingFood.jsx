import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

export default class LandingFood extends React.Component {
  render() {
    const divStyle = { height: '200px'};
    return (
        <div>
          <Grid>
            <Grid.Row>
              <Grid columns={4} centered container>
                <Grid.Column>
                  <Image style={divStyle} src="/images/food1.jpg"/>
                  <br/>
                  <Image style={divStyle} src="/images/food2.jpg"/>
                </Grid.Column>
                <Grid.Column>
                  <Image style={divStyle} src="/images/food3.jpg"/>
                  <br/>
                  <Image style={divStyle} src="/images/food4.jpg"/>
                </Grid.Column>
                <Grid.Column>
                  <Image style={divStyle} src="/images/food5.jpg"/>
                  <br/>
                  <Image style={divStyle} src="/images/food6.jpg"/>
                </Grid.Column>
                <Grid.Column>
                  <Image style={divStyle} src="/images/food7.jpg"/>
                  <br/>
                  <Image style={divStyle} src="/images/food8.jpg"/>
                </Grid.Column>
              </Grid>
            </Grid.Row>
          </Grid>
        </div>
    );
  }
}
