import React, { Component } from "react";

// export default class LatitudeClassComponent extends Component {

//     constructor(props){
//         super(props);
//         this.state={latitude:null, errorMessage:""};
//         window.navigator.geolocation.getCurrentPosition(
//             (position)=>{
//                 this.setState({latitude:position.coords.latitude})
//             },
//             (error)=>{
//                 this.setState({errorMessage:error.message})
//             }
//         );
//     }

//   render() {
//     return (
//       <div>{this.state.latitude} {this.state.errorMessage}</div>
//     )
//   }
// }

// export default class LatitudeClassComponent extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { latitude: null, errorMessage: "" };
//     window.navigator.geolocation.getCurrentPosition(
//       (position) => {
//         this.setState({ latitude: position.coords.latitude });
//         //this.state.latitude = position.coords.latitude
//       },
//       (error) => {
//         this.setState({ errorMessage: error.message });
//       }
//     );
//   }
//   render() {
//     if (this.state.errorMessage && !this.state.latitude) {
//       return <div> {this.state.errorMessage}</div>;
//     }
//     if (!this.state.errorMessage && this.state.latitude) {
//       return <div> {this.state.latitude}</div>;
//     } else {
//       return <div>Loading...</div>;
//     }
//   }
// }

// using component did mount


// export default class LatitudeClassComponent extends Component {

//     state= {latitude: null, errorMessage:""}

//     componentDidMount(){
//         window.navigator.geolocation.getCurrentPosition(
//                   (position) => {
//                     this.setState({ latitude: position.coords.latitude });
//                     //this.state.latitude = position.coords.latitude
//                   },
//                   (error) => {
//                     this.setState({ errorMessage: error.message });
//                   }
//                 );

//     }
//     render() {
//             if (this.state.errorMessage && !this.state.latitude) {
//               return <div> {this.state.errorMessage}</div>;
//             }
//             if (!this.state.errorMessage && this.state.latitude) {
//               return <div> {this.state.latitude}</div>;
//             } else {
//               return <div>Loading...</div>;
//             }
//           }
// }


//using component as peops

import HemisphereDisplay from "./HemisphereDisplay";
export default class LatitudeClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null,longitude: null, errorMessage: "" };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
        this.setState({ longitude: position.coords.longitude });
        //this.state.latitude = position.coords.latitude
      },
      (error) => {
        this.setState({ errorMessage: error.message });
      }
    );
  }
  render() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div> {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      return <div> <HemisphereDisplay latitude={this.state.latitude} longitude={this.state.longitude}></HemisphereDisplay></div>;
    } else {
      return <div>Loading...</div>;
    }
  }
}