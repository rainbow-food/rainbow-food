import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Image, Segment } from 'semantic-ui-react';
import { Vendors } from '/imports/api/vendor/vendor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Vendor from '/imports/ui/components/Vendor';
import { Link } from 'react-router-dom';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class ListVendors extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        <Container style={{ height: '600px' }}>
          <Header as="h2" textAlign="center" inverted>List Vendors</Header>
          /** <Card.Group>
            {this.props.vendors.map((vendor, index) => <Vendor key={index} vendor={vendor}/>)}
          </Card.Group> */
          <Card.Group>

            <Card centered>
              <Card.Header>Da Spot</Card.Header>
              <Image floated='left' size='large' src='http://manoa.hawaii.edu/food/index_files/stacks_image_22.png'/>
              <Card.Meta>M-F 10:00am - 2:00pm</Card.Meta>
              <Card.Meta>Sustainability Courtyard & Saunders Hall (2 locations)</Card.Meta>
              <Card.Description>Da Spot Health Foods & Juices offers diverse, healthy and affordable cuisine with a unique take on tasty dishes from around the world. Da Spot specializes in Mediterranean and North African food with vegan and specialty meat options that can be certified halal or kosher. Offering imaginative cuisine in exotic styles of Egyptian, Greek, French, Italian, Indian, Thai, Malaysian, Ethiopian, American, Hawaiian, Japanese, Chinese, Korean, Pacific Rim and fusion cooking. Da Spot&#39;s menu also features over 15 combinations of different fruit smoothies.</Card.Description>
              <Card.Meta>
                <a href='http://manoa.hawaii.edu/food/daSpot.php'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Dunkin&#39; Donuts</Card.Header>
              <Image floated='left' size='large' src='http://manoa.hawaii.edu/food/index_files/stacks_image_57.png'/>
              <Card.Meta>M-F 7:00am - 5:00pm</Card.Meta>
              <Card.Meta>Paradise Palms Café</Card.Meta>
              <Card.Description>Dunkin&#39; Donuts in Paradise Palms Cafe will keep Hawaii running with high-quality beverage offerings–including freshly-brewed Hot and Iced Coffees–paired perfectly with delicious donuts, bakery good, sandwiches and more.</Card.Description>
              <Card.Meta>
                <a href='http://manoa.hawaii.edu/food/dunkindonuts.php'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Govinda&#39;s</Card.Header>
              <Image floated='left' size='large' src='http://manoa.hawaii.edu/food/index_files/stacks_image_2004.png'/>
              <Card.Meta>M-F 10:00am - 2:00pm</Card.Meta>
              <Card.Meta>Sustainability Courtyard</Card.Meta>
              <Card.Description>Want a sustainable selection for lunch? Try Govinda&#39;s, which offers a 100% pure vegetarian menu, with items low in cholesterol and mostly organic. They strive to bring you a healthy and delicious meal at the best possible price.

                Govinda&#39;s uses top quality produce and only the finest quality sea salt. All of the rice, grains, beans, tofu, sugar and flour are certified organic. Their menu never contains any meat or meat by-products, fish, eggs, MSG, iodized salt, preservatives, hydrogenated oils, or artificial colors or flavors.</Card.Description>
              <Card.Meta>
                <a href='http://manoa.hawaii.edu/food/govindas.php'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Holoholo Grill</Card.Header>
              <Image floated='left' size='large' src='http://manoa.hawaii.edu/food/index_files/stacks_image_639.png'/>
              <Card.Meta>M-F 8:00am - 3:00pm</Card.Meta>
              <Card.Meta>Paradise Palms Café</Card.Meta>
              <Card.Description>Holoholo Grill features healthy, locally grown salads, sandwiches, and grab-and-go items at affordable prices. They are committed to using the freshest island-grown ingredients sourced directly from farmers and fishermen. Grab-and-go, breakfast items, or catering for any sized group are also available!</Card.Description>
              <Card.Meta>
                <a href='http://manoa.hawaii.edu/food/holoholo.php'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Hot Tacos</Card.Header>
              <Image floated='left' size='large' src='http://manoa.hawaii.edu/food/index_files/stacks_image_2933.png'/>
              <Card.Meta>M-F 10:00am - 2:00pm</Card.Meta>
              <Card.Meta>Krauss Hall</Card.Meta>
              <Card.Description>Hot Tacos offers authentic Mexican food, prepped and cooked daily from scratch offering tacos, burritos, and quesadillas with meat options like steak, chicken, marinated pork, and shredded beef. They offer a la carte options or lunch plates that include beans and Spanish rice and other add on options like Chili Rellenos and Tamales.</Card.Description>
              <Card.Meta>
                <a href='http://manoa.hawaii.edu/food/hotTacos.php'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Kamitoku Ramen</Card.Header>
              <Image floated='left' size='large' src='http://manoa.hawaii.edu/food/index_files/stacks_image_1880.png'/>
              <Card.Meta>MWF 10:00am - 2:00pm, TH 10:00am - 2:00pm</Card.Meta>
              <Card.Meta>Center for Korean Studies (Monday, Wednesday, Friday) Holmes Hall (Tuesday, Thursday)</Card.Meta>
              <Card.Description>Kamitoku Ramen specializes in a Tottori-style beef bone ramen.</Card.Description>
              <Card.Meta>
                <a href='http://manoa.hawaii.edu/food/kamitoku.php'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>L&L Hawaiian Barbecue</Card.Header>
              <Image floated='left' size='large' src='http://manoa.hawaii.edu/food/index_files/stacks_image_75.png'/>
              <Card.Meta>M-F 7:00am - 4:30pm</Card.Meta>
              <Card.Meta>Athletic Complex, 2nd Floor &
                Paradise Palms Café (Two locations)</Card.Meta>
              <Card.Description>Delicious local and Asian-American fusion cuisine served in big portions at reasonable prices! Try delicious L&L favorites like the Hawaiian Barbecue beef, chicken, or short ribs! Enjoy L&L&#39;s famous fried chicken katsu, the best in town! Grab-and-go, breakfast items and party packs for groups also available.</Card.Description>
              <Card.Meta>
                <a href='http://manoa.hawaii.edu/food/LandL.php'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Lasoon</Card.Header>
              <Image floated='left' size='large' src='http://manoa.hawaii.edu/food/index_files/stacks_image_86.png'/>
              <Card.Meta>M-F 10:30am - 4:00pm</Card.Meta>
              <Card.Meta>Paradise Palms Café</Card.Meta>
              <Card.Description>Lasoon offers something for everyone with their signature exotic South Indian and Malaysian cuisine. Daily specials include chicken curry, lamb masala, garlic shrimp, seafood curry, spinach tofu, spicy eggplant, curried potatoes, coconut cabbage & over 10 different vegetarian entrees to choose from. Spiciness ranges from mild to very hot.</Card.Description>
              <Card.Meta>
                <a href='http://manoa.hawaii.edu/food/lasoon.php'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Le Crêpe Café</Card.Header>
              <Image floated='left' size='large' src='http://manoa.hawaii.edu/food/index_files/stacks_image_266.png'/>
              <Card.Meta>M-Th 8:00am - 5:30pm F 8:00am - 2:00pm(Law School), M-F 8:00am - 5:00pm(Paradise Palms Café)</Card.Meta>
              <Card.Meta>Richardson School of Law & Paradise Palms Café (2 locations)</Card.Meta>
              <Card.Description>Le Crêpe Café makes traditional French crêpes, cooked to order in front of customers. They specialize in a flavorsome menu of sweet and savory crêpes and use fresh ingredients, organic when possible. Their utensils are even bio-compostable. Enjoy a crêpe any time of day, as a breakfast, snack, main course, or dessert - close your eyes and you&#39;re in Paris!

                Whether you’re needing a break from the law books or a pick-me-up as you’re headed to or off campus, you’ll also appreciate Le Crêpe Café’s French Roast and espresso drinks.</Card.Description>
              <Card.Meta>
                <a href='http://manoa.hawaii.edu/food/leCrepe.php'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Panda Express</Card.Header>
              <Image floated='left' size='large' src='http://manoa.hawaii.edu/food/index_files/stacks_image_581.png'/>
              <Card.Meta>M-F 10:30am - 4:30pm</Card.Meta>
              <Card.Meta>Paradise Palms Café</Card.Meta>
              <Card.Description>Panda Express serves gourmet Chinese food made with only the freshest ingredients. Famous for its Orange Chicken, they also offer a number of Wok Smart entrées that contain less than 250 calories per serving, such as Shanghai Angus Steak, Kung Pao Chicken, and Broccoli Beef. Other favorites include Beijing Beef, Sweetfire Chicken Breast, and Honey Walnut Shrimp.

                Panda Express’ offerings can be enjoyed in Panda Bowls, or two and three item plates. Perfect for lunch, dinner or as a pick-me-up snack between classes.</Card.Description>
              <Card.Meta>
                <a href='http://manoa.hawaii.edu/food/pandaExpress.php'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Peace Cafe</Card.Header>
              <Image floated='left' size='large' src='http://manoa.hawaii.edu/food/index_files/stacks_image_909.png'/>
              <Card.Meta>M-F 10:00am - 2:00pm</Card.Meta>
              <Card.Meta>Sustainability Courtyard</Card.Meta>
              <Card.Description>All of their homestyle recipes, including their Green Garden Burger patties and sauces, are original. Green Garden&#39;s food concept is to offer plant-based, all-vegan, organic, natural, non-GMO, and healthy meals with no onion, garlic or other additives, therefore to preserve the original, clean and pure flavors of their food. They have gluten-free offerings daily and their 100% plant-based organic food is fresh, wholesome and delicious.</Card.Description>
              <Card.Meta>
                <a href='http://manoa.hawaii.edu/food/peaceCafe.php'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Punchbowl</Card.Header>
              <Image floated='left' size='large' src='http://manoa.hawaii.edu/food/index_files/stacks_image_1667.png'/>
              <Card.Meta>M-F 7:00am - 9:00pm</Card.Meta>
              <Card.Meta>Post Building</Card.Meta>
              <Card.Description>Punchbowl Coffee is a new brand created to promote and sell coffee from the Ka&#39;u region on the big island.
                We work directly with several growers and our goal is to assist them to grow their business while maintaining control of their quality and distribution.</Card.Description>
              <Card.Meta>
                <a href='http://manoa.hawaii.edu/food/punchbowl.php'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Sistah Truck</Card.Header>
              <Image floated='left' size='large' src='http://manoa.hawaii.edu/food/index_files/stacks_image_1956.png'/>
              <Card.Meta>MWF 10:00am - 2:00pm (Holmes Hall), TH 10:00am - 2:00pm (Center for Korean Studies)</Card.Meta>
              <Card.Meta>Holmes Hall (Monday, Wednesday, Friday) Center for Korean Studies (Tuesday, Thursday)</Card.Meta>
              <Card.Description>Sistah Truck serves Korean-inspired local cuisine. Daily menu plate lunches include loco moco, chicken katsu, and Korean-style shoyu chicken. They also serve grab-and-go dishes like bibimbap, gyoza and kimchi bowls. Vegetarian options are available.</Card.Description>
              <Card.Meta>
                <a href='http://manoa.hawaii.edu/food/sistahTruck.php'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>The Bean Counter</Card.Header>
              <Image floated='left' size='large' src='http://manoa.hawaii.edu/food/index_files/stacks_image_42.png'/>
              <Card.Meta>M-Th 7:30am - 6:00pm, F 7:30am - 4:00pm</Card.Meta>
              <Card.Meta>Shidler College of Business, 1st Floor</Card.Meta>
              <Card.Description>Local beans, Local flavor...your Local Coffee Bar.

                The Bean Counter serves up brewed coffee from the Hawaiian Islands and fulfills your caffeinated desires with a full service espresso bar. Feed your growling stomach with a dizzying array of bagels with homemade spreads, or chow down with our savory wraps, healthy salads and sweet treats.</Card.Description>
              <Card.Meta>
                <a href='http://manoa.hawaii.edu/food/beanCounter.php'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Ba-Le</Card.Header>
              <Image floated='left' size='large' src='null'/>
              <Card.Meta>M-Th 10:00am - 8:00pm, F 10:00am - 9:00pm</Card.Meta>
              <Card.Meta>2445 Campus Rd Honolulu, HI 96822</Card.Meta>
              <Card.Description>Located at Hemenway Hall, Ba-Le is the perfect stop if you&#39;re craving something a little different. Pastries, sandwiches, and pre-made salads are some of their quick lunch options. Also very popular at Ba-Le is pho noodle soup, pad thai, and banh mi sandwiches for those Asian food cravings. Spend your meal time at Ba-Le for a variety of foods and flavors!</Card.Description>
              <Card.Meta>
                <a href='https://uhm.sodexomyway.com/dining-near-me/ba-le'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Campus Center Food Court</Card.Header>
              <Image floated='left' size='large' src='null'/>
              <Card.Meta>M-F 7:00am - 3:00pm</Card.Meta>
              <Card.Meta>Campus Center</Card.Meta>
              <Card.Description>Campus Center Food Court has the largest variety of ethnic foods on campus. The hot plate line has mochiko chicken, hamburger steak, tofu stir fry and steak just to name a few! A salad bar equipped with local produce is sure to satisfy. Popular for students on the go are lunch bentos and sushi bentos from Aja. If you have some time to wait, order a custom burger at the grill made with local grass fed beef!</Card.Description>
              <Card.Meta>
                <a href='https://uhm.sodexomyway.com/dining-near-me/cc-food-court'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Gateway Café</Card.Header>
              <Image floated='left' size='large' src='null'/>
              <Card.Meta>M-F Breakfast 7:00am - 10:00am, M-F Lunch 11:00am - 2:00pm, M-Th Dinner 4:30pm - 8:00pm</Card.Meta>
              <Card.Meta>2563 Dole St Honolulu, HI 96822</Card.Meta>
              <Card.Description>A 5 minute walk from the heart of UH Manoa offering all-you-care-to-eat breakfast, lunch and dinner to hungry diners. Gateway Cafe offers Simple Servings. Foods served at this station are prepared exclusively with ingredients which do not contain the following allergens: milk, eggs, wheat, soy, shellfish, peanuts, tree nuts, and gluten. More details on our HEALTH tab.</Card.Description>
              <Card.Meta>
                <a href='https://uhm.sodexomyway.com/dining-near-me/gateway-cafe'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Hale Aloha Café</Card.Header>
              <Image floated='left' size='large' src='null'/>
              <Card.Meta>M-F 4:30pm - 8:00pm, S-Su 10:30am - 1:30pm 5:00pm - 7:30pm</Card.Meta>
              <Card.Meta>2573 Dole St Honolulu, HI 96822</Card.Meta>
              <Card.Description>At the center of Hale Aloha Towers, Hale Aloha Café is an all-you-care-to-eat facility that offers a wide variety of comfort foods and regional cuisine. Hale Aloha Cafe offers Simple Servings. Foods served at this station are prepared exclusively with ingredients which do not contain the following allergens: milk, eggs, wheat, soy, shellfish, peanuts, tree nuts, and gluten. More details on our NUTRITION tab.</Card.Description>
              <Card.Meta>
                <a href='https://uhm.sodexomyway.com/dining-near-me/hale-aloha-cafe'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Jamba Juice</Card.Header>
              <Image floated='left' size='large' src='null'/>
              <Card.Meta>M-Th 7:00am - 5:00pm, F 7:00am - 4:00pm</Card.Meta>
              <Card.Meta>Campus Center</Card.Meta>
              <Card.Description>Jamba Juice is one of our most popular locations for breakfast on the go! Grab a smoothie, acai bowl, or baked pretzels all throughout your day. Special only to location in Hawai&#39;i, we offer items made with Kona Red products, the Kona Berry Blast and Kona Berry Bowl. Both are amped with antioxidants and natural energ to keep you going. We are constantly working to add more items to our menu, so keep your eyes open for our expanding menu!</Card.Description>
              <Card.Meta>
                <a href='https://uhm.sodexomyway.com/dining-near-me/jamba-juice'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Pizza Hut Express</Card.Header>
              <Image floated='left' size='large' src='null'/>
              <Card.Meta>M-F 10:00am - 2:00pm</Card.Meta>
              <Card.Meta>Campus Center</Card.Meta>
              <Card.Description>Pizza is always a go-to option when you can&#39;t decide what to have for lunch. Our Pizza Hut Express location has daily pan Pizza Hut Photo pizza specials, breadsticks, and the popular Wingstreet items! Six different sauces for the wings are offered, and you can even mix and match your favorites. Who knows, you might just create a combo so great, we&#39;ll add it to our menu!</Card.Description>
              <Card.Meta>
                <a href='https://uhm.sodexomyway.com/dining-near-me/pizza-hut'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Simply To Go</Card.Header>
              <Image floated='left' size='large' src='null'/>
              <Card.Meta>M-F 8:00am - 3:00pm</Card.Meta>
              <Card.Meta>Campus Center</Card.Meta>
              <Card.Description>Simply To Go is just as the name says... simple items purchased to go! Skips the lines and come here to grab sandwiches, pastries, bottled beverages, and desserts while you&#39;re on the go. Simply To Go STG carries a variety of health food brands, such as Kashi, Kopali Organics and Bare Fruit Snacks. Local brands are also in stock, like manapua from Golden Coin and gelato made by La Gelateria -- both very popular with students!</Card.Description>
              <Card.Meta>
                <a href='https://uhm.sodexomyway.com/dining-near-me/simply-to-go'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Starbucks</Card.Header>
              <Image floated='left' size='large' src='null'/>
              <Card.Meta>M-Th 6:00am - 10:00pm, F 6:00am - 6:00pm</Card.Meta>
              <Card.Meta>Campus Center</Card.Meta>
              <Card.Description>With a full menu, as well as seasonal and specialty items, coffee fanatics are sure to be pleased. Also available are pastries, fruit cups, and bottled beverages for your purchase. Our location strives to give you the very same experience found at any other Starbucks across the nation. By the way, Starbucks is one of the few retail locations open later into the evening -- perfect for hanging out with some friends or studying!</Card.Description>
              <Card.Meta>
                <a href='https://uhm.sodexomyway.com/dining-near-me/starbucks'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>Stir Fresh</Card.Header>
              <Image floated='left' size='large' src='null'/>
              <Card.Meta>M-F 10:00am - 2:00pm</Card.Meta>
              <Card.Meta>Campus Center</Card.Meta>
              <Card.Description>You asked and we delivered. Stir-Fresh brings a budget conscious, fresh and healthy, Asian stir fry restaurant to the first floor of Campus Center. Come down today and build your own stir fry, choose a protein and sauce and your lunch will be tossed hot by our expert chefs. Not in the mood for stir fry? Choose from one of our signature bowls. Stop by today and enjoy the Stir-Fresh experience</Card.Description>
              <Card.Meta>
                <a href='https://uhm.sodexomyway.com/dining-near-me/stir-fresh'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

            <Card centered>
              <Card.Header>The Market</Card.Header>
              <Image floated='left' size='large' src='null'/>
              <Card.Meta>M-Su 2:00pm - 12:00am</Card.Meta>
              <Card.Meta>2585 Dole St Honolulu, HI 96822</Card.Meta>
              <Card.Description>Why go shopping off Campus when you have The Market at Hale Noelani? Your very own, on-campus convenience store to keep you stocked on all your favorite items and basic necessities. Aside from just selling groceries, The Market sells made-to-order pizzas, plate lunches, and some yummy smoothies! Whether you&#39;re looking to put together a meal, or just grab an afternoon snack, The Market has a great set of options to satisfy dorm and apartment residents!</Card.Description>
              <Card.Meta>
                <a href='https://uhm.sodexomyway.com/dining-near-me/the-market'>more info</a>
              </Card.Meta>
              <Card.Content extra>
                <Segment.Group horizontal>
                  <Segment textAlign='center'>
                    <Link to={`/edit/${this.props.vendors._id}`}>Edit </Link>
                  </Segment>
                  <Segment textAlign='center'>
                    <Link to={`/delete/${this.props.vendors._id}`}>Delete</Link>
                  </Segment>
                </Segment.Group>
              </Card.Content>
            </Card>

          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListVendors.propTypes = {
  vendors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Vendors');
  return {
    vendors: Vendors.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListVendors);
