import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Avatar, Button} from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8dc1d0',
    flex: 1,
  },
  header: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  back: {
    backgroundColor: '#5fa4b7',
    padding: 5,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  tinyLogo: {
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  comment: {
    flex: 3,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  commentLine: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomColor: '#b3bbc220',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  avt: {
    marginRight: 20,
  },
  cmt: {
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  name: {
    fontWeight: 'bold',
  },
  price: {
    color: '#fff',
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'baseline',
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderTopColor: '#ecf3f4',
    borderWidth: 1,
    borderStartColor: '#ecf3f4',
    borderEndColor: '#ecf3f4'

  },
  btnContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    paddingTop: 20,
    color: '#636f7d',
    fontWeight: '700',
    fontSize: 24,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#636f7d'
  },
  rating: {
    fontSize: 18,
    color: '#636f7d'
  },
  ratingSection: {
    flexDirection: 'row',
  },
  description: {
    color: '#a4abbc',
    paddingBottom: 10,
    borderBottomColor: '#b3bbc220',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  footerBackground: {
    backgroundColor: '#fff',
  },
  buttonStyle: {
    backgroundColor: '#5ca4b8',
    borderRadius: 8,
    paddingVertical: 12,
  },
  addToCart: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#8dc1d0',
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 10,
  },
});

const listComment = [
  {
    id: '1',
    avt:
      'https://firebasestorage.googleapis.com/v0/b/thecoffee-1a154.appspot.com/o/anhmeo.jpg?alt=media&token=c6e8a973-1798-446c-9b19-89f5307b1bed',
    cmt: 'good,',
    name: 'Phuc Le',
  },
  {
    id: '2',
    avt:
      'https://firebasestorage.googleapis.com/v0/b/thecoffee-1a154.appspot.com/o/anhmeo.jpg?alt=media&token=c6e8a973-1798-446c-9b19-89f5307b1bed',
    cmt: 'good,',
    name: 'Phuc Le',
  },
  {
    id: '3',
    avt:
      'https://firebasestorage.googleapis.com/v0/b/thecoffee-1a154.appspot.com/o/anhmeo.jpg?alt=media&token=c6e8a973-1798-446c-9b19-89f5307b1bed',
    cmt: 'good,',
    name: 'Phuc Le',
  },
  {
    id: '6',
    avt:
      'https://firebasestorage.googleapis.com/v0/b/thecoffee-1a154.appspot.com/o/anhmeo.jpg?alt=media&token=c6e8a973-1798-446c-9b19-89f5307b1bed',
    cmt: 'good,',
    name: 'Phuc Le',
  },
  {
    id: '4',
    avt:
      'https://firebasestorage.googleapis.com/v0/b/thecoffee-1a154.appspot.com/o/anhmeo.jpg?alt=media&token=c6e8a973-1798-446c-9b19-89f5307b1bed',
    cmt: 'good,',
    name: 'Phuc Le',
  },
  {
    id: '5',
    avt:
      'https://firebasestorage.googleapis.com/v0/b/thecoffee-1a154.appspot.com/o/anhmeo.jpg?alt=media&token=c6e8a973-1798-446c-9b19-89f5307b1bed',
    cmt: 'good,',
    name: 'Phuc Le',
  },
];

const ItemDetails = ({route, navigation}) => {
  const {id} = route.params;

  const onClickBack = () => {
    navigation.goBack();
  };

  const onClickCart = () => {
    navigation.push('Cart')
  };

  const onClickBuy = () => {

  };

  const onClickAdd = () => {
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={onClickBack}>
          <AntDesign name="left" color="#fff" size={18} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.back} onPress={onClickCart}>
          <Ionicons name="cart" color="#fff" size={18} />
        </TouchableOpacity>
      </View>
      <View style={styles.image}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri:
              'https://firebasestorage.googleapis.com/v0/b/thecoffee-1a154.appspot.com/o/copy_703997980.png?alt=media&token=368365b6-8e43-475d-b07b-ab89a0081048',
          }}
        />
      </View>
      <ScrollView style={styles.comment}>
        <Text style={styles.title}>Caffe</Text>
        <View style={styles.ratingSection}>
        <Entypo name="star" color="#ffb954" size={20} />
        <Text style={styles.rating}>4.6</Text>
        </View>
        <Text style={styles.description}>This is the description</Text>
        <Text style={styles.text}>Comment</Text>
          {listComment.map(cmt => (
            <View style={styles.commentLine} key={cmt.id}>
              <Avatar
                size="medium"
                containerStyle={styles.avt}
                rounded
                source={{
                  uri: cmt.avt,
                }}
              />
              <View>
                <Text style={styles.name}>{cmt.name}</Text>
                <Text style={styles.cmt}>{cmt.cmt}</Text>
              </View>
            </View>
          ))}
      </ScrollView>
      <View style={styles.footerBackground}>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addToCart} onPress={onClickAdd}>
          <Text style={styles.price}>$2</Text>
          <Text style={styles.price}>|</Text>
          <FontAwesome5 name="cart-plus" color="#fff" size={18} />
        </TouchableOpacity>
        <Button
          onPress={onClickBuy}
          title="Order Now"
          titleStyle={{fontSize: 20}}
          containerStyle={styles.btnContainer}
          buttonStyle={styles.buttonStyle}
        />
      </View>
      </View>
    </View>
  );
};

export default ItemDetails;
