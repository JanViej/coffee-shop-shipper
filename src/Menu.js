import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import MenuItem from './components/MenuItem';
import wave from './assets/image/wave.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import coffee from './assets/image/coffee.jpg';
import Coffee from './assets/image/coffee.svg';

const menus = [
  {
    id: 1,
    image: coffee,
    name: 'Lattee',
    rating: 4.6,
    isFavorite: true,
    price: 30,
  },
  {
    id: 2,
    image: coffee,
    name: 'Coffee',
    rating: 4.6,
    isFavorite: false,
    price: 30,
  },
  {
    id: 3,
    image: coffee,
    name: 'Capucino',
    rating: 4.6,
    isFavorite: true,
    price: 30,
  },
  {
    id: 4,
    image: coffee,
    name: 'Espresso',
    rating: 4.6,
    isFavorite: true,
    price: 30,
  },
];

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    backgroundColor: '#64A1BD',
    color: '#fff',
    padding: 0,
    margin: 0,
    textAlign: 'right',
  },
  searchBarContainer: {
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    backgroundColor: '#64A1BD',
    borderWidth: 0,
    marginTop: 6,
    padding: 0,
    flex: 6,
  },
  inputContainer: {
    backgroundColor: '#64A1BD',
    padding: 0,
    margin: 0,
    flexDirection: 'row-reverse',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    paddingTop: 5,
  },
  scrollView: {
    flex: 1,
  },
  image: {
    height: '90%',
  },
  imageBackground: {height: 300},
  secondaryText: {
    color: '#404d4d',
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#64A1BD',
    alignItems: 'center',
  },
  cart: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
});

const Menu = ({navigation}) => {
  const [searchingText, setSearchingText] = useState('');

  const updateSearch = search => {
    setSearchingText(search);
  };

  const onClickItem = id => {
    navigation.push('Details');
  };

  const onClickCart = () => {
    navigation.push('Cart');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Coffee style={styles.logo} height={35} width={35} />
        <SearchBar
          style={styles.searchBar}
          placeholder="Find your drink..."
          onChangeText={updateSearch}
          value={searchingText}
          lightTheme
          inputStyle={styles.input}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.inputContainer}
          placeholderTextColor={'#fff'}
          searchIcon={{color: '#fff', size: 30}}
        />
        <TouchableOpacity style={styles.cart} onPress={onClickCart}>
          <Ionicons name="cart" color="#fff" size={30} />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={wave}
        style={styles.image}
        imageStyle={styles.imageBackground}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.title}>Best Coffee In Town</Text>
          <ScrollView horizontal>
            {menus.map(menu => (
              <MenuItem onClickItem={onClickItem} {...menu} key={menu.id} />
            ))}
          </ScrollView>
          <Text
            style={{
              ...styles.title,
              ...styles.secondaryText,
            }}>
            Most popular
          </Text>
          <ScrollView horizontal>
            {menus.map(menu => (
              <MenuItem
                onClickItem={onClickItem}
                key={menu.id}
                {...menu}
                imageHeight={150}
              />
            ))}
          </ScrollView>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default Menu;
