import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import fonts from '../../utils/typo';

const Signup = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={() => navigation.navigate('login')} >
                <Text style={{ fontFamily: fonts.EXTRA_BOLD }} >Sign up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Signup
