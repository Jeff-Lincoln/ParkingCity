import React from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

const INITIAL_REGION = {
  "latitude": -1.286389,
  "longitude": 36.817223,
  "latitudeDelta": 0.015,
  "longitudeDelta": 0.0121
}


export default function Map() {
  

  return (
    <View style={styles.container}>
      <MapView style={StyleSheet.absoluteFill}
      provider={PROVIDER_GOOGLE}
      initialRegion={INITIAL_REGION}
      showsUserLocation
      showsMyLocationButton
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
