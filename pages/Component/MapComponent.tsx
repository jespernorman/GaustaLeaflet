// import L, { LatLngExpression, Renderer } from "leaflet";
// import "leaflet/dist/leaflet.css";
// // import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
// import React from "react";
// import Image from "next/image";
// import Style from "../styles/MapStyle.module.scss"
// import { useEffect, useState } from 'react';
// import * as ReactLeaflet from 'react-leaflet';
// import { MapContainer, TileLayer } from "react-leaflet";

// // var bounds = [[0,0], [imageHeight,imageWidth]];
// // var baseLayer = L.imageOverlay('<?= get_template_directory_uri();?>/maps/vinter2020/gausta-back-2020.jpg',bounds);

// const Map => (

// )
// export default function ShowMap() {
//   <MapContainer 
//     center={[51.505, -0.09]} 
//     zoom={13} 
//     scrollWheelZoom={false}
//     > 
//     <TileLayer
//         attribution='&copy; <a href="/gausta-back-2020.jpg">gausta map</a> contributors'
//         url="/gausta-back-2020.jpg/{z}/{x}/{y}.png"
//     />
//   </MapContainer>
// }
    
import React, { Component } from 'react'
import { useRef, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: 400, width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href=">gausta map</a> contributors'
        url="/vinter2020/gausta-back-2020.jpg"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map    

