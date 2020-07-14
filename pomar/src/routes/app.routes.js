import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../pages/Home';
import Perfil from '../pages/Perfil';
import Colheita from '../pages/Colheita';

const AppDrawer = createDrawerNavigator();

export default function AppRoutes() {
    return(
        <AppDrawer.Navigator
            initialRouteName="Home"
            drawerStyle={{
                backgroundColor: '#171717'
            }}
            drawerContentOptions={{
                labelStyle: {
                    fontWeight: 'bold'
                },
                activeTintColor: '#FFF',
                activeBackgroundColor: '#ffd327',
                inactiveBackgroundColor: '#000',
                inactiveTintColor: '#DDD',
                itemStyle: {
                    marginVertical: 5,
                }    
            }}
        >
            <AppDrawer.Screen name="Home" component={Home}/>
            <AppDrawer.Screen name="Colheita" component={Colheita}/>
            <AppDrawer.Screen name="Perfil" component={Perfil}/>
        </AppDrawer.Navigator>
    )
    
}