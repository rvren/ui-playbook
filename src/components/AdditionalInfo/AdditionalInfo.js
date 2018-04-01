import React, { Component } from "react";
import { ProgressBar, Panel } from "react-bootstrap";

class AdditionalInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Panel className="custom-panel">
        <Panel.Heading>
          <Panel.Title toggle>
            <span>Additional Information</span>
            <span className="status-complete--dropdown">&#8964;</span>
            <br />
            <span className="status-complete--green">50% Complete</span>
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    );
  }
}

export default AdditionalInfo;
