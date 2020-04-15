import React, { Component, Fragment } from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';
import './ModalTest.css';

export interface IModalTestProps {
}

interface IModalTestState {
  isOpen: boolean;
}

export default class ModalTest extends Component<IModalTestProps, IModalTestState> {

  constructor(props: IModalTestProps) {
    super(props);
    this.state = { isOpen: false }
  }

  closeModal = () => this.setState( { isOpen: false } );

  openModal = () => this.setState( {isOpen: true} );

  render() {
    const { isOpen } = this.state
    let myCloseIcon: JSX.Element;
    myCloseIcon = <Icon name='times' size='big' color='red' className='top right' />

    return (
      <Fragment>
        <Button onClick = {this.openModal} >
          Show Modal
        </Button>

        <Modal
          open={isOpen}
          closeOnEscape={false}
          closeOnDimmerClick={false}
          onClose={this.closeModal}
          dimmer = {'inverted'}
          size = {'small'}
          closeIcon = { myCloseIcon }
        >
          <Modal.Header>Modal Box
          </Modal.Header>
          <Modal.Content>
            <p>This is a modal box!</p>
          </Modal.Content>
            <Button
              fluid
              onClick={this.closeModal}
              content='OK'
            />
        </Modal>
      </Fragment>
    )
  }
}
