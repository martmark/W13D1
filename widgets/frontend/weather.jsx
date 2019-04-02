import React from 'react';

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

  }

  

  componentDidMount() {
    let that = this;
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      var request = new XMLHttpRequest();
      request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=bc79bccc6879da411e08938bcd7a2208`, true);

      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          var resp = JSON.parse(request.responseText);
          // debugger;
          that.setState({
            name: resp.name,
            temp: Math.floor((resp.main.temp - 273.15) * 9 / 5 + 32)
          });
        } else {
          // We reached our target server, but it returned an error
        }
      };
      request.onerror = function () {
        // There was a connection error of some sort
      };
      request.send();
    });
  }




  render() {
    if (!this.state.name) {
      return (
        <div className='weather'>
          <h1>Loading...</h1>
        </div>
      )};
    return (
      <div className='weather'>
      <h1>{this.state.name}</h1>
      <h1>{this.state.temp} degrees</h1>
      </div>
    )
  }

}


export default Weather;