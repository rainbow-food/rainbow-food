import React from 'react';
import LandingFood from '../components/LandingFood';
import LandingContent from '../components/LandingContent';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div>
          <LandingFood/>
          <LandingContent/>
        </div>
    );
  }
}

export default Landing;
