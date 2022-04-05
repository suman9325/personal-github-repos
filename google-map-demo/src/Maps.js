import { Map, GoogleApiWrapper, Marker, MarkerWithLabel, InfoWindow } from 'google-maps-react';
import React from 'react'
export class Maps extends React.Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onMarkerClick = (props, marker, e) =>{
        // console.log('props 1', props);
        // console.log('marker', marker);
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
        

    onMapClicked = (props) => {
        // console.log('props 2', props);
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

    render() {
        const mapStyles = {
            width: "100%",
            height: "100%",
        };
        const labelSize = { width: 220 };
        const labelPadding = 8;
        return (
            <Map
                google={this.props.google}
                zoom={15}
                style={mapStyles}
                initialCenter={{ lat: 22.5330656, lng: 88.3588789 }}
                onClick={this.onMapClicked}
            >
                {console.log('@@', this.props)}
                <Marker position={{ lat: 22.5330656, lng: 88.3588789 }} onClick={this.onMarkerClick} />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                    </div>
                </InfoWindow>
            </Map>

        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDJvNKFF3zHyOKcuSWzJ2RFMQV1Eu3gihI",
})(Maps);