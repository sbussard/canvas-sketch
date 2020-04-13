import React, { Component, createContext } from 'react';

const Context = createContext('navbar');
export const NavBarConsumer = Context.Consumer;

export class NavBar extends Component {
  render() {
    return <Context.Provider>{this.props.children}</Context.Provider>;
  }
}
