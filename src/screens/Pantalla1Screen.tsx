import React from 'react'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParams } from '../navigator/StackNavigator';

//Navegacion por propiedades de StackNavigator
//Interface para las propiedades e navegacion
type Props = StackScreenProps<RootStackParams, 'Pantalla1'>;


export const Pantalla1Screen = ({ navigation }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>BIENVENIDO</Text>
            <Image
                style={styles.imagen}
                source={{
                    uri: 'https://blog.symbaloo.com/assets/symbaloo/meta/symbaloo-aplicaciones-moviles.png?social=1'
                }}
            />
            <TouchableOpacity style={styles.botonEstilo} onPress={() => navigation.navigate('Pantalla2')}>
                <Text style={styles.textoBotonEstilo}>Ir a la calculadora</Text>
            </TouchableOpacity>
        </View>
    )
}
