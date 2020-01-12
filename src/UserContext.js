import React, { Component } from "react";
const UserContext = React.createContext();
class UserContextProvider extends Component {
  state = {
    userId: "",
    userName: "",
    UserPhone: "",
    isHidden: true,
    openAddMorePhoto: true,
    openMap: false,
    mainFormOpenClose: false,
    houseLatitude: "",
    houseLongitude: ""
  };
  UpdateUserInfo = (userId, userName, userPhone) => {
    this.setState(() => {
      return { userId: userId, userName: userName, userPhone: userPhone };
    }, console.log(this.state));
  };
  closeAddMorePhoto = () => {
    this.setState(() => {
      return { openAddMorePhoto: false };
    });
  };
  closeMap = () => {
    this.setState(() => {
      return { openMap: false };
    });
  };
  closemainFormOpen = () => {
    this.setState(() => {
      return { mainFormOpenClose: false };
    });
  };
  updateLocation = (lat, long) => {
    this.setState(() => {
      return { houseLatitude: lat, houseLongitude: long };
    });
  };
  render() {
    return (
      <UserContext.Provider
        content={{
          ...this.state,
          UpdateUserInfo: this.UpdateUserInfo,
          closeAddMorePhoto: this.closeAddMorePhoto,
          closeMap: this.closeMap,
          closemainFormOpen: this.closemainFormOpen,
          updateLocation: this.updateLocation
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

const UserInfoConsumer = UserContext.Consumer;
export { UserContextProvider, UserInfoConsumer };
