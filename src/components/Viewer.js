import React, { useState, useEffect } from 'react';
import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';
import { LASWorkerLoader, LASLoader } from '@loaders.gl/las';
import { load } from '@loaders.gl/core';
import { IonResource } from "cesium";
import { Viewer, Cesium3DTileset } from "resium";

Cesium.Ion.defaultAccessToken = process.env.CESIUM_ACCESS_TOKEN;

function LidarViewer() {
  let viewer; // This will be raw Cesium's Viewer object.

  const handleReady = tileset => {
    if (viewer) {
      viewer.zoomTo(tileset);
    }
  };

  return (
    <Viewer
      full
      ref={e => {
        viewer = e && e.cesiumElement;
      }} 
      timeline={false} 
      homeButton={false} 
      vrButton={false}
      infoBox={false} 
      geocoder={false}
      animation={false}
      baseLayerPicker={false}
      navigationHelpButton={true} 
      scene3DOnly={true}>
      <Cesium3DTileset url={IonResource.fromAssetId(667344)} onReady={handleReady} />
    </Viewer>
  );
}

export default LidarViewer;