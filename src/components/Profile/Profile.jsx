import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import AntDesign from '@expo/vector-icons/AntDesign'

import ModalWrapper from '../../wrapers/ModalWrarrer/ModalWrapper'
import Footer from '../Footer/Footer'
import { sendCodeData, resetErrorCode } from '../../core/actions/authActions'

export default function Profile({ navigation }) {
    const dispatch = useDispatch()

    const getCode = useSelector(({authReducer: { getCode }}) => getCode)
    const errorCode = useSelector(({authReducer: { errorCode }}) => errorCode)

    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [createCode, setCreateCode] = useState(null)
    const [writeCode, setWriteCode] = useState('')
    const [showBtn, setShowBtn] = useState(false)
    const [errorTextPhone, setErrorTextPhone] = useState(false)
    const [errorTextCode, setErrorTextCode] = useState(false)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        const getData = async () => {
            try {
              const value = await AsyncStorage.getItem('auth')
              const jsonValue = JSON.parse(value)
              if(value !== null) {
                setFullName(jsonValue?.fullName)
              }
            } catch(e) {
              console.log(e)
            }
        }
        getData()
    }, [])

    useEffect(() => {
        if (createCode !== null) {
            dispatch(sendCodeData({code: createCode.toString(), phoneNumber: `+375${phoneNumber}`}))
        }
    }, [createCode])
    useEffect(() => {
        if(getCode === true) {
            setShowBtn(item => !item)
        }
    }, [getCode])

    const onSendCode = () => {
        if(phoneNumber !== null){
            dispatch(resetErrorCode())
            setCreateCode(Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000)
            setErrorTextPhone(false)
        }else{
            setErrorTextPhone(true)
        }
    }
    const onConfirmCode = async () => {
        if (createCode.toString() === writeCode.toString()){
            try {
                const jsonValue = JSON.stringify({fullName, phoneNumber: `+375${phoneNumber}`})
                await AsyncStorage.setItem('auth', jsonValue)
            } catch (e) {
                console.log(e)
            }

            setShowModal(true)
            setTimeout(() => {
                setShowModal(false)
            },1500)
            setShowBtn(item => !item)
            setErrorTextCode(false)
            setCreateCode(null)
            setPhoneNumber(null)
            setWriteCode('')
        }
        if (createCode.toString() !== writeCode.toString()){
            setErrorTextCode(true)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapHeader}>
                <Text style={styles.name}>{fullName}</Text>
                
            </View>
            <View style={styles.wrapSettings}>
                <Text style={styles.tytleSettings}>Изменить</Text>
                <View style={styles.wrapBlockSettings}>
                    <Text style={styles.label}>Имя и фамилию</Text>
                    <TextInput
                        style={styles.inputFullName}
                        onChangeText={(e) => setFullName(e)}
                        value={fullName}
                        placeholder={fullName}
                        placeholderTextColor="white"
                    />
                    <Text style={styles.label}>Телефон</Text>
                    <View style={styles.wrapPhoneNumber}>
                        <Text style={styles.textPhoneNumber}>+375</Text>
                        <TextInput
                            //keyboardType="numeric"
                            style={styles.phoneInput}
                            onChangeText={(e) => setPhoneNumber(e)}
                            value={phoneNumber}
                        />
                    </View>
                </View>
                <View style={styles.wrapTextInput}>
                    <Text style={styles.label}>Введите полученный код,</Text>
                    <Text style={styles.label}>чтобы подтвердить изменения</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(e) => setWriteCode(e)}
                        value={writeCode}
                    />
                </View>
                
                <Text style={{...textError, display: errorTextPhone ? 'flex' : 'none'}}>Заполните поле номера телефона</Text>
                <Text style={{...textError, display: errorCode ? 'flex' : 'none'}}>Проверьте номер телефона</Text>
                <Text style={{...textError, display: errorTextCode ? 'flex' : 'none'}}>Неверно введен код</Text>
                
                <View style={styles.wrapBtns}>
                    {
                        !showBtn 
                        ?  
                            <TouchableOpacity
                                style={styles.btnAuth}
                                onPress={onSendCode}
                            >
                                <Text style={styles.textBtnOrder}>Получить код</Text>
                            </TouchableOpacity>
                        
                        :   
                            <TouchableOpacity
                                style={styles.btnAuth}
                                onPress={() => onConfirmCode()}
                            >
                                <Text style={styles.textBtnOrder}>Подтвердить</Text>
                            </TouchableOpacity>

                    }
                </View>
            </View>

            <ModalWrapper showModal={showModal}>
                <View style={styles.wrapTextModal}>
                    <>
                        <Text style={styles.textModal}>Успешно</Text>
                        <Text style={styles.textModal}>изменены данные!</Text>
                        <AntDesign name="smileo" size={48} color="white" style={{marginTop: 20}} />
                    </>
                </View>
            </ModalWrapper>

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
    wrapTextInput: {
        marginTop: 10,
        alignItems: 'center',
        width: '90%'
    },
    wrapPhoneNumber: {
        maxWidth: '100%',
        flexDirection: 'row',
        overflow: 'hidden'
    },
    textPhoneNumber: {
        fontSize: 16,
        color: 'white',
        fontWeight: '800',
        width: 55
    },
    phoneInput: {
        width: '100%',
        borderColor: 'white', 
        borderBottomWidth: 2,
        fontSize: 16,
        color: 'white',
        fontWeight: '800',
        paddingLeft: 5
    },
    textInput: {
        height: 30, 
        width: '50%',
        borderColor: 'white', 
        borderBottomWidth: 2,
        fontSize: 16,
        color: 'white',
        fontWeight: '800',
        marginTop: 10,
        textAlign: 'center'
    },
    wrapBtns: {
        width: '95%',
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    textBtnOrder: {
        fontSize: 18,
        color: "white",
        fontWeight: '900'
    },
    btnAuth: {
        width: 168,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#008080',
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapTextModal: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textModal: {
        fontWeight: '600',
        fontSize: 31,
        color: "white",
        lineHeight: 50,
        textAlign: 'center'
    }
})

const textError = StyleSheet.create({
    color: 'red',
    marginTop: 20,
    fontWeight: '800',
    fontSize: 16
})