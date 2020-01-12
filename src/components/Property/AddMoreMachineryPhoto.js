import React, { Component } from "react";
import defaultImg from "../../img/defaultImg.png";
import "../../App.css";
import cogoToast from "cogo-toast";
import { ButtonContainer } from "../Button";
import { Link } from "react-router-dom";
import { ResourceConsumer } from "../../Resource";

export default class AddMoreMachineryPhoto extends Component {
  constructor(props) {
    super();
    this.state = {
      file: defaultImg,
      id: props.id
    };
  }
  handleUpload = () => {
    const { id } = this.state;
    var data = new FormData();
    var image = document.querySelector('input[type="file"]').files[0];
    data.append("image", image);
    data.append("houseId", id);
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "http://michutaxi.com/android_connect/addMoreMachineryPhoto.php";

    fetch(proxyurl + url, {
      method: "POST",
      body: data
    })
      .then(response => {
        if (!response.ok) throw new Error(response.status);
        else return response.json();
      })
      .then(data => {
        this.setState({
          houseId: data.id,
          isHidden: true
        });
        cogoToast.success("Successfully Uploaded");
      })
      .catch(error => {
        console.log("error: " + error);
        cogoToast.error("Something went wrong");
      });
  };

  render() {
    return (
      <ResourceConsumer>
        {value => {
          const { cmachineopenAddMorePhoto } = value;
          return (
            <div className="main-area-more-photo">
              <div className="photo-container">
                <div className="upload-title">Upload more photo here</div>
                <div className="image-container">
                  <div className="photo-area">
                    <img
                      type="file"
                      src={this.state.file}
                      alt="Machinery"
                      className="photo-icon"
                    ></img>
                  </div>
                  <input
                    type="file"
                    className="photo-footer"
                    onChange={event => {
                      this.setState({
                        file: URL.createObjectURL(event.target.files[0])
                      });
                    }}
                  />
                </div>
              </div>
              <button className="btn-upload" onClick={this.handleUpload}>
                Upload{" "}
              </button>
              <ButtonContainer
                className="ml-3"
                cart
                onClick={() => cmachineopenAddMorePhoto()}
              >
                Back to Registration
              </ButtonContainer>
            </div>
          );
        }}
      </ResourceConsumer>
    );
  }
}
