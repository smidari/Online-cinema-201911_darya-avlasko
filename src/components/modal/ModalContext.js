import React, { Component, createContext } from "react";
import PropTypes from "prop-types";

const ModalContext = createContext({
  component: null,
  props: {},
  showModal: () => {},
  hideModal: () => {}
});

export class ModalProvider extends Component {
  // eslint-disable-next-line react/static-property-placement
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  // eslint-disable-next-line react/sort-comp
  showModal = (component, props = {}) => {
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      component,
      // eslint-disable-next-line react/no-unused-state
      props
    });
  };

  hideModal = () =>
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      component: null,
      // eslint-disable-next-line react/no-unused-state
      props: {}
    });

  // eslint-disable-next-line react/state-in-constructor
  state = {
    // eslint-disable-next-line react/no-unused-state
    component: null,
    // eslint-disable-next-line react/no-unused-state
    props: {},
    // eslint-disable-next-line react/no-unused-state
    showModal: this.showModal,
    // eslint-disable-next-line react/no-unused-state
    hideModal: this.hideModal
  };

  render() {
    const { children } = this.props;
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <ModalContext.Provider value={this.state}>
        {children}
      </ModalContext.Provider>
    );
  }
}

export const ModalConsumer = ModalContext.Consumer;
