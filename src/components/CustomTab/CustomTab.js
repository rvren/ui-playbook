import React, { Component } from "react";
import "./styles.css";
import { Tabs, Tab } from "react-bootstrap";
import Profile from "../Profile";
import Transactions from "../Transactions";
import Referrals from "../Referrals";

class CustomTab extends Component {
  render() {
    return (
      <Tabs defaultActiveKey={1}>
        <Tab eventKey={1} title="My Profile" className="custom-tab">
          <Profile />
        </Tab>
        <Tab eventKey={2} title="My Transactions" className="custom-tab">
          <Transactions />
        </Tab>
        <Tab eventKey={3} title="My Referrals" className="custom-tab">
          <Referrals />
        </Tab>
      </Tabs>
    );
  }
}

export default CustomTab;
