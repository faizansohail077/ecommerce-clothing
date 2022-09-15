import { StyleSheet } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        marginHorizontal: widthPercentageToDP(2)
    }
})
