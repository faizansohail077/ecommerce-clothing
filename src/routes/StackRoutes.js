import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassword, Login, Signup } from '../views';

const Stack = createNativeStackNavigator();

const StackRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="signup" component={Signup} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="forgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
    )
}

export default StackRoutes