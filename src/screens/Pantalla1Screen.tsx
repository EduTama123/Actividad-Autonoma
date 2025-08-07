import React from 'react'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator';

//Navegacion por propiedades de StackNavigator
//Interface para las propiedades e navegacion
type Props = StackScreenProps<RootStackParams, 'Pantalla1'>;


export const Pantalla1Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>BIENVENIDO</Text>
                <Text style={styles.titulo}>A LA</Text>
                <Text style={styles.titulo}>CALCULADORA</Text>
            </View>
            <Image
                style={styles.imagen}
                source={{
                    uri: 'https://i.pinimg.com/1200x/79/c2/3c/79c23c3ccb0ae330970bb355e1bd1cf2.jpg'
                }}
            />
            <View style={styles.containerMenuBoton}>
                <TouchableOpacity style={styles.botonEstilo} onPress={() => navigation.navigate('Pantalla2')}>
                    <Text style={styles.textoBotonEstilo}>Pulsa el botón para empezar!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
