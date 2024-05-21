import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Linking, Platform } from 'react-native'
import _ from 'lodash'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { putPayment } from '../../core/actions/transitActions'

export default function Boarding({ navigation }) {
    const dispatch = useDispatch() 

    const choiceRoute = useSelector(({transitReducer: { choiceRoute }}) => choiceRoute)
    const freeSeats = useSelector(({transitReducer: { freeSeats }}) => freeSeats)
    
    const onPutPayment = (arg) => {
        dispatch(putPayment(arg))
    }

    return (
        <View style={styles.container}>
            <Header
                navigation={navigation}
            />
            <View style={styles.wrapSeats}>
                <Text style={styles.textSeats}>Свободные места:</Text>
                <Text style={styles.textSeats}>{freeSeats}</Text>
            </View>
            <ScrollView>
                {
                    choiceRoute[0]?.persons
                    .filter(item => item.fullName !== 'DEFAULT')
                    ?.map(item => {
                        return (
                            <>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                    <View style={{marginTop: 8}}>
                                        <Text style={styles.textTripFrom}>{item.tripFrom}</Text>
                                        <Text style={styles.textTripFrom}>ост. {item.wayStart}</Text>
                                    </View>
                                    
                                    <Text style={styles.textTimeStart}>{item.timeStart}</Text>
                                </View>
                                <View style={styles.wrapPerson} key={item.blockId} >
                                    <View style={styles.blockPerson}>
                                        <View style={styles.wrapFullName}>
                                            <Text style={styles.textFullName}>{item.fullName}</Text>
                                            <TouchableOpacity
                                                onPress={() => Linking.openURL(Platform.OS !== 'android' ? `telprompt:${item.phoneNumber}` : `tel:${item.phoneNumber}`)}
                                            >
                                                <Image 
                                                    style={styles.phone}
                                                    source={require('./images/phone.png')}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View>
                                            <Text style={styles.tripTo}>Место высадки:  {item.tripTo}</Text>
                                            <Text style={styles.tripTo}>ост.  {item.wayStop}</Text>
                                        </View>
                                        <View style={styles.wrapIndicators}>
                                            <Text style={styles.textIndicators}>Заказано мест</Text>
                                            <Text style={styles.textNumberSeats}>{item.numberSeats}</Text>
                                        </View>
                                        <View style={styles.wrapIndicators}>
                                            <TouchableOpacity style={styles.blockIndicators}
                                                onPress={() => onPutPayment({phoneNumber: item.phoneNumber, indicator: 'неявка'})}
                                            >
                                                <Image 
                                                    style={styles.icon}
                                                    source={require('./images/close.png')}
                                                />
                                                <Text style={styles.textIndicators}>НЕЯВКА</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity style={styles.blockIndicators}
                                                onPress={() => onPutPayment({phoneNumber: item.phoneNumber, indicator: 'оплата'})}
                                            >
                                                <Image 
                                                    style={styles.icon}
                                                    source={require('./images/wallet.png')}
                                                />
                                                <Text style={styles.textIndicators}>ОПЛАТА</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.blockIndicators}
                                                onPress={() => onPutPayment({phoneNumber: item.phoneNumber, indicator: 'явка'})}
                                            >
                                                <Image 
                                                    style={styles.icon}
                                                    source={require('./images/done.png')}
                                                />
                                                <Text style={styles.textIndicators}>ЯВКА</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </>
                        )
                    })
                }
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
    wrapTytle: {
        flexDirection: 'row',
        width: '92%',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        marginTop: 50,
    },
    tytle: {
        fontSize: 22,
        color: 'white', 
        fontWeight: '800'
    },
    timeTytle: {
        fontSize: 20,
        color: 'white',
        fontWeight: '800'
    },
    wrapSeats: {
        minWidth: '92%',
        height: 38,
        backgroundColor: '#3E5F8A',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    textSeats: {
        fontSize: 18,
        color: 'white',
        marginLeft: 12,
        marginRight: 12,
        fontWeight: '800'
    },

    textTripFrom: {
        fontSize: 18,
        fontWeight: '900',
        color:'#F75E25' ,//'#F75E25',
        marginLeft: 14,
        marginBottom: 5,
        padding: 0,
        marginTop: 0
    },
    textTimeStart: {
        fontSize: 17,
        fontWeight: '900',
        color: 'white',//'#F75E25',
        marginRight: 14,
        marginBottom: 5,
        marginTop: 18
    },
    wrapPerson: {
        marginBottom: 'auto',
        minWidth: '92%',
        alignItems: 'center',
        marginBottom: 12,
        marginRight: 10,
        marginLeft: 10
    },
    blockPerson: {
        width: '100%',
        height: 200,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 12,
        justifyContent: 'space-around',
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
        width: 24,
        height: 30
    },
    tripTo: {
        fontSize: 17,
        fontWeight: '800',
        color: 'white',
        marginLeft: 20,
        marginRight: 20,
    },
    wrapIndicators: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
    },
    textNumberSeats: {
        fontWeight: '800',
        fontSize: 16,
        color: 'white',
        marginRight: 5
    },
    blockIndicators: {
        flexDirection: 'row',
        //justifyContent: 'flex-start',
        //alignItems: 'flex-end'
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 5,
        //marginBottom: 10
    },
    textIndicators: {
        fontSize: 16,
        fontWeight: '800',
        color: 'white',
    }
})

