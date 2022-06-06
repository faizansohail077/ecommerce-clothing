import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'

const Signup = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('login')} style={styles.container} >
            <Text >Signup213</Text>
        </TouchableOpacity>
    )
}

export default Signup
