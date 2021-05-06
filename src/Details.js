import React from 'react';
import { TouchableOpacity, Text, View, FlatList, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Coffee from './assets/image/coffee.svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import wave from './assets/image/wave.png';
import { Button } from 'react-native';
import { size, stubFalse } from 'lodash';

const styles = StyleSheet.create({
    overview: {
        flexDirection: 'row',
        paddingTop: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 5
    },
    title: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 20,
        paddingTop: 5,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginStart: 95,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: '#64A1BD',
        alignItems: 'center',
        padding: 10,
    },
    container: {
        width: '100%',
    },
    logo: {
        flex: 1,
        backgroundColor: '#64A1BD',
        // height: '80%',
        justifyContent: 'center',
        margin: 'auto',
        alignItems: 'center',
        marginHorizontal: 10,
        borderRadius: 100,
        marginStart: 50,
        padding: 10,
        // marginTop: 5,
    },
    back: {
        backgroundColor: '#5fa4b7',
        borderRadius: 8,
        marginHorizontal: 10,
        marginStart: 0
    },
    image: {
        height: Dimensions.get('window').height - 135,
    },
    imageBackground: { height: 300 },
    secondaryText: {
        color: '#404d4d',
    },
    madonhang: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 30,
        color: '#1F5D74',
    },
    buttonStyle: {
        borderRadius: 10,
        width:'80%',
        textAlign:'center',
        marginTop:30,
        paddingStart:100
    },
    adress: {
        paddingTop: 5,
        color: '#1F5D74',
        fontSize: 16
    },
    ds: {
        paddingTop: 10,
        color: '#1F5D74',
        fontSize: 18,
        textAlign: 'center',

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
    total: {
        paddingTop: 10,
        color: '#1F5D74',
        marginStart: 300,
        fontSize: 20
    }
})
const orderDetail = [
    {
        key: 1,
        id: "6059b16670e4e5f618f71f34",
        name: "trà sữa trân châu ",
        price: 19,
        quantity: 1
    },
    {
        key: 2,
        id: "6059b16670e4e5f618f71f34",
        name: "trà sữa trân châu đường đen",
        price: 19,
        quantity: 1
    }
]
const Details = ({ navigation }) => {
    const route = useRoute();
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" color="#fff" size={18} />
                </TouchableOpacity>
                <Text style={styles.title}>Chi tiết đơn hàng</Text>
                <Coffee style={styles.logo} height={35} width={35} />
            </View >
            <Text style={styles.madonhang}>Mã đơn hàng: {item._id} </Text>
            <Text style={styles.adress}>Địa chỉ giao hàng: {item.user.address}</Text>
            <Text style={styles.adress}>Trạng thái đơn hàng: {item.status}</Text>
            <Text style={styles.ds}>Danh sách món</Text>
            <View style={styles.overview} >
                <Text style={styles.name}>Tên món</Text>
                <Text style={styles.quantity}>Số lượng</Text>
                <Text style={styles.price}>Đơn giá</Text>
            </View>
            <FlatList
                data={orderDetail}
                renderItem={({ item }) => <View style={styles.overview}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.quantity}>{item.quantity}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                </View>}
                keyExtractor={item => item.key}
                contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
            />
            <Text style={styles.total}>Tổng: {item.totalPrice}</Text>
            <View style={styles.buttonStyle}>
                <Button
                    title="Nhận đơn"
                    color="#1F5D74"
                />
            </View>
        </View>
    );
}

export default Details