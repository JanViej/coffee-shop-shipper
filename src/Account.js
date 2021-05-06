import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Login from './Login';
import Signup from './Signup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {Avatar} from 'react-native-elements';
import {Button} from 'react-native-elements';
import {ScrollView} from 'react-native';
import {logout, getMe} from './redux/staff/actions';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    paddingVertical: 15,
  },
  header: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F5D74',
    flexGrow: 1,
    textAlign: 'center',
  },
  back: {
    backgroundColor: '#5fa4b7',
    padding: 5,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  edit: {
    backgroundColor: '#5fa4b7',
    padding: 5,
    borderRadius: 8,
    marginHorizontal: 10,
  },
  icon: {
    backgroundColor: '#5fa4b750',
    padding: 20,
    borderRadius: 50,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  input: {
    color: '#1F5D74',
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: '600',
    backgroundColor: '#e1eff5',
    paddingVertical: 15,
  },
  data: {
    flex: 1,
    marginHorizontal: 20,
  },
  wrapper: {
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  btnContainer: {
    width: 100,
    paddingBottom: 20,
  },
  buttonStyle: {
    backgroundColor: '#5ca4b8',
    borderRadius: 8,
  },
});

const Account = ({navigation}) => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.staff.data);
  const token = useSelector(state => state.staff.token);
  // const isActive = useSelector(state => state.staff.isActive);
  const isActive = true;
  
  const [inputUsername, setInputUsername] = useState(userData.username);
  const [inputAddress, setInputAddress] = useState(userData.address);
  const [inputPhoneNo, setInputPhoneNo] = useState(userData.phone);
  const isAuthenticated = useSelector(state => state.staff.isAuthenticated);

  const [isEdit, setEdit] = useState(false);

  const onChangeInputUsername = value => {
    setInputUsername(value);
  };

  const onChangeInputAddress = value => {
    setInputAddress(value);
  };

  const onChangeInputPhoneNo = value => {
    setInputPhoneNo(value);
  };

  const onClickBack = () => {
    setEdit(false);
    navigation.goBack();
  };

  const onClickEdit = () => {
    setEdit(true);
  };

  const onClickSave = () => {
    // setEdit(false);
    // dispatch(
    //   updateUser({
    //     username: inputUsername || userData.username,
    //     phone: inputPhoneNo || userData.phone,
    //     address: inputAddress || userData.address,
    //   }),
    // ).then(response => {
    //   if (!response.error) {
    //     navigation.push('Splash');
    //   }
    // });
  };

  const onClickCancel = () => {
    setInputUsername(userData.username);
    setInputPhoneNo(userData.phone);
    setInputAddress(userData.address);
    setEdit(false);
  };

  const onClickLogout = () => {
    dispatch(logout()).then(() => {
      navigation.push('Login');
    })
  };

  useEffect(() => {
    console.log('userData', userData)
    if (!userData.length) {
      dispatch(getMe());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={onClickLogout}>
          <Feather name="log-out" color="#fff" size={18} />
        </TouchableOpacity>
        <Text style={styles.title}>Personal Data</Text>
        <TouchableOpacity style={styles.edit} onPress={onClickEdit}>
          <AntDesign name="edit" color="#fff" size={18} />
        </TouchableOpacity>
      </View>
      {isActive?(
        <View>
          <View style={styles.wrapper}>
            <View style={styles.icon}>
              <Feather name="user" color="#5fa4b7" size={50} />
            </View>
          </View>

          <View style={styles.data}>
            <Text style={styles.text}>Your name</Text>
            <TextInput
              editable={isEdit}
              style={styles.input}
              defaultValue={inputUsername || userData.username}
              onChangeText={onChangeInputUsername}
              placeholderTextColor="#5ca4b8"
            />
            <Text style={styles.text}>Your address</Text>
            <TextInput
              editable={isEdit}
              style={styles.input}
              defaultValue={inputAddress || userData.address}
              placeholderTextColor="#5ca4b8"
              onChangeText={onChangeInputAddress}
            />
            <Text style={styles.text}>Your phone number</Text>
            <TextInput
              editable={isEdit}
              style={styles.input}
              defaultValue={inputPhoneNo || userData.phone}
              placeholderTextColor="#5ca4b8"
              onChangeText={onChangeInputPhoneNo}
            />
          </View>
        </View>
        ):(
          <View>
            <Text>There are some problems with your account, please contact TheCoffee</Text>
          </View>
        )
      }
      
      {isEdit && (
        <View style={styles.btn}>
          <Button
            onPress={onClickSave}
            title="Save"
            titleStyle={{fontSize: 18}}
            containerStyle={styles.btnContainer}
            buttonStyle={styles.buttonStyle}
          />
          <Button
            onPress={onClickCancel}
            title="Cancel"
            titleStyle={{fontSize: 18}}
            containerStyle={styles.btnContainer}
            buttonStyle={styles.buttonStyle}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Account;
