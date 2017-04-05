// Import React
import React from "react";
import TramLogoWhite from '../assets/TramLogoWhite.png';
import HomePage from '../assets/HomePage.png';
import UserProfile from '../assets/UserProfile.png';
import UserProfileNoJoinedTrip from '../assets/UserProfileNoJoinedTrip.png';
import UserProfileJoinedTrip from '../assets/UserProfileJoinedTrip.png';
import SnowReportScreenShot from '../assets/SnowReportScreenShot.png';
import SearchScreenShot from '../assets/SearchScreenShot.png';
import chatScreenShot from '../assets/chatScreenShot.png';
import SnowReport from '../assets/Snowreport.png';
import snowreportGIF from '../assets/snowreportGIF.gif';
import searchtripGIF from '../assets/searchtripGIF.gif';
import chatGIF from '../assets/chatGIF.gif';
import RiderTripView from '../assets/RiderTripView.png';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  bgImage
} from "spectacle";

import Counter from './Counter';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#000000",
  secondary: "#263238",
  tertiary: "#FFFFFF",
  quartenary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            <img src={ TramLogoWhite }/>
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={1} caps textColor="tertiary" align="flex-start">WHO? WHY?</Heading>
            <Text size={2} textColor='tertiary'>To Provide Skiers, Snowboarders, and Mountain Lovers a way to carpool in order to reduce traffic and keep Utah's air clean.</Text>
        </Slide>
        <Slide transition={["fade"]} bgImage={UserProfileNoJoinedTrip}>
        </Slide>
        <Slide transition={["fade"]} bgImage={SnowReportScreenShot}>
        </Slide>
        <Slide transition={["fade"]} bgImage={snowreportGIF}>
        </Slide>
        <Slide transition={["fade"]} bgImage={UserProfileNoJoinedTrip}>
        </Slide>
        <Slide transition={["fade"]} bgImage={SearchScreenShot}>
        </Slide>
        <Slide transition={["fade"]} bgImage={searchtripGIF}>
        </Slide>
        <Slide transition={["fade"]} bgImage={UserProfileJoinedTrip}>
        </Slide>
        <Slide transition={["fade"]} bgImage={RiderTripView}>
        </Slide>
        <Slide transition={["fade"]} bgImage={chatScreenShot}>
        </Slide>
        <Slide transition={["fade"]} bgImage={chatGIF}>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            <Text textColor="tertiary">TECHNOLOGY STACK</Text>
          </Heading>
            <List>
              <Appear><ListItem style={{fontSize:'100px'}} textColor="tertiary">APIS: SkiUtah, GoogleMaps</ListItem></Appear>
              <Appear><ListItem style={{fontSize:'100px'}} textColor="tertiary">BACKEND: Ruby on Rails</ListItem></Appear>
              <Appear><ListItem style={{fontSize:'100px'}} textColor="tertiary">FRONTEND: React, Redux, Javascript</ListItem></Appear>

            </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            <Text textColor="tertiary">SCOPE OF THE PROJECT</Text>
          </Heading>
            <List>
              <Appear><ListItem style={{fontSize:'90px'}} textColor="tertiary">IMPROVE USER EXPERIENCE</ListItem></Appear>
              <Appear><ListItem style={{fontSize:'90px'}} textColor="tertiary">PRIORITIZE / DELETE COMPONENTS</ListItem></Appear>
              <Appear><ListItem style={{fontSize:'90px'}} textColor="tertiary">REORGANIZED</ListItem></Appear>

            </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            <Text textColor="tertiary">WHAT'S NEXT?</Text>
          </Heading>
          <List>
            <Appear><ListItem style={{fontSize:'90px'}} textColor="tertiary">Monetizing Our App</ListItem></Appear>
            <Appear><ListItem style={{fontSize:'90px'}} textColor="tertiary">Partnering With Interested Businesses</ListItem></Appear>
            <Appear><ListItem style={{fontSize:'90px'}} textColor="tertiary">Developing Additional Features</ListItem></Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            <img src={ TramLogoWhite }/>
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
