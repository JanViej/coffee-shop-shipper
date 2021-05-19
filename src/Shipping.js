import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  updateStatus,getListOrderSuccess,getListOrderDelivery } from './redux/order/action'
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
} from 'react-native';
import Coffee from './assets/image/coffee.svg';
import wave from './assets/image/wave.png';
import moment from 'moment';


const Shipping = ({navigation}) => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.order.listOrderDelivery);
  useEffect(() => {
    dispatch(getListOrderDelivery());
  },[]);
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
        <Text style={styles.title}>Đơn hàng đã nhận</Text>
      </View>
      <ImageBackground
        source={wave}
        style={styles.image}
        imageStyle={styles.imageBackground}>
        <Text style={styles.titleDS}>Danh sách đơn hàng</Text>
        <ScrollView>
          {orders?.order?.map((item,index) => (
            <View style={styles.overview}>
              <Text style={styles.donhang}>Đơn hàng #{item._id}</Text>
              <Text style={styles.trangthai}>{item.status}</Text>
              <Text style={styles.ngaytao}>Ngày tạo: {getDate(item.createdAt)}, {getTime(item.createdAt)}</Text>
              <View style={styles.buttonStyle}>
                <Button
                    title="Đã giao hàng"
                    color="#1F5D74"
                    onPress={() => {
                        dispatch(updateStatus({id:item._id,param:'success'})).then(()=>{
                            dispatch(getListOrderSuccess());
                            dispatch(getListOrderDelivery());
                        });
                    }}
                />
            </View>
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
    backgroundColor: '#b8860b',
    borderRadius: 8,
    maxWidth: 200,
    fontSize:15
  },
  ngaytao: {
    paddingTop: 2,
  },
  buttonStyle: {
      paddingTop:5,
      textAlign:'center',
  }
});
export default Shipping;