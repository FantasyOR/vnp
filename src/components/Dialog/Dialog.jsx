// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Dialog extends Component { 
  state = {
    hasError: false,
  }

  componentDidMount = () => {
    console.log('Dialog mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('Dialog getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('Dialog getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('Dialog did update');
  }

  componentWillUnmount = () => {
    console.log('Dialog will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="Dialog-wrapper">
        Test content
      </div>
    );
  }
}

Dialog.PropTypes = {

}

Dialog.defaulsProps = {

}

export default Dialog;