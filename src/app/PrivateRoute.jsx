import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
        JSON.parse(localStorage.getItem('authToken')) === 'admin' ? (
          <Component {...rest} />
            ) : (
              <Redirect
                to={{
            pathname: '/',
            }}
              />

            )}
  />
            );