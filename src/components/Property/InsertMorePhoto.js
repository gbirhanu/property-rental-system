import React, { Component } from "react";
import defaultImg from "../../img/defaultImg.png";
import "../../App.css";
import cogoToast from "cogo-toast";
import { ButtonContainer } from "../Button";
import { Link } from "react-router-dom";

export default class InsertMorePhoto extends Component {
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
    const url = "http://michutaxi.com/android_connect/addMorePhoto.php";

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
    console.log(this.state);

    return (
      <React.Fragment>
        <div className="main-area-more-photo">
          <div className="photo-container">
            <div className="upload-title">Upload More photo here</div>
            <div className="image-container">
              <div className="photo-area">
                <img
                  type="file"
                  src={this.state.file}
                  alt="House"
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
          <Link to="/ethiorental/registeration">
            <ButtonContainer className="ml-3" cart>
              Back to Registration
            </ButtonContainer>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}
