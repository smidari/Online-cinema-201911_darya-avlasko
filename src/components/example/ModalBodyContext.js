import React, { Component, createContext } from 'react';

const ModalBodyContext = createContext({
    component: null,
    props: {},
    showBodyModal: () => {},
    });

export class ModalBodyProvider extends Component {
    showBodyModal = (component, props = {}) => {
        this.setState({
            component,
            props
        });
    };



    state = {
        component: null,
        props: {},
        showBodyModal: this.showBodyModal,

    };

    render() {
        return (
            <ModalBodyContext.Provider value={this.state}>
                {this.props.children}
            </ModalBodyContext.Provider>
        );
    }
}

export const ModalBodyConsumer = ModalBodyContext.Consumer;
