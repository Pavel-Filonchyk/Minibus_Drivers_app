import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'

import Footer from '../Footer/Footer'

export default function Profile({ navigation }) {

    const [userData, setUserData] = useState('')
    const [fullName, setFullName] = useState(userData?.fullName)
    const [phoneNumber, setPhoneNumber] = useState(userData?.phoneNumber)

    const onChoiceUser = () => {
        //dispatch(authData({fullName: choiceFullName, phoneNumber: choicePhoneNumber}))
        //asyncStorage({key: 'setItem', value: {fullName, phoneNumber}})
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapHeader}>
                <Text style={styles.name}>Full Name</Text>
                
            </View>
            <View style={styles.wrapSettings}>
                <Text style={styles.tytleSettings}>Изменить</Text>
                <View style={styles.wrapBlockSettings}>
                    <Text style={styles.label}>Имя и фамилию</Text>
                    <TextInput
                        style={styles.inputFullName}
                        onChangeText={(e) => setFullName(e)}
                        value={fullName}
                        placeholder={userData?.fullName}
                        placeholderTextColor="white"
                    />
                    <Text style={styles.label}>Телефон</Text>
                    <TextInput
                        style={styles.inputFullName}
                        onChangeText={(e) => setPhoneNumber(e)}
                        value={phoneNumber}
                        placeholder={userData?.phoneNumber}
                        placeholderTextColor="white"
                    />
                </View>
                <View style={styles.wrapBtns}>
                    <TouchableOpacity
                        style={styles.btnBack}
                        onPress={() => onChoiceUser()}
                    >
                        <Text style={styles.textBtnOrder}>Изменить</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer
                navigation={navigation} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1B5583',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%'
    }, 
    wrapHeader: {
        marginTop: 50,
        width: '100%',
        marginBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    name: {
        fontSize: 20,
        marginTop: 5,
        marginLeft: 20,
        color: 'white',
        fontWeight: '800',
        marginBottom: 10,
    },
    wrapSettings: {
        marginBottom: 'auto',
        width: '100%',
        alignItems: 'center',
    },
    tytleSettings: {
        fontSize: 18,
        marginBottom: 5,
        marginTop: 10,
        color: 'white',
        fontWeight: '800'
    },
    wrapBlockSettings: {
        width: '90%',
        height: 210,
        justifyContent: 'space-around'
    },
    label: {
        fontSize: 16,
        marginTop: 10,
        color: 'white',
        fontWeight: '800'
    },
    inputFullName: {
        height: 30, 
        width: '100%',
        borderColor: 'white', 
        borderBottomWidth: 2,
        fontSize: 16,
        color: 'white',
        fontWeight: '800'
    },
    wrapBtns: {
        width: '95%',
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    btnOrder: {
        width: 168,
        height: 40,
        borderRadius: 8,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    btnBack: {
        width: 120,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#3E5F8A',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    textBtnOrder: {
        fontSize: 18,
        color: "white",
        fontWeight: '900'
    },
})