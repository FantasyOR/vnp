// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Background extends Component { 
  state = {
    hasError: false,
  }

  componentDidMount = () => {
    console.log('Background mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('Background getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('Background getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('Background did update');
  }

  componentWillUnmount = () => {
    console.log('Background will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="Background-wrapper">
        Test content
      </div>
    );
  }
}

Background.PropTypes = {

}

Background.defaulsProps = {

}

export default Background;