import React, { Component } from "react";
import "./map.css";
import { ResourceConsumer } from "../Resource";
class BrowserMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      latitude: 0,
      longitude: 0,
      update: false
    };
  }
  componentDidMount() {
    this.renderMap();
    this.getGeoLocaion();
  }
  getGeoLocaion = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  showPosition = position => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  };
  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCIPiP86vMiTktACPpQDAIgthK1gh5K73U&callback=initMap"
    );
    window.initMap = this.initMap;
  };
  initMap = props => {
    console.log(props);

    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: this.state.latitude, lng: this.state.longitude },
      zoom: 15,
      backgroundColor: "#FFFFFF"
    });
    var marker = new window.google.maps.Marker({
      position: {
        lat: this.state.latitude,
        lng: this.state.longitude
      },
      map: map,
      draggable: false,
      label: {
        color: "white",
        backgroundcolor: "black",
        fontSize: "15px",
        fontWeight: "bold"
      }
    });
    window.google.maps.event.addListener(map, "click", event => {
      this.setState(
        {
          latitude: event.latLng.lat().toFixed(7),
          longitude: event.latLng.lng().toFixed(7)
        },
        this.setState({
          update: true
        })
      );
    });
    window.google.maps.event.trigger(map, "resize");
  };

  render() {
    console.log(this.state);
    return (
      <ResourceConsumer>
        {value => {
          const { updateLocation } = value;

          if (this.state.update) {
            updateLocation(this.state.latitude, this.state.longitude);
            this.setState({ update: false });
          }
          return (
            <div className="py-5">
              <div className="container">
                <div
                  id="map"
                  style={{
                    width: "80vw",
                    height: "90vh",
                    backgroundcolor: "black"
                  }}
                ></div>
              </div>
            </div>
          );
        }}
      </ResourceConsumer>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default BrowserMap;
