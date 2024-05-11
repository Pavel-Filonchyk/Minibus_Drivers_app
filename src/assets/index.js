import * as Font from 'expo-font'
import {useFonts} from 'expo-font'


export const loadFonts = async () => {
    await Font.loadAsync({
        MontserratBlack: require('./fonts/Montserrat-Black.ttf'),
        MontserratBold: require('./fonts/Montserrat-Bold.ttf'),
        MontserratExtraBold: require('./fonts/Montserrat-ExtraBold.ttf'),
        MontserratMedium: require('./fonts/Montserrat-Medium.ttf'),
        MontserratRegular: require('./fonts/Montserrat-Regular.ttf'),
        MontserratSemiBold: require('./fonts/Montserrat-SemiBold.ttf'),
    })
}

// let [fontsLoaded] = useFonts({
//       'Lobster': require('./assets/fonts/Lobster-Regular.ttf'),
//     });
//     if (!fontsLoaded) {
//         return <AppLoading/>;
//     }