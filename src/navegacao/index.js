import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// import Stack from './Stack'
import Tab from './Tab'
// import Drawer from './Drawer'

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            {/* <Stack /> */}
            <Tab />
            {/* <Drawer /> */}
        </NavigationContainer>
    </SafeAreaView>
)
// https://github.com/oblador/react-native-vector-icons
// npm install --save react-native-vector-icons
// npx react-native link react-native-vector-icons

// Em android\app\build.gradle inserir:
//  project.ext.vectoricons = [
//     iconFontNames: [ 'MaterialIcons.ttf', 'EvilIcons.ttf' (XXXX SUBSTITUIR TUDO POR 'Ionicons.ttf' XXXX)] // Name of the font files you want to copy
// ]
// apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

//Seguindo os passos da parte de perguntas do curso:
// npm install react-navigation
// npm install react-native-gesture-handler
