import React from 'react';
import { ScrollView } from 'react-native';
import { Text, View, StyleSheet, ImageBackground,TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    containers: {
        marginRight: 10,
        backgroundColor: '#5fa4b6',
        borderRadius: 8,
        height: 120,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    titleDS: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
      },
      overview: {
        alignItems: 'flex-start',
        backgroundColor: 'powderblue',
        padding: 15,
        margin: 10,
        borderRadius: 20,
      },
      textviewDetails: {
        fontSize: 15,
        alignItems: 'center',
        paddingTop: 5,
        fontWeight: 'bold'
      },
      donhang: {
        fontSize: 15,
        fontWeight: 'bold'
      },
      diachi: {
        paddingTop: 5,
      },
      trangthai: {
        paddingTop: 2,
      },
      ngaytao: {
        paddingTop: 2,
      }
});
const OrderCard = ({ item}) => {
    console.log('event', item);
    return (
        <View style={styles.overview}>
            <Text style={styles.donhang}>Đơn hàng #{item._id}</Text>
            <Text style={styles.diachi}>Địa chỉ: {item.user.address}</Text>
            <Text style={styles.trangthai}>Trạng thái:{item.status}</Text>
            <Text style={styles.ngaytao}>Ngày tạo: {item.createdAt}</Text>
            <TouchableOpacity onPress={() => navigation.push("Details", { item: item })}>
                <View style={styles.viewDetails}>
                    <Text style={styles.textviewDetails}>Xem chi tiết </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default OrderCard;
