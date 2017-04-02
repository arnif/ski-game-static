import React, { Component } from "react";
import feature from "./play_store_feature.png";
import first from "./1.png";
import second from "./2.png";
import third from "./3.png";
import appstore from "./appstore.svg";
import googleplay from "./googleplay.png";
import "./App.css";
import ReactGA from "react-ga";

ReactGA.initialize("UA-96515254-2");

const APPSTOREURL = "https://itunes.apple.com/app/id1219077526";
const GOOGLEPLAYURL = "https://play.google.com/store/apps/details?id=com.arnif.skigame";

// function getMobileOperatingSystem() {
//   // http://stackoverflow.com/a/21742107/3190897
//   const userAgent = navigator.userAgent || navigator.vendor || window.opera;
//
//   // Windows Phone must come first because its UA also contains "Android"
//   if (/windows phone/i.test(userAgent)) {
//     return "Windows Phone";
//   }
//
//   if (/android/i.test(userAgent)) {
//     return "Android";
//   }
//
//   // iOS detection from: http://stackoverflow.com/a/9039885/177710
//   if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
//     return "iOS";
//   }
//
//   return "unknown";
// }
//
// const SYSTEM = getMobileOperatingSystem();
//
// const isSystemSupported = SYSTEM === "Android" || SYSTEM === "iOS"
//   ? true
//   : false;

const track = (device, placement) => {
  ReactGA.event({
    category: "Clicked CTA",
    action: `Clicked ${placement}`,
    label: device
  });
};

const Screenshot = ({ src }) => {
  return (
    <div className="App-screenshot-wrapper">
      <img src={src} className="App-screenshot" alt="Ski Game Screenshot" />
    </div>
  );
};

const CTA = ({ className, placement }) => {
  return (
    <div className={className}>
      <a href={APPSTOREURL} onClick={() => track("iOS", placement)}>
        <img src={appstore} className="App-badge" alt="App store badge" />
      </a>
      <a href={GOOGLEPLAYURL} onClick={() => track("Android", placement)}>
        <img src={googleplay} className="App-badge" alt="Google Play badge" />
      </a>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={feature} className="App-feature" alt="Ski Game" />
        </div>
        <CTA className="App-cta" placement="Top" />
        <div className="App-intro">
          <p>
            Shred the slopes as Ed in this fast paced Ski game. Be careful to not hit the trees, that hurts.
          </p>
          <Screenshot src={second} />
          <p>
            Try to beat your high score each time you ski down the mountain. Get high enough score and who knows you might see an unusual creature on the slopes.
          </p>
          <Screenshot src={third} />
          <p>
            Ski is out now for both Android and iOS. Go and play and enjoy.
          </p>
          <Screenshot src={first} />
        </div>
        <CTA className="App-footer" placement="Footer" />
        <div className="App-social">
          <iframe
            src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fskiarcadegame%2F&amp;width=96&amp;layout=button&amp;action=like&amp;size=small&amp;show_faces=true&amp;share=true&amp;height=65&amp;appId=261074794334074"
            width="96"
            height="65"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
          />
        </div>
      </div>
    );
  }
}

export default App;
