import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListOrder } from './redux/order/action'
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,FlatList
} from 'react-native';
import Coffee from './assets/image/coffee.svg';
import wave from './assets/image/wave.png';
import moment from 'moment';


const Menu = ({ navigation }) => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.order.listOrder);
  const loadingOrders=useSelector(state=>state.order.loadingOrders);
  const param='pending';
  useEffect(() => {
    dispatch(getListOrder(param));
  },[param,dispatch]);

  const getDate = (date) => {
    return moment(new Date(date)).format('DD/MM/YYYY');
  }

  const getTime = (time) => {
    return moment(new Date(time)).format('HH:mm');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Coffee style={styles.logo} height={35} width={35} />
        <Text style={styles.title}>Shipper</Text>
      </View>
      <ImageBackground
        source={wave}
        style={styles.image}
        imageStyle={styles.imageBackground}>
        <Text style={styles.titleDS}>Danh sách đơn hàng</Text>
        <ScrollView>
          {orders?.order?.map((item,index) => (
            <View style={styles.overview} key ={item._id}>
              <Text style={styles.donhang}>Đơn hàng #{item._id}</Text>
              <Text style={styles.ngaytao}>Ngày tạo:  {getDate(item.createdAt)}, {getTime(item.createdAt)}p</Text>
              <Text style={styles.trangthai}>Trạng thái: Chưa nhận đơn</Text>
        
              <TouchableOpacity onPress={() => navigation.navigate("Details", { item: item })}>
                <View style={styles.viewDetails}>
                  <Text style={styles.textviewDetails}>Xem chi tiết </Text>
                </View>
              </TouchableOpacity> 
            </View>
          ))}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 20,
    paddingTop: 5,
    paddingRight: 20,
  },
  image: {
    height: Dimensions.get('window').height - 135,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#64A1BD',
    alignItems: 'center',
    padding: 10,
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
    marginStart: 20,
    padding: 10,
    // marginTop: 5,
  },
  image: {
    height: Dimensions.get('window').height - 135,
  },
  imageBackground: { height: 300 },
  secondaryText: {
    color: '#404d4d',
  },
  titleDS: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: 'center'
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
    backgroundColor: '#F5A9BC',
    borderRadius: 8,
    maxWidth: 200,
    fontSize:15
  },
  ngaytao: {
    paddingTop: 2,
  }
});
export default Menu;