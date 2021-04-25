import React from 'react';
import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  cardContainer: {
    width: 250,
    marginTop: 40,
    marginHorizontal: 20,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#5fa3b5',
  },
  cardImage: {width: '100%'},
  rating: {
    position: 'absolute',
    left: 6,
    top: 6,
    flexDirection: 'row',
    backgroundColor: '#eeeeee30',
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 14,
  },
  ratingText: {
    marginLeft: 10,
    color: '#fff',
    fontWeight: 'bold',
  },
  cardContent: {
    padding: 24,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  price: {
    color: '#fff',
  },
  favoriteIcon: {
    backgroundColor: 'white',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const MenuItem = ({
  onClickItem,
  image,
  name,
  price,
  rating,
  isFavorite,
  imageHeight,
  id,
}) => {
  return (
    <TouchableOpacity onPress={() => onClickItem(id)}>
      <View style={styles.cardContainer}>
        <Image
          source={image}
          style={{
            ...styles.cardImage,
            height: imageHeight,
          }}
        />
        <View style={styles.rating}>
          <FontAwesome name="star" color="#ffb954" size={18} />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{`$${price}`}</Text>
          </View>
          {isFavorite && (
            <View style={styles.favoriteIcon}>
              <AntDesign name="heart" color="#f26d6d" size={18} />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

MenuItem.defaultProps = {
  imageHeight: 200,
};

export default MenuItem;
