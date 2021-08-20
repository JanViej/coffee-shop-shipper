/*eslint-disable*/
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  View,
  ActivityIndicator,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';
import {useDispatch, useSelector} from 'react-redux';

const openMap = () => {

}
const Map = ({navigation}) => {
  const dispatch = useDispatch();
  const orderDetails = useSelector(state => state.order.currentOrder);
  console.log('orderDetails', orderDetails)
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: orderDetails?.user?.position.lat,
          longitude: orderDetails?.user?.position.lng || 0,
          latitudeDelta: 0.09922,
          longitudeDelta: 0.09421,
        }}>
        <MapView.Marker
          coordinate={{
            latitude: orderDetails?.user?.position.lat,
            longitude: orderDetails?.user?.position.lng || 0,
          }}
          title="Shipment location"
          onPress={openMap}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    // height: Dimensions.get('window').height,
    flex: 1,
    position: 'relative',
    margin: 0,
  },
  map: {
    minHeight: 600,
    flex: 1,
    zIndex: 0,
  },
  btn: {
    backgroundColor: '#fff',
    fontSize: 20,
    margin: 10,
    padding: 10,
    paddingVertical: 5,
    borderRadius: 8,
    width: 100,
    elevation: 5,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Map;
