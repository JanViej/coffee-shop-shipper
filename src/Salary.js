/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity, View, Text, ScrollView, StyleSheet } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Coffee from './assets/image/coffee.svg';
import { getSalary } from './redux/staff/actions';

const options = ['thang_1', 'thang_2', 'thang_3', 'thang_4', 'thang_5', 'thang_6', 'thang_7', 'thang_8', 'thang_9', 'thang_10', 'thang_11', 'thang_12'];
const Salary = ({ navigation }) => {
    const dispatch = useDispatch();
    const salary = useSelector(state => state.staff.salary.Salary);

    console.log('salary', salary);
    useEffect(() => {
        dispatch(getSalary("thang_1"));
    }, []);
    const onClickSeleclt = (value) => {
        dispatch(getSalary(value));
    };
    const getCurrency=(value)=>{
        return value+" VND";
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" color="#fff" size={18} />
                </TouchableOpacity>
                <Text style={styles.title}>Lương</Text>
                <Coffee style={styles.logo} height={35} width={35} />
            </View >
            <View style={styles.selectmonth}>
                <Text style={styles.selectText}>Chọn tháng</Text>
                <ModalDropdown
                    options={['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6', 'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12']}
                    defaultValue='Tháng 1'
                    style={styles.select}
                    onSelect={value => onClickSeleclt(options[value])}
                />
            </View>
            <View style={styles.overview1}>
              <Text style={styles.textView1}>Tổng số đơn đã nhận </Text>
              <Text style={styles.textView2}>{salary?.totalShift}</Text>
            </View>
            <View style={styles.overview}>
              <Text style={styles.textView1}>Hệ số lương </Text>
              <Text style={styles.textView2}>{getCurrency(salary?.coefficient)}</Text>
            </View>
            <View style={styles.overview}>
              <Text style={styles.textView1}>Trợ cấp </Text>
              <Text style={styles.textView2}>{getCurrency(salary?.allowance)}</Text>
            </View>
            <View style={styles.overview}>
              <Text style={styles.textView1}>Tổng cộng </Text>
              <Text style={styles.textView2}>{getCurrency(salary?.totalSalary)}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    overview1:{
        flexDirection: 'row',
        paddingTop:30,
        paddingLeft:60
    },
    overview: {
        flexDirection: 'row',
        paddingTop:10,
        paddingLeft:60
    },
    textView1:{
        fontSize:16,
        color: '#1F5D74',
        width: 200
    },
    textView2: {
        fontSize:16,
        color: '#1F5D74',
    },
    selectmonth: {
        paddingTop:30,
        alignItems:'center',
        fontSize: 18,
        fontWeight: 'bold',
    },
    selectText:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    select: {
        fontSize:18,
        width: 300,
        paddingLeft: 125,
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
        marginStart: 140,
    },
});
export default Salary;