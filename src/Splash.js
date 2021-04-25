import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {getData} from './utils';
import {setAuthToken} from './api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Splash = ({navigation}) => {
  useEffect(() => {
    const getToken = async () => {
      const token = await getData('sessionToken');
      setAuthToken(token);

      navigation.navigate('Menu');
    };
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.container}>
      <Text>Loading</Text>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default Splash;
