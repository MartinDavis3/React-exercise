import * as React from 'react';
import { Label } from 'semantic-ui-react'

export interface IAwareLabelProps {
    color: any;
    size: any;
}

export default class AwareLabel extends React.Component<IAwareLabelProps> {
  public render() {
    // const labelColour = this.props.color
    return (
      <React.Fragment>
        <Label size={this.props.size} color={this.props.color} >I am a {this.props.size}, {this.props.color} label</Label>
      </React.Fragment>
    );
  }
}
