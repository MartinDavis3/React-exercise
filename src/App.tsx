import React from 'react';
import './App.css';
import AwareLabel from './AwareLabelClass'


function App() {
  return (
    <React.Fragment>
      <AwareLabel color='purple' size='big' ></AwareLabel>
      <AwareLabel color='green' size='massive' ></AwareLabel>
      <AwareLabel color='grey' size='mini' ></AwareLabel>
      <AwareLabel color='red' size='medium' ></AwareLabel>
    </React.Fragment>
  );
}

export default App;
