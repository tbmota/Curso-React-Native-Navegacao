import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                // switch (route) {
                //     case value:
                //         break;
                //     default:
                //         break;
                // }

                switch (route.name) {
                    case 'TelaA':
                        iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                        break;
                    case 'TelaB':
                        iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                        break;
                    case 'TelaC':
                        iconName = focused ? 'ios-list-box' : 'ios-list';
                        break;
                }
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            showLabel: true,
            // labelStyle: { fontSize: 30 }
        }} initialRouteName="TelaB">
            <Tab.Screen name="TelaA" component={TelaA} 
                options={{ title: 'Inicial' }} />
            <Tab.Screen name="TelaB" component={TelaB} 
                options={{ title: 'Meio' }} />
            <Tab.Screen name="TelaC" component={TelaC} 
                options={{ title: 'Final' }} />
        </Tab.Navigator>
    )

// https://reactnavigation.org/docs/upgrading-from-5.x/
// npm install react-native-safe-area-context react-native-screens

// initialRouteName="TelaB"> {/* pra iniiciar na tela B */}

{/* <Tab.Navigator screenOptions={{
    tabBarActiveTintColor: 'red',
    tabBarInactiveTintColor: 'blue',
    tabBarLabelStyle: { fontSize: 30 }
}}> */}