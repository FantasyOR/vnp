// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class Scene extends Component { 
  state = {
    hasError: false,
  }

  componentDidMount = () => {
    console.log('Scene mounted');
  }

  static getDerivedStateFromError(error) {
    // getDerivedStateFromError -> Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
  }

  getDerivedStateFromProps = (nextProps, prevState) => {
    console.log('Scene getDerivedStateFromProps', nextProps, prevState);
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('Scene getSnapshotBeforeUpdate', prevProps, prevState);
  }

  componentDidUpdate = () => {
    console.log('Scene did update');
  }

  componentWillUnmount = () => {
    console.log('Scene will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="Scene-wrapper">
        Test Scene
      </div>
    );
  }
}

Scene.PropTypes = {

}

Scene.defaulsProps = {

}

export default Scene;