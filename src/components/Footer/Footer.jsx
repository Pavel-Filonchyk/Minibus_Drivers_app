import { useEffect, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';


export default function Footer({ navigation }) {

    const [showPhone, setShowPhone] = useState(false)

    const onChangePage = (arg) => {
        setShowPhone(false)
        navigation.navigate(arg === 'home' ? 'home' : 'profile')
    }

    return (
        <View style={styles.footer}>
            <View style={styles.panelFooter}>
                <TouchableOpacity style={{marginRight: 30}}
                    onPress={() => onChangePage('home')}
                >
                    <Image 
                        style={styles.btnFooter}
                        source={require('./images/care.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 30}}
                    //onPress={() => onChangePage('profile')}
                >
                    <Image 
                        style={styles.btnFooter}
                        source={require('./images/user.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
    },
    panelFooter: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btnFooter: {
        height: 30,
        width: 30,
        marginBottom: 5
    }
})
