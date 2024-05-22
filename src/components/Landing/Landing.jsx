import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Linking, Platform } from 'react-native'

import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { deleteUser } from '../../core/actions/transitActions'

export default function Landing({navigation}) {
    const dispatch = useDispatch()

    const landing = useSelector(({transitReducer: { landing }}) => landing)
    const freeSeats = useSelector(({transitReducer: { freeSeats }}) => freeSeats)

    const numberBusstop = landing[0]?.numberBusstopStop
    
    const users = []
    for (let i of landing) {
        if(users.length === 0){
            users.push(landing[0])
        }
        if(users.length > 0){
            if(numberBusstop > i?.numberBusstopStop){
                users.unshift(i)
            }
            if(numberBusstop < i?.numberBusstopStop){
                users.push(i)
            }
        }
    }
    const onDeleteUser = (phoneNumber) => {
        dispatch(deleteUser(phoneNumber))
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
                    users?.map(item => {
                        return (
                            <>
                                <Text style={styles.textTripTo}>{item.tripTo}, {item.wayStop}</Text>
                                <View style={styles.wrapPerson} key={item.id}>
                                    <View style={styles.blockPerson}>
                                        <View style={styles.wrapFullName}>
                                            <Text style={styles.textFullName}>{item.fullName}</Text>
                                            <TouchableOpacity
                                                onPress={() => Linking.openURL(Platform.OS !== 'android' ? `telprompt:${item.phoneNumber}` : `tel:${item.phoneNumber}`)}
                                            >
                                                <Image 
                                                    style={styles.phone}
                                                    source={require('../Boarding/images/phone.png')}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                        <View style={styles.wrapIndicators}>
                                            <Text style={styles.textIndicators}>Заказано мест</Text>
                                            <Text style={styles.textNumberSeats}>{item.numberSeats}</Text>
                                        </View>
                                        <View style={styles.wrapLanding}>
                                            <TouchableOpacity
                                                onPress={() => onDeleteUser({phoneNumber: item.phoneNumber})}
                                            >
                                                <Text style={styles.textLanding}>ВЫСАДКА</Text>
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
        fontWeight: '800',
    },
    textTripTo: {
        fontSize: 18,
        color: '#E8793E',
        marginLeft: 14,
        marginBottom: 8,
        marginTop: 8,
        fontWeight: '800',
    },
    wrapPerson: {
        marginBottom: 'auto',
        minWidth: '92%',
        alignItems: 'center',
        marginBottom: 0,
        marginRight: 10,
        marginLeft: 10
    },
    blockPerson: {
        width: '100%',
        height: 130,
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
    textIndicators: {
        fontWeight: '800',
        fontSize: 16,
        color: 'white',
    },
    textNumberSeats: {
        fontWeight: '800',
        fontSize: 16,
        color: 'white',
        marginRight: 5
    },
    wrapLanding: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    textLanding: {
        fontWeight: '800',
        fontSize: 18,
        color: '#E8793E',
        marginTop: 6,
        marginBottom: 6
    }
})