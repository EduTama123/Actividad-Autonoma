import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Pantalla2Screen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>CALCULADORA</Text>
            <Text style={styles.subtitulo}>Ingrese el primer numero</Text>
            <TextInput
                style={styles.input}
                placeholder="Ejemplo: {1, 20, ...}"
                keyboardType="default"
            />
            <Text style={styles.subtitulo}>Ingrese el segundo numero</Text>
            <TextInput
                style={styles.input}
                placeholder="Ejemplo: {1, 20, ...}"
                keyboardType="default"
            />
            <TouchableOpacity style={styles.botonEstilo}>
                <Text style={styles.textoBotonEstilo}>CALCULAR</Text>
            </TouchableOpacity>
        </View>
    )
}
