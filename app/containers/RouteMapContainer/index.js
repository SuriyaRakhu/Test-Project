import {
  default as React,
  Component,
} from "react";

import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
    Marker,
} from "react-google-maps";
import { Modal } from 'react-bootstrap';
import $ from 'jquery';
import ReactDOM from 'react-dom';
import RouteMapComponent from '../../components/DispatchComponents/RouteMapComponent'
import OverLayCard from '../../components/DispatchComponents/MapOverLay'
import styles from './style.css'
import selectDispatchRoutesListContainer from './selector';
import { connect } from 'react-redux';

export class RouteMapContainer extends Component {
    constructor(props){
        super(props);
        this.handleMarkerClick = this.handleMarkerClick.bind(this);
        this.generateInitialMarkers=this.generateInitialMarkers.bind(this);
        this.callafter=this.callafter.bind(this);
        this.closeDetailsView=this.closeDetailsView.bind(this);

        /**Load from JSON */
        var listLocs = this.props.routeInfoData;
        /*var listLocs = $.parseJSON($.ajax ({
            url: 'http://10.155.190.155:3000/api/routeJSON', 
            async: false,
            dataType: 'json',
          }). responseText);*/
          
          this.state = {
            origin: new google.maps.LatLng(40.768211, -73.971804),
            destination: new google.maps.LatLng(8.558404, 76.880909),
            waypointSample: [{location:new google.maps.LatLng(8.553441, 76.876373)},{location:new google.maps.LatLng(8.543523, 76.872613)},{location:new google.maps.LatLng(8.556925, 76.881098)}],
              markers:[],
              locations:listLocs,
              showLocation:false,
              selectedLocation:listLocs.route.organization.routeList.routes["0"].stops.wsStops["0"],
              plottingDirections:[],
              roles:[],
              DirectionsService : new google.maps.DirectionsService()
          }        
    }
    handleMarkerClick(targetIndex) {
        this.setState({selectedLocation:this.state.locations.route.organization.routeList.routes["0"].stops.wsStops[targetIndex]});
        this.setState({showLocation:true});
    }

    callafter(DirectionsService){
        var routesList=this.state.locations.route.organization.routeList.routes["0"].stops.wsStops;
        this.setState({origin:new google.maps.LatLng(routesList["0"].customerList.customers["0"].latitude,routesList["0"].customerList.customers["0"].longitude),
                    destination:new google.maps.LatLng(routesList[routesList.length-1].customerList.customers["0"].latitude,routesList[routesList.length-1].customerList.customers["0"].longitude)
                    });
       var wayPoints = [];
       var plottingDirs = [];
        
       var lat,long,loc,start,end;
       for (var i=0;i<routesList.length;i++){
            lat = routesList[i].customerList.customers["0"].latitude;
            long = routesList[i].customerList.customers["0"].longitude;
            loc = new google.maps.LatLng(lat,long);
            wayPoints.push({location:loc});
        }
        this.setState({waypointSample:wayPoints});
        
        for (var i = 0; i < routesList.length-1; i++) {
            lat = routesList[i].customerList.customers["0"].latitude;
            long = routesList[i].customerList.customers["0"].longitude;
            start = new google.maps.LatLng(lat,long);
            lat = routesList[i+1].customerList.customers["0"].latitude;
            long = routesList[i+1].customerList.customers["0"].longitude; 
            end = new google.maps.LatLng(lat,long);           
          DirectionsService.route({
            origin: start,
            destination: end,
            travelMode: google.maps.TravelMode.DRIVING,
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {

              /*Logic for stroke colors goes here */

                plottingDirs.push({dir:{result},color:(i==0)?"green":"red"});
              setTimeout(function() {
                  this.setState({markers:this.generateInitialMarkers()});
              }.bind(this), 100);                
            } else {
              console.error(`error fetching directions ${result}`);
            }
          }); 
        }
        this.setState({plottingDirections:plottingDirs});            
    }

    closeDetailsView(){
        this.setState({showLocation:false});

    }
    
  componentDidMount() {
    // const DirectionsService = new google.maps.DirectionsService();
    setTimeout(function() { this.callafter(this.state.DirectionsService); }.bind(this), 0);
    // console.log("**"+this.props.routeInfoData.route);
  }
  componentWillReceiveProps(nextProps){      
      // console.log(this.state.locations == nextProps.routeInfoData)
      if(this.state.locations != nextProps.routeInfoData){
            this.setState({locations:nextProps.routeInfoData})
            // console.log("componentWillReceiveProps");
    }
      
      // this.callafter(this.state.DirectionsService);
      setTimeout(function() { 
        // console.log(this.state.locations); 
        this.callafter(this.state.DirectionsService); 
      }.bind(this), 0);
    }    
generateInitialMarkers=()=> {
    const markers = [],role=[];
      for (let i = 0; i < this.state.waypointSample.length; i++) {
        const position = this.state.waypointSample[i].location;
        markers.push({position});

        /*Logic for the pins image goes here */

        role.push('opco');
      }
    this.setState({roles:role});
  return markers;
}    

  render() {
    return (
        <div>
      <RouteMapComponent
        containerElement={
          <div style={{ height: `auto` }} />
        }
        mapElement={
          <div style={{ height: (0.6*window.innerHeight)+'px' }} />
        }
        center={this.state.origin}
        
        onMarkerClick={this.handleMarkerClick}
        markers={this.state.markers}
        plottingDirections={this.state.plottingDirections}
        roles={this.state.roles}
      />
        <OverLayCard showLoactionDetails={this.state.showLocation} locationDetails={this.state.selectedLocation} closeDetails={this.closeDetailsView}/>
        </div>
    );
  }
}
const mapStateToProps = selectDispatchRoutesListContainer();
export default connect(mapStateToProps) (RouteMapContainer);