import React from 'react';
import  { ModalBodyConsumer } from "./ModalBodyContext";

const ModalRoot = () => (
    <ModalBodyConsumer>
        {({ component: Component, props }) =>
            Component ? <Component {...props} /> : null
        }
    </ ModalBodyConsumer>
);

export default ModalRoot;
