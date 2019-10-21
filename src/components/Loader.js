import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Lottie from 'react-lottie';
import animationData from '../assets/animate/loader';

class Loader extends Component {


  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return ReactDOM.createPortal(
      <div className="loader__container">
        <div className="loader__content">
          <Lottie width={200} options={defaultOptions}/>
        </div>
      </div>,
      document.getElementById('loader')
    );
  }
}

export default Loader;
