import { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import { useReactToPrint } from 'react-to-print'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { putPaid } from '../../core/actions/transitActions'
import { sendReport } from '../../core/actions/sendReportAction'

export default function Payment({navigation}) {
    const dispatch = useDispatch()
    const componentRef = useRef()

    const paymentPay = useSelector(({transitReducer: { paymentPay }}) => paymentPay)
    const paymentPaid = useSelector(({transitReducer: { paymentPaid }}) => paymentPaid)
    const pay = useSelector(({transitReducer: { pay }}) => pay)
    const paid = useSelector(({transitReducer: { paid }}) => paid)
    const totalPaid = pay + paid
   
    const onPutPaid = (arg) => {
        dispatch(putPaid(arg))
    }
    const onSendReport = () => {
        dispatch(sendReport())
    }
    
    // = useReactToPrint({
    //     content: () => componentRef.current,
        
    // })
    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
            /> 
             <View style={{...styleWrapPayment, backgroundColor: totalPaid === paid ? 'green' : '#E8793E'}}>
                <Text style={styles.textPayment}>Оплачено: {paid} б.р.</Text>
                <Text style={styles.textPayment}>Всего: {totalPaid} б.р.</Text>
            </View>
            <ScrollView>
                <View style={styles.wrapPerson} ref={componentRef}>
                    <View style={styles.wrapStatusPayment}>
                        <Text style={styles.textStatusPayment}>Ожидает оплаты : {paymentPay?.length}</Text>
                    </View>
                    {
                        paymentPay.map(item => {
                            return (
                                <View style={styles.blockPerson} key={item.id}>
                                    <View style={styles.wrapFullName}>
                                        <Text style={styles.textFullName}>{item.fullName}</Text>
                                        <TouchableOpacity>
                                            <Image 
                                                style={styles.phone}
                                                source={require('../Boarding/images/phone.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.wrapIndicators}>
                                        <Text style={{...styletTextIndicators, color: 'white'}}>Заказано мест</Text>
                                        <Text style={styles.textNumberSeats}>{item.numberSeats}</Text>
                                    </View>
                                    <View style={styles.wrapIndicators}>
                                        <TouchableOpacity style={{flexDirection: 'row'}}
                                            onPress={() => onPutPaid({phoneNumber: item.phoneNumber})}
                                        >
                                            <Image 
                                                style={styles.icon}
                                                source={require('../Boarding/images/wallet.png')}
                                            />
                                            <Text style={{...styletTextIndicators, color: '#E8793E'}}> ОПЛАТА</Text>
                                        </TouchableOpacity>
                                        <Text style={{...styletTextIndicators, color: '#E8793E'}}>{item.cost} б.р.</Text> 
                                    </View>
                                </View>
                            )
                        })
                    }
                   
                    {/* Сатус оплаты - ОПЛАЧЕНО */}
                    <View style={styles.wrapStatusPayment}>
                        <Text style={styles.textStatusPayment}>Оплачено : {paymentPaid?.length}</Text>
                    </View>
                    {
                        paymentPaid.map(item => {
                            return (
                                <View style={styles.blockPerson} key={item.id}>
                                    <View style={styles.wrapFullName}>
                                        <Text style={styles.textFullName}>{item.fullName}</Text>
                                        <TouchableOpacity>
                                            <Image 
                                                style={styles.phone}
                                                source={require('../Boarding/images/phone.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.wrapIndicators}>
                                        <Text style={{...styletTextIndicators, color: 'white'}}>Заказано мест</Text>
                                        <Text style={styles.textNumberSeats}>{item.numberSeats}</Text>
                                    </View>
                                    <View style={styles.wrapIndicators}>
                                        <View style={{flexDirection: 'row'}}>
                                            <Image 
                                                style={styles.icon}
                                                source={require('../Boarding/images/wallet.png')}
                                            />
                                            <Text style={{...styletTextIndicators, color: 'green'}}> ОПЛАЧЕНО:</Text>
                                        </View>
                                        <Text style={{...styletTextIndicators, color: 'green'}}>{item.cost} б.р.</Text> 
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
                <View style={styles.wrapBtns}>
                    <TouchableOpacity
                        style={styles.btnOrder}
                        onPress={onSendReport}
                    >
                        <Text style={styles.textBtnOrder}>ОТЧЕТ</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    textPayment: {
        fontSize: 18,
        fontWeight: '800',
        color: 'white',
        marginLeft: 12,
        marginRight: 12,
    }, 
    wrapPerson: {
        marginBottom: 'auto',
        minWidth: '92%',
        alignItems: 'center',
        marginBottom: 10,
        marginRight: 10,
        marginLeft: 10
    },
    wrapStatusPayment: {
        width: '100%',
        marginLeft: 8,
        marginBottom: 8,
    },
    textStatusPayment: {
        fontSize: 18,
        color: '#E8793E',
        fontWeight: '800',
    },
    textNumberSeats: {
        fontWeight: '800',
        fontSize: 16,
        color: 'white',
        marginRight: 5
    },
    blockPerson: {
        width: '100%',
        height: 140,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 12,
        justifyContent: 'space-around',
        marginBottom: 12,
    },
    wrapFullName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
    },
    textFullName: {
        fontSize: 18,
        color: 'white',
        fontWeight: '800',
    },
    phone: {
        width: 22,
        height: 28
    },
    wrapIndicators: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 5,
        //marginBottom: 10
    },
    wrapBtns: {
        width: '100%',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    btnOrder: {
        width: 168,
        height: 40,
        borderRadius: 8,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBtnOrder: {
        fontSize: 18,
        color: "white",
        fontWeight: '800',
    },
})

const styleWrapPayment = StyleSheet.create({
    minWidth: '92%',
    height: 38,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
})
const styletTextIndicators = StyleSheet.create({
    fontWeight: '800',
    fontSize: 16,
})
