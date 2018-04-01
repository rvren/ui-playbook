import React, { Component } from "react";
import "./styles.css";
import { Tabs, Tab } from "react-bootstrap";
import Profile from "../Profile";

class CustomTab extends Component {
  render() {
    return (
      <Tabs defaultActiveKey={1}>
        <Tab eventKey={1} title="My Profile" className="custom-tab">
          <Profile />
        </Tab>
        <Tab eventKey={2} title="My Transactions" className="custom-tab">
          <Profile />
        </Tab>
        <Tab eventKey={3} title="My Referrals" className="custom-tab">
          <Profile />
        </Tab>
      </Tabs>
    );
  }
}

export default CustomTab;
