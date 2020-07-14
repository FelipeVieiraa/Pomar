import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//Pages
import Logon from '../pages/Logon';
import Register from '../pages/Register';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="Logon"
                component={Logon}
                options={{ headerShown: false }}
            />

            <AuthStack.Screen 
                name="Register"
                component={Register}
                options={{ headerShown: true,
                    headerStyle: {
                        backgroundColor: '#131313',
                        borderBottomWidth: 1,
                        borderBottomColor: '#ffd327'
                    },
                    headerTintColor: '#FFF',
                    headerBackTitleVisible: false,
                    headerTitle: 'Voltar'
                }}
            />
        </AuthStack.Navigator>
    );
}