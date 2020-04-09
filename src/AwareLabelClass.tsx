import * as React from 'react';
import { Label } from 'semantic-ui-react'

export interface IAwareLabelProps {
    color: any;
    size: any;
}

export default class AwareLabel extends React.Component<IAwareLabelProps> {
  public render() {
    const {color, size} = this.props
    return (
      <React.Fragment>
        <Label size={size} color={color} >I am a {size}, {color} label</Label>
      </React.Fragment>
    );
  }
}
