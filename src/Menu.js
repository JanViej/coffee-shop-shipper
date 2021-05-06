import React, { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Dimensions,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Coffee from './assets/image/coffee.svg';
import wave from './assets/image/wave.png';

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
  },
  overview: {
    flex: 5,
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
const dataList = [
  {
    id: "60814d3381c5800e57bbc273",
    user: {
      id: "607159aff54dc91eeccd0075",
      "username": "user02",
      "address": "191 Lê Lợi"
    },
    drink: [
      {
        id: "6059b16670e4e5f618f71f34",
        name: "trà sữa trân châu đường đen",
        price: 19,
        quantity: 1
      },
      {
        id: "6059b16670e4e5f618f71f34",
        name: "trà sữa trân châu đường đen",
        price: 19,
        quantity: 5
      }
    ],
    status: "pending",
    totalPrice: 114,
    createdAt: "2021-04-22T10:17:23.117Z"
  }
]
const Menu = ({ navigation }) => {
  // const [orders, setOrders] = React.useState({})
  // useEffect (()=>{
  //   fetch("https://salty-dawn-54578.herokuapp.com/orders", {
  //     "method": "GET",
  //     "headers": {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //       'Authorization': 
  //         'Bearer ' + 
  //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDcxMGIzMmUzZDFhOGZlMjBjYWVhOTkiLCJwYXNzd29yZCI6IjEyMzQ1Njc4IiwidXNlcm5hbWUiOiJzaGlwcGVyIn0.kTZpKT8NkEnDksk1OMJ2aQ52Yk7JximxzxjSuV4OU7s',
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       setOrders(response);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // } );
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

        <FlatList
          data={dataList}
          renderItem={({ item }) => <View style={styles.overview}>
            <Text style={styles.donhang}>Đơn hàng #{item.id}</Text>
            <Text style={styles.diachi}>Địa chỉ: {item.user.address}</Text>
            <Text style={styles.trangthai}>Trạng thái:{item.status}</Text>
            <Text style={styles.ngaytao}>Ngày tạo: {item.createdAt}</Text>
            <TouchableOpacity onPress={() => navigation.push("Details", { item: item })}>
              <View style={styles.viewDetails}>
                <Text style={styles.textviewDetails}>Xem chi tiết </Text>
              </View>
            </TouchableOpacity>
          </View>}
          // keyExtractor={item => '${item.id}'}
          contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
        />
        {/* <Text>{orders.id}</Text> */}
      </ImageBackground>
    </View>
  );
};
export default Menu;