import React, { Component } from "react";
import { ProgressBar, Panel } from "react-bootstrap";

class SupportingDocs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Panel className="custom-panel">
        <Panel.Heading>
          <Panel.Title toggle>
            <span>Supporting Documents</span>
            <span className="status-complete--dropdown">&#8964;</span>
            <br />
            <span className="status-complete--orange">Pending</span>
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

export default SupportingDocs;
