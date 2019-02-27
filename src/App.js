import React, { PureComponent } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'leaflet/dist/leaflet.css';

import LeafletMap from './components/map';
import Header from './components/header';

class App extends PureComponent {
  state = {
    markers: [],
  };

  setMarker = ({latitude, longitude}) => {
    this.setState({
      markers: [...this.state.markers, {
        latitude,
        longitude 
      }]
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App"style={{textAlign: "left"}}>
        <Header setMarker={this.setMarker} />
        <LeafletMap markers={this.state.markers} setMarker={this.setMarker} />
      </div>
    );
  }
}

export default App;
