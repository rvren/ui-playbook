import React, { Component } from "react";
import "./styles.css";
import { ProgressBar, Panel } from "react-bootstrap";
import Faqs from "../Faqs";
import ReferralBlock from "../ReferralBlock";
import SupportingDocs from "../SupportingDocs";
import AdditionalInfo from "../AdditionalInfo";
import BasicInfo from "../BasicInfo";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-container">
        <ReferralBlock />
        <div className="profile-container--profile-details">
          <div className="profile-container--profile-details--status">
            <h1 className="profile-container--title">My Profile</h1>
            <div className="profile-container--profile-details--value">
              <div>
                <ProgressBar
                  bsStyle="success"
                  now={35}
                  className="profile-container--progress"
                />
                <p className="profile-container--progress-text">35% Complete</p>
              </div>
              <div>{/** <span>i</span> **/}</div>
            </div>
          </div>
        
        <BasicInfo/>
        <AdditionalInfo/>
        <SupportingDocs/>
          
        </div>

        <Faqs />
      </div>
    );
  }
}

export default Profile;
