import * as React from 'react';
import { Label } from 'semantic-ui-react'

export interface IAwareLabelProps {
    color: "red" | "orange" | "yellow" | "olive" | "green" | "teal" | "blue" | "violet" | "purple" | "pink" | "brown" | "grey" | "black" | undefined;
    size: "big" | "small" | "mini" | "tiny" | "medium" | "large" | "huge" | "massive" | undefined;
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
