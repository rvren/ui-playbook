import React, { Component } from "react";
import CustomNavbar from "../../components/CustomNavbar";
import CustomTab from "../../components/CustomTab";


class Wrapper extends Component {
  render() {
    return (
      <div>
        <CustomNavbar/>
        <CustomTab/>
      </div>
    );
  }
}

export default Wrapper;
