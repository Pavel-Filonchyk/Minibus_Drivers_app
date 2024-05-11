import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'

import { choiceTransit } from '../../core/actions/transitActions'

export default function Header({navigation}) {
    const dispatch = useDispatch()

    const choiceRoute = useSelector(({transitReducer: { choiceRoute }}) => choiceRoute)
    const transitLinks = useSelector(({transitReducer: { transitLinks }}) => transitLinks)

    const onChoiceTransit = (transit) => {
        if (transit === 'boarding'){
            dispatch(choiceTransit('boarding'))
            navigation.navigate('boarding')
        }
        if (transit === 'payment'){
            dispatch(choiceTransit('payment'))
            navigation.navigate('payment')
        }
        if (transit === 'landing'){
            dispatch(choiceTransit('landing'))
            navigation.navigate('landing')
        }
    }

    return (
        <View style={styles.header}>
            <View style={styles.wrapTytle}>
                <Text style={styles.tytle}>{choiceRoute[0]?.tripFrom} - {choiceRoute[0]?.tripTo}</Text>
                <Text style={styles.timeTytle}>{choiceRoute[0]?.timeTrips}</Text>
            </View>
            <View style={styles.wrapTransitLinks}>
                <TouchableOpacity style={{...styleTransit, backgroundColor: transitLinks === 'boarding' ? '#F75E25' : '#3168b0' }}
                    onPress={() => onChoiceTransit('boarding')}
                >
                    <Text style={{...styleTextTransit}}>ПОСАДКА</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styleTransit, backgroundColor: transitLinks === 'payment' ? '#F75E25' : '#3168b0'}}
                    onPress={() => onChoiceTransit('payment')}
                >
                    <Text style={{...styleTextTransit}}>ОПЛАТА</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{...styleTransit, backgroundColor: transitLinks === 'landing' ? '#F75E25' : '#3168b0'}}
                    onPress={() => onChoiceTransit('landing')}
                >
                    <Text style={{...styleTextTransit}}>ВЫСАДКА</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        alignItems: 'center'
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
    wrapTransitLinks: {
        flexDirection: 'row',
        marginTop: 20,
        width: '92%',
        marginBottom: 20,
        justifyContent: 'space-between',
    }
})
const styleTransit = StyleSheet.create({
    width: 106,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
})
  
const styleTextTransit = StyleSheet.create({
    fontSize: 17,
    fontWeight: '800',
    color: 'white'
})
