import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import Iframe from 'react-iframe';

import './index.css';

class Viewer extends Component {
  render() {
    const url = `https://urielaero.github.io/arjs-examples/get.html?id=${this.props.match.params.id}`;
    console.log(url);

    return (
      <div className="Viewer">
        <Link to="/topics" className="Viewer-return">REGRESAR</Link>
        <Iframe 
          url={url}
          display="initial"
          position="relative"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Viewer;
