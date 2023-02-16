import React, { Component } from 'react'

export default class LocationClassComponent extends Component {
    render() {
        window.navigator.geolocation.getCurrentPosition(
          (position) => console.log(position),
          (error) => console.log(error)
        );
        return <div>You are int the Northeren Hemisphere</div>;
      }
}

