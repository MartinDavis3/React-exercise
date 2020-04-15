import React, {Component, Fragment} from 'react';
import './App.css';
import AwareLabel from './AwareLabelClass'
import ModalTest from './ModalTest'

export interface IAppProps {  
}

export default class App extends Component<IAppProps> {
  render() {
    return (
      <Fragment>
        <AwareLabel color='purple' size='big' ></AwareLabel>
        <AwareLabel color='green' size='massive' ></AwareLabel>
        <AwareLabel color='grey' size='mini' ></AwareLabel>
        <AwareLabel color='red' size='medium' ></AwareLabel>
        <ModalTest></ModalTest>
      </Fragment>
    );
  }
}
