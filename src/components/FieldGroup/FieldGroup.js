import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock
} from "react-bootstrap";

class FieldGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FormGroup controlId={this.props.id}>
        <ControlLabel>{this.props.label}</ControlLabel>
        {this.props.type == "dropdown" ? (
          <FormControl componentClass="select">
            <option value={null} disabled selected>
              {this.props.placeholder}
            </option>
            {this.props.options.map(item => {
              return <option value={item}>{item}</option>;
            })}
          </FormControl>
        ) : (
          <FormControl {...this.props} />
        )}
        {this.props.help && <HelpBlock>{this.props.help}</HelpBlock>}
      </FormGroup>
    );
  }
}

export default FieldGroup;
