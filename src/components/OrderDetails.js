import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
const styles = StyleSheet.create({
    overview: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },

    name: {
        paddingTop: 5,
        color: '#1F5D74',
        width: 120
    },
    quantity: {
        paddingTop: 5,
        color: '#1F5D74',
    },
    price: {
        paddingTop: 5,
        color: '#1F5D74',
    },
});
const OrderDetails = ({ item }) => {
    return (
        <View style={styles.overview}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <Text style={styles.price}>{item.price}</Text>
        </View>
    );
};

export default OrderDetails;
