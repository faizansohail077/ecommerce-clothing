import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackRoutes from './StackRoutes';

const MainRoute = () => {
    return (
        <NavigationContainer>
            <StackRoutes />
        </NavigationContainer>
    )
}

export default MainRoute
