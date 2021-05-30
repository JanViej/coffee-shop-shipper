import {
    TouchableOpacity,
    Text,
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import Coffee from './assets/image/coffee.svg';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from 'react-native';
import React, { useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderById, updateStatus,getListOrder,getListOrderDelivery } from './redux/order/action'

const Details = ({ navigation }) => {
    const route = useRoute();
    const { item } = route.params;
    const dispatch = useDispatch();
    const orderDetails= useSelector(state => state.order.currentOrder);
    const id = item._id;
    console.log('id',id);
    const data = {
        id: id,
        param: 'delivery'
    };
    useEffect(() => {
        dispatch(getOrderById(id));
    }, [id, dispatch]);
    const onClickOrder = () => {
        dispatch(updateStatus(data)).then(()=>{
            dispatch(getOrderById(id));
            dispatch(getListOrder('pending'));
            dispatch(getListOrderDelivery());
        });
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" color="#fff" size={18} />
                </TouchableOpacity>
                <Text style={styles.title}>Chi tiết đơn hàng</Text>
                <Coffee style={styles.logo} height={35} width={35} />
            </View >
            <Text style={styles.madonhang}>Mã đơn hàng: #{item._id} </Text>
            <Text style={styles.address}>Địa chỉ giao hàng: {orderDetails?.user?.address}</Text>
            <Text style={styles.adress}>Trạng thái đơn hàng: {orderDetails.status}</Text>
            <Text style={styles.ds}>Danh sách món</Text>
            <View style={styles.overview} >
                <Text style={styles.name}>Tên món</Text>
                <Text style={styles.quantity}>Số lượng</Text>
                <Text style={styles.price}>Đơn giá</Text>
            </View>
            {orderDetails?.drink?.map((item, key) => (
                <View style={styles.overview} key ={item._id}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
            ))}

            <Text style={styles.total}>Tổng: {orderDetails.totalPrice} vnđ</Text>
            {orderDetails.status=='pending' ?
            <View style={styles.buttonStyle}>
                <Button
                    title="Nhận đơn"
                    color="#1F5D74"
                    disabled={orderDetails.status=='delivery' ? true : false}
                    onPress={onClickOrder.bind(this)}
                />
            </View> : null }
        </View>
    );
}
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
        width: '80%',
        textAlign: 'center',
        marginTop: 30,
        paddingStart: 100
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
        marginStart: 250,
        fontSize: 16
    }
})
export default Details