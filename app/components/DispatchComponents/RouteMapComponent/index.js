import React from 'react';
import { connect } from 'react-redux';
import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
    Marker,
} from "react-google-maps";
import Green from "../../../assets/green.png";
import Pink from  "../../../assets/pink.png";

const RouteMapComponent = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={props.center}
    gestureHandling= 'cooperative'
  >

    {
      props.plottingDirections.map((dirs,index)=>{
        return(
          <DirectionsRenderer key={index} directions={dirs.dir.result} options={{suppressMarkers: true,polylineOptions: {
            strokeColor: dirs.color
          }}}/>
        )
      })
    }
    {props.markers.map((marker, index) => {
      const onClick = () => props.onMarkerClick(index);
      return (
        <Marker
          key={index}
          position={marker.position}
          icon={(props.roles[index] == "opco")?Green:Pink}
          onClick={onClick}
        >
        </Marker>
      );
    })}     
  </GoogleMap>
));

export default RouteMapComponent;