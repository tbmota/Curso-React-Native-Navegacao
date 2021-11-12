import React from "react";
import { View, Button } from "react-native";
import TextoCentral from '../components/TextoCentral';

export default props => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Button
                    title='Abrir'
                    onPress={() => {
                        props.navigation.openDrawer()
                        setTimeout(() => {
                            props.navigation.closeDrawer()
                            setInterval(() => {
                                props.navigation.toggleDrawer()
                            }, 1000)
                        }, 3000) //em 3seg ele vai chamar (fechar) o closeDrawer
                    }}
                />
            </View>

            <View style={{ flex: 1 }}>
                <TextoCentral corFundo='#33fa72' corTexto='#000'>
                    Tela D 
                </TextoCentral>
            </View>
        </View>
    )
}
//setInterval vai fechando e abrindo de tempos em tempos