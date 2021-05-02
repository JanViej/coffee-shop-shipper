import React from 'react';
import { TouchableOpacity, Text, View,FlatList} from 'react-native';
import { useRoute } from '@react-navigation/native';
const Details = ({ navigation }) => {
    const route=useRoute();
    const {item}=route.params;
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Chi tiết đơn hàng</Text>
            <Text> {item.user.username}</Text>
        </View>
    );
}

export default Details