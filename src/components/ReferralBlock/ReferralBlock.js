import React, { Component } from "react";
import { ProgressBar, Panel } from "react-bootstrap";

class ReferralBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profile-container--referral-statistics">
        <h1 className="profile-container--title">Referral Statistics</h1>
        <div className="profile-container--stats">
          <div className="profile-container--stats--item">
            <h6 className="profile-container--stats--item--title">
              Registrations
            </h6>
            <h6 className="profile-container--stats--item--value">3</h6>
          </div>
          <div className="profile-container--stats--item">
            <h6 className="profile-container--stats--item--title">
              Transactions
            </h6>
            <h6 className="profile-container--stats--item--value">14</h6>
          </div>
          <div className="profile-container--stats--item">
            <h6 className="profile-container--stats--item--title">
              Total Payout
            </h6>
            <h6 className="profile-container--stats--item--value">BTC 0.08</h6>
          </div>
        </div>
        <div className="profile-container--stats">
          <div className="profile-container--stats--copy">
            <h6 className="profile-container--stats--copy--value">
              http://www.coinswitch.co/?ref=XCD792RE00
            </h6>
            <h6 className="profile-container--stats--copy--value icon">
              &#x2398;
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default ReferralBlock;
