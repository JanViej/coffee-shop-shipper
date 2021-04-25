import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const style = StyleSheet.create({
  tinyLogo: {
    flex: 4,
    width: 130,
    height: 130,
    marginRight: 10,
  },
  rowFront: {
    height: 130,
    margin: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5fa4b7',
    borderRadius: 20,
    borderColor: '#fff',
  },
  icon: {
    backgroundColor: '#B3CEDA',
    borderRadius: 100,
    width: 26,
    height: 26,
  },
  overView: {
    flex: 5,
    alignItems: 'flex-start',
  },
  quantity: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    paddingBottom: 5,
  },
  price: {
    fontSize: 16,
    paddingBottom: 5,
    color: '#fff',
  },
  number: {
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 10,
  },
});

const CardItem = ({data}) => {
  const [quantity, setQuantity] = useState(data.quantity);
  const handleClickAdd = () => {
    console.log('add');
    setQuantity(quantity => quantity + 1);
  };
  const handleClickMinus = () => {
    console.log('minus');
    if (quantity > 0) setQuantity(quantity => quantity - 1);
  };
  return (
    <View style={style.rowFront}>
      <Image
        style={style.tinyLogo}
        source={{
          uri:
            'https://firebasestorage.googleapis.com/v0/b/thecoffee-1a154.appspot.com/o/copy_703997980.png?alt=media&token=368365b6-8e43-475d-b07b-ab89a0081048',
        }}
      />
      <View style={style.overView}>
        <Text style={style.title}>Cafe Latte</Text>
        <Text style={style.price}>$10</Text>
        <View style={style.quantity}>
          <TouchableOpacity onPress={handleClickMinus}>
            <Feather style={style.icon} name="minus" color="#fff" size={26} />
          </TouchableOpacity>
          <Text style={style.number}>{quantity}</Text>
          <TouchableOpacity onPress={handleClickAdd}>
            <Entypo style={style.icon} name="plus" color="#fff" size={26} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardItem;
