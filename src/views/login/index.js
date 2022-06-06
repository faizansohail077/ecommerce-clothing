import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style'
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('forgotPassword')} style={styles.container} >
            <Text>Login</Text>
        </TouchableOpacity>
    )
}

export default Login
