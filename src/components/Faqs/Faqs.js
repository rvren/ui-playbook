import React, { Component } from "react";
import { ProgressBar, Panel } from "react-bootstrap";
import FieldGroup from "../FieldGroup";

class Faqs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faqList: [
        {
          question:
            "What does it mean when an exchange temporarily stops selling a certain cryptocurrency?",
          answer:
            "Exchanges may be suffering from server loads or outages, or our system may have detected some anomaly and hence has temporarily stopped accepting requests for a certain coin on that exchange."
        },
        {
          question: "What does ‘rate fixed for x mins’ mean?",
          answer:
            "Some exchanges such as Evercoin/Shapeshift Precise will keep the price fixed for x minutes irrespective of the market price change. This means that you are more likely to get a predictable rate for your transaction."
        }
      ]
    };
  }

  render() {
    return (
      <div className="profile-container--faqs">
        <h1 className="profile-container--title">FAQS</h1>
        {this.state.faqList.map(item => {
          return (
            <div>
              <p className="profile-container--faqs-question">
                {item.question}
              </p>
              <p className="profile-container--faqs-answer">{item.answer}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Faqs;
