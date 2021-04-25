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

const Account = () => {
  return(
    <View style={styles.container}>
      <Text>Account ne</Text>
    </View>
  )
}

export default Account;