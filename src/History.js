import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const History = () => {
  return(
    <View style={styles.container}>
      <Text>History ne</Text>
    </View>
  )
}

export default History;