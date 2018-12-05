import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Tracker } from 'meteor/tracker';

/** Create a Meteor collection. */
const Profiles = new Mongo.Collection('Profiles');

/** Create a schema to constrain the structure of documents associated with this collection. */
const ProfileSchema = new SimpleSchema({
  firstName: String,
  lastName: String,
  favorite: {
    type: String,
    allowedValues:['Da Spot', 'Dunkin Donuts', 'Govinda s', 'Holoholo Grill', 'Hot Tacos', 'Kamitoku Ramen',
      'L&L Hawaiian Barbecue', 'Lasoon', 'Le Crêpe Café', 'Panda Express', 'Peace Cafe', 'Punchbowl', 'Sistah Truck',
      'The Bean Counter' ],
  },
  image: String,
  description: String,
  owner: String,
}, { tracker: Tracker });

/** Attach this schema to the collection. */
Profiles.attachSchema(ProfileSchema);

/** Make the collection and schema available to other code. */
export { Profiles, ProfileSchema };
