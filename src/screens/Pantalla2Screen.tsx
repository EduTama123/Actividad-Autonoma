import React, { useState } from 'react'
import { Button, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';

export const Pantalla2Screen = () => {
    //navegacion por hooks de react navigation
    const navigation = useNavigation();
    //declaracion de variables para obtener los valores mediante hooks UseState
    const [num1, setNum1] = useState<string>('');
    const [num2, setNum2] = useState<string>('');
    const [resultado, setResultado] = useState<string>('');
    //parsear los valores de string a number (convertir de string a numerico)
    const calcularDivision = () => {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);
        //validaciones para no dejar campos vacios (NaN = not a number)
        if (isNaN(n1) || isNaN(n2)) {
            setResultado('Ingrese numeros en los campos vacios');
            return;
        }
        //casaos en que el dividiendo o divisor sean = 0
        if (n1 === 0 && n2 === 0) {
            setResultado('Indefinido (0/0)');
        } else if (n2 === 0) {
            setResultado('Indeterminado (división por cero)');
        } else {
            const division = n1 / n2;
            setResultado(`Resultado de la división: ${division.toFixed(2)}`); //metodo para mostrar el resultado con 2 decimales
        }
    };

    return (
        <View style={styles.container}>
            {/*boton de regresar */}
            <TouchableOpacity style={styles.botonRegresar} onPress={() => navigation.goBack()}>
                <Image
                    source={{
                        uri: 'https://www.pngarts.com/files/8/Round-Back-Button-PNG-Image-Background.png'
                    }}
                    style={styles.botonRegresar} />
            </TouchableOpacity>

            <Text style={styles.titulo}>CALCULADORA</Text>

            <Text style={styles.subtitulo}>Ingrese el primer numero</Text>
            {/*componente imput para ingresar un numero*/}
            <TextInput
                style={styles.input}
                placeholder="Ejemplo: 1, 20, ..."
                keyboardType="numeric"
                value={num1}
                onChangeText={setNum1} />

            <Text style={styles.subtitulo}>Ingrese el segundo numero</Text>
            {/*componente imput para ingresar un numero*/}
            <TextInput
                style={styles.input}
                placeholder="Ejemplo: 1, 20, ..."
                keyboardType="numeric"
                value={num2}
                onChangeText={setNum2} />

            <TouchableOpacity
                style={styles.botonEstilo}
                onPress={calcularDivision}>
                <Text style={styles.textoBotonEstilo}>CALCULAR DIVISIÓN</Text>
            </TouchableOpacity>
            {/*metodo ternario*/}
            {resultado ? (
                <Text style={styles.subtitulo}>{resultado}</Text>
            ) : null}
        </View>
    )
}
