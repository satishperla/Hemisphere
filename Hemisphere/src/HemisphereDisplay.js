// import React from "react";
// const HemisphereDisplay = (props) => {
//   return <div>You are in Northern hemisphere</div>;
// };
// export default HemisphereDisplay;

import React from "react";
import north from "./Image/north.png";
import south from "./Image/south.png";
import east from "./Image/east.png";
import west from "./Image/west.png";
const HemisphereDisplay = ({ latitude, longitude }) => {
  console.log(latitude);
  console.log(longitude);
  const lati_hemi =
    latitude > 0 ? "Northern hemisphere" : "Southern hemisphere";
  const longi_hemi =
    longitude > 0 ? "Eastern Hemisphere" : "Western Hemisphere";
  const lati_picture = latitude > 0 ? north : south;
  const longi_picture = longitude > 0 ? east : west;
  return (
    <div>
      <img src={lati_picture} alt="" />   <h3>{lati_hemi} </h3>  
      <img src={longi_picture} alt="" />   <h3>{longi_hemi} </h3>     
    </div>
  );
};
export default HemisphereDisplay;
