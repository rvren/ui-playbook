import React, { Component } from "react";
import { ProgressBar, Panel } from "react-bootstrap";
import FieldGroup from "../FieldGroup";

class BasicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryList: ["Brazil", "Russia", "India", "China"]
    };
  }

  render() {
    return (
      <Panel defaultExpanded>
        <Panel.Heading>
          <Panel.Title toggle>
            <span>Basic Information</span>
            <span className="status-complete--dropdown">&#8964;</span>
            <br />
            <span className="status-complete--green">50% Complete</span>
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            <form>
              <FieldGroup
                id="formControlsName"
                type="text"
                label="Name"
                placeholder="Enter your name"
              />
              <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Email"
                placeholder="Enter your email address"
              />
              <FieldGroup
                id="formControlsPhone"
                label="Phone"
                type="number"
                placeholder="Add phone number"
              />
              <p className="form-hint-text">
                Adding phone number will further secure your account and allow
                transactions for more currencies and exchanges
              </p>
              <FieldGroup
                id="formControlsCountry"
                label="Country of Residence"
                type="dropdown"
                placeholder="Select Country"
                options={this.state.countryList}
              />
              <p className="form-hint-text">
                Adding country information will open more relevant options for
                trading currencies and will reduce chances of order rejection
              </p>
              <FieldGroup
                id="formControlsPin"
                label="PIN Code"
                type="number"
                placeholder="PIN Code"
              />
              <p className="form-hint-text">6 digit code</p>
            </form>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    );
  }
}

export default BasicInfo;
