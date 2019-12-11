import React, { Component } from "react";
import "./map.css";
class MapDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.content,
      isLoaded: false
    };
    console.log("map Loading ...");
    console.log(this.state);
  }
  componentDidMount() {
    this.renderMap();
  }
  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCIPiP86vMiTktACPpQDAIgthK1gh5K73U&callback=initMap"
    );
    window.initMap = this.initMap;
  };
  initMap = props => {
    console.log(props);
    var map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 7.6881285, lng: 36.8205326 },
      zoom: 8
    });
    var infowindow = new window.google.maps.InfoWindow();

    this.state.items.item.result.map(loc => {
      var contentString =
        '<div id="content">' +
        '<div id="siteNotice">' +
        "</div>" +
        '<h1 id="firstHeading" class="firstHeading">' +
        `${
          this.state.items.type === "machine"
            ? "Machine Information"
            : "House Information"
        }` +
        "</h1>" +
        '<div id="bodyContent">' +
        "<p><b>" +
        `${
          this.state.items.type === "machine" ? "Machine Type " : "House Type "
        }` +
        " </b>" +
        `${
          this.state.items.type === "machine" ? loc.machineType : loc.houseType
        }` +
        "</p>" +
        "<p><b>" +
        `${
          this.state.items.type === "machine" ? "Built Year " : "Bed Rooms "
        }` +
        "</b>" +
        `${
          this.state.items.type === "machine" ? loc.builtYear : loc.noofRoom
        }` +
        "<p><b>" +
        `${
          this.state.items.type === "machine"
            ? "Machine Model "
            : "Construction Type "
        }` +
        " </b>" +
        `${
          this.state.items.type === "machine"
            ? loc.machineModel
            : loc.houseConstType
        }` +
        "</p>" +
        "</p>" +
        "</div>" +
        "</div>";

      var marker = new window.google.maps.Marker({
        position: {
          lat: parseInt(loc.houseLatitude),
          lng: parseInt(loc.houseLongitude)
        },
        map: map,
        title: loc.housePrice,
        draggable: false,
        label: {
          text: loc.housePrice + " ETB",
          color: "white",
          backgroundcolor: "black",
          fontSize: "15px",
          fontWeight: "bold"
        }
      });
      marker.addListener("click", function() {
        infowindow.setContent(contentString);
        infowindow.open(map, marker);
      });
    });
  };

  render() {
    return (
      <main>
        <div id="map">{console.log("This is map detail")}</div>;
      </main>
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

export default MapDetail;
