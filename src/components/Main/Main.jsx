import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAllTravels } from '../../core/actions/getTravelsActions'
import { sendRoute } from '../../core/actions/transitActions'
import Footer from '../Footer/Footer'

export default function Main({ navigation }) {
  const dispatch = useDispatch() 

  const allTravels = useSelector(({getTravelsReducer: { allTravels }}) => allTravels)
 
  const [activeRoute, setActiveRoute] = useState('')
  const [activeDate, setActiveDate] = useState('')

  useEffect(() => {
    dispatch(getAllTravels())
  }, [])
  useEffect(() => {
    setActiveRoute(allTravels[0]?.blockId)
    setActiveDate(allTravels[0]?.dateTrip)
  }, [allTravels])
  const onChoiceDateRoutes = (data) => {
    setActiveRoute(data.blockId)
    setActiveDate(data.dateTrip)
  }
  const onChoiceRoute = (blockId) => {
    const route = allTravels?.filter(item => item.blockId === blockId)
    dispatch(sendRoute(route))
    navigation.navigate('boarding')
  }

  const uniqTravels = []
  for (let i of allTravels) {
    const find = uniqTravels.find(item => item.dateTrip === i.dateTrip)
    if (find === undefined){
      uniqTravels.push(i)
    } 
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.tytle}>РЕЙСЫ</Text>
        <View style={styles.wrapRoutesLinks}>
          <ScrollView horizontal={true}>
            {
              uniqTravels.map(item => {
                return (
                  <TouchableOpacity style={{...styleRoutes, backgroundColor: activeRoute === item.blockId ? '#F75E25' : '#3168b0' }}
                    onPress={() => onChoiceDateRoutes({blockId: item.blockId, dateTrip: item.dateTrip})}
                  >
                    <Text style={{...styleTextRoutes}}>{item.dateTrip}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </ScrollView>
        </View>
      </View>

      <ScrollView>
        {
          allTravels?.filter(item => item.dateTrip === activeDate)?.map(item => {
            return (
              <View 
                style={styles.wrapRouts}
                key={item.blockId}
              >
                <TouchableOpacity style={styles.wrapBlockRouts}
                  onPress={() => onChoiceRoute(item.blockId)}
                >
                  <View style={styles.blockRouts}>
                    <Text style={styles.textRouts}>Время отправления :</Text>
                    <Text style={styles.textRouts}>{item.timeTrips}</Text>
                  </View>
                  <View style={styles.blockRouts}>
                    <Image 
                      style={styles.car}
                      source={require('./images/car.png')}
                    />
                    <Text style={styles.textCar}>{item.tripFrom} - {item.tripTo}</Text>
                  </View>
                  <View style={styles.blockRouts}>
                    <Text style={styles.textRouts}>Свободных мест</Text>
                    <Text style={styles.textRouts}>{item.freeSeats}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>
      <View style={styles.wrapBtns}>
        <TouchableOpacity
          style={styles.btnGetOrder}
          onPress={() => dispatch(getAllTravels())}
        >
          <Text style={styles.textBtnGetOrder}>Обновить</Text>
        </TouchableOpacity>
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
    //width: '100%'
  },
  header: {
    width: '100%',
    alignItems: 'center'
  },
  tytle: {
    fontSize: 22,
    color: 'white',
    marginTop: 50,
    fontWeight: '800'
  },
  wrapRoutesLinks: {
    flexDirection: 'row',
    marginTop: 20,
    width: '92%',
    marginBottom: 20
  },
  wrapRouts: {
    marginBottom: 'auto',
    minWidth: '92%',
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 10,
    marginLeft: 10
  },
  wrapBlockRouts: {
    width: '100%',
    height: 150,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 12,
    justifyContent: 'space-around',
  },
  blockRouts: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  textRouts: {
    fontSize: 16,
    color: 'white',
    fontWeight: '800'
  },
  car: {
    width: 68,
    height: 26
  },
  textCar: {
    //fontFamily: 'MontserratBold',
    fontSize: 16,
    color: 'white',
    fontWeight: '800'
  },
  wrapBtns: {
    width: '100%',
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,

},
btnGetOrder: {
    width: 140,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
},
textBtnGetOrder: {
  fontWeight: '900',
  fontSize: 18,
  color: "white",

},
})

const styleRoutes = StyleSheet.create({
  width: 108,
  height: 38,
  borderRadius: 8,
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 10,
  marginBottom: 10
})

const styleTextRoutes = StyleSheet.create({
  fontSize: 16,
  color: 'white',
  fontWeight: '800'
})