import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { TouchableOpacity, View, Text,ScrollView,StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Coffee from './assets/image/coffee.svg';
import {getSalary} from './redux/staff/actions';
const Salary = ({ navigation }) => {
    const dispatch = useDispatch();
    const salary=useSelector(state => state.staff.salary.Salary);
    console.log('salary',salary);
    useEffect(() => {
        dispatch(getSalary(1));
      }, []);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" color="#fff" size={18} />
                </TouchableOpacity>
                <Text style={styles.title}>Lương</Text>

                <Coffee style={styles.logo} height={35} width={35} />
            </View >
        </View>
    );
}
const styles = StyleSheet.create({
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
        marginStart: 90,
        padding: 10,
        // marginTop: 5,
    },
    back: {
        backgroundColor: '#5fa4b7',
        borderRadius: 8,
        marginHorizontal: 10,
        marginStart: 0
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
        marginStart:130,
    },
});
export default Salary;