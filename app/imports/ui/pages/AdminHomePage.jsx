import React from 'react';
import { Container, Header, Grid, Card, Image, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class AdminHomePage extends React.Component {
  render() {
    return (
        <Container textAlign='center'>
          <Header as='h1' inverted>List of Vendors</Header>
          <Grid columns={2} divided>
            <Grid.Row>
            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>Sistah Truck</Card.Header>
                  <Image src="/images/Sistah-Truck.jpg"/>
                  <Card.Meta>
                    Holmes Hall (Monday, Wednesday, Friday)
                    Center for Korean Studies (Tuesday, Thursday)
                  </Card.Meta>
                  <Card.Description>
                    Sistah Truck serves Korean-inspired local cuisine. Daily menu plate lunches include loco moco,
                    chicken katsu, and Korean-style shoyu chicken. They also serve grab-and-go dishes like bibimbap,
                    gyoza and kimchi bowls. Vegetarian options are available.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>Holoholo Grill</Card.Header>
                  <Image src="/images/Honolulu-Grill.jpg"/>
                  <Card.Meta>
                    Paradise Palms Café
                  </Card.Meta>
                  <Card.Description>
                    Holoholo Grill features healthy, locally grown salads, sandwiches, and grab-and-go items at
                    affordable prices. They are committed to using the freshest island-grown ingredients sourced
                    directly from farmers and fishermen. Grab-and-go, breakfast items, or catering for any sized group
                    are also available!
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>

            <Grid.Column>
              <Card>
                <Card.Content>
                  <Card.Header>Le Crêpe Café</Card.Header>
                  <Image src="/images/Le-Crêpe-Café.jpg"/>
                  <Card.Meta>
                    Richardson School of Law & Paradise Palms Café (2 locations)
                  </Card.Meta>
                  <Card.Description>
                    Le Crêpe Café makes traditional French crêpes, cooked to order in front of customers. They
                    specialize in a flavorsome menu of sweet and savory crêpes and use fresh ingredients, organic when
                    possible. Their utensils are even bio-compostable. Enjoy a crêpe any time of day, as a breakfast,
                    snack, main course, or dessert - close your eyes and you're in Paris!<br/>
                    Whether you’re needing a break from the law books or a pick-me-up as you’re headed to or off campus,
                    you’ll also appreciate Le Crêpe Café’s French Roast and espresso drinks.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            </Grid.Row>
          </Grid>

          <Header as='h1' inverted>List of Users</Header>
          <Grid columns={3} divided>
            <Grid.Row>
              <Grid.Column></Grid.Column>
              <Grid.Column></Grid.Column>
              <Grid.Column></Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}

export default AdminHomePage;
