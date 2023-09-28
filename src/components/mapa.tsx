import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation'
import { 
   MapContainer, TileLayer, Polygon, useMapEvents, Marker, Popup 
} from 'react-leaflet';

import {statesData} from  '../../brasil';
import Link from 'next/link';



export default function Mapa() {
   const router = useRouter()

   const center = [-15.7801, -47.9292]

   const handleClickInsidePolygon = () => {
      router.push('/estado');   
   };

   return (
      <MapContainer
         center={center}
         zoom={5}
         style={{ width: '100vw', height: '100vh' }}
         scrollWheelZoom={false}
      >
      <TileLayer
         url="https://api.maptiler.com/maps/basic-v2-light/256/{z}/{x}/{y}.png?key=ZJDCwfo7bqyrgt3IlPMK"
         attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      {
         statesData.features.map((state) => {
         const coordinates = state.geometry.coordinates[0][0].map((item) => [item[1], item[0]]);
   
         return (
         <Polygon
            key={state.properties.id}
            pathOptions={{
               fillColor: '#FD8D3C',
               fillOpacity: 1,
               weight: 2,
               opacity: 1,
               dashArray: 3,
               color: 'white'
            }}
            positions={coordinates}
            eventHandlers={{
               mouseover: (e) => {
               const layer = e.target;
               layer.setStyle({
                  dashArray: "",
                  fillColor: "#BD0026",
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  color: "white",
               })
               },
               mouseout: (e) => {
               const layer = e.target;
               layer.setStyle({
                  fillOpacity: 1,
                  weight: 2,
                  dashArray: "3",
                  color: 'white',
                  fillColor: '#FD8D3C'
               });
               },
               click: handleClickInsidePolygon()
            }}
         />)
         })
      }
      </MapContainer>
  
   );
};