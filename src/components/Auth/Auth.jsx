import { useEffect, useState, useLayoutEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { sendCodeData, resetErrorCode } from '../../core/actions/authActions'
import { getDrivers } from '../../core/actions/getDriversActions'

export default function Auth({ navigation }) {
    
    const dispatch = useDispatch()

    const getCode = useSelector(({authReducer: { getCode }}) => getCode)
    const errorCode = useSelector(({authReducer: { errorCode }}) => errorCode)
    const driversData = useSelector(({getDriversReducer: { driversData }}) => driversData)

    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [createCode, setCreateCode] = useState(null)
    const [writeCode, setWriteCode] = useState('')
    const [showBtn, setShowBtn] = useState(false)
    const [errorTextPhone, setErrorTextPhone] = useState(false)
    const [errorTextCode, setErrorTextCode] = useState(false)
    
    useLayoutEffect(() => {
        dispatch(getDrivers())
    }, [])
    useEffect(() => {
        const getItemStorage = async () => {
            try {
                const value = await AsyncStorage.getItem('auth')
                const jsonValue = JSON.parse(value)
                const findDriver = driversData?.find(item => item.phoneDriver === jsonValue.phoneNumber)
                if(value !== null && findDriver !== undefined) {
                    navigation.navigate('home')
                    return value
                }
            } catch(e) {
                console.log(e)
            }
        }
        getItemStorage()
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

            setShowBtn(item => !item)
            setErrorTextCode(false)
            setCreateCode(null)
        }
        if (createCode.toString() !== writeCode.toString()){
            setErrorTextCode(true)
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapAuth}>
                <View style={styles.wrapTitle}>
                    <Text style={styles.title}>РЕГИСТРАЦИЯ</Text>
                </View>
                <Text style={styles.label}>Введите имя и фамилию</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(e) => setFullName(e)}
                    value={fullName}
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
                {/* <PhoneInput
                    defaultValue={phoneNumber}
                    defaultCode='BY'
                    onChangeFormattedText={(number) => {
                        setPhoneNumber(number)
                    }}
                    placeholder=' '
                    containerStyle={{height: 45, width: '90%', borderRadius: 6, textAlign: 'center'}}
                    textInputStyle={{fontSize: 14, fontWeight: '800', color:'#1B5583'}}
                    codeTextStyle={{fontSize: 14, fontWeight: '800', color:'#1B5583'}}
                
                /> */}
                <Text style={styles.label}>Введите полученный код</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(e) => setWriteCode(e)}
                    value={writeCode}
                />
    
                <Text style={{...textError, display: errorTextPhone ? 'flex' : 'none'}}>Необходимо заполнить поле номера телефона</Text>
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
                                <Text style={styles.textBtnAuth}>Получить код</Text>
                            </TouchableOpacity>
                        
                        :   
                            <TouchableOpacity
                                style={styles.btnAuth}
                                onPress={() => onConfirmCode()}
                            >
                                <Text style={styles.textBtnAuth}>Подтвердить</Text>
                            </TouchableOpacity>

                    }
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B5583',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    wrapAuth: {
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '80%',
        alignItems: 'flex-start',
    },
    wrapTitle: {
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: 'white',
        fontWeight: '800',
        marginBottom: 14
    },
    label: {
        fontSize: 16,
        color: 'white',
        fontWeight: '800',
        marginTop: 14
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
        marginTop: 10,
        width: 55
    },
    phoneInput: {
        width: '100%',
        borderColor: 'white', 
        borderBottomWidth: 2,
        fontSize: 16,
        color: 'white',
        fontWeight: '800',
        marginTop: 10,
        paddingLeft: 5
    },
    textInput: {
        height: 30, 
        width: '100%',
        borderColor: 'white', 
        borderBottomWidth: 2,
        fontSize: 16,
        color: 'white',
        fontWeight: '800',
        marginTop: 10,
        textAlign: 'center'
    },
    wrapBtns: {
        width: '100%',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnAuth: {
        width: 168,
        height: 40,
        borderRadius: 8,
        backgroundColor: '#008080',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnAuth: {
        fontSize: 18,
        color: "white",
        fontWeight: '900'
    },
})

const textError = StyleSheet.create({
    color: 'red',
    marginTop: 20,
    fontWeight: '800',
    fontSize: 16
})
