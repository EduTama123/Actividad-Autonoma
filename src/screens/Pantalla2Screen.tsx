import React, { useState } from 'react'
import { Button, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';
import { TitleComponent } from '../components/TitleComponent';
import { TextComponent } from '../components/TextComponent';
import { InputComponent } from '../components/InputComponent';
import { TextButtonComponent } from '../components/TextButtonComponent';

export const Pantalla2Screen = () => {
    //imagen de fondo
    const image = { uri: 'https://i.pinimg.com/1200x/79/c2/3c/79c23c3ccb0ae330970bb355e1bd1cf2.jpg' };

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
            setResultado('Indeterminación (0/0)');
        } else if (n2 === 0) {
            setResultado('No existe división para cero (n/0)');
        } else {
            const division = n1 / n2;
            setResultado(`Resultado de la división: ${division.toFixed(2)}`); //metodo para mostrar el resultado con 2 decimales
        }
    };

    return (
        <View style={styles.container}>
            {/*boton de regresar */}
            {/*componente imagen de fondo */}
            <ImageBackground source={image} resizeMode="cover" style={styles.imagenFondo} />
            <View style={styles.overlay} />
            <View style={styles.containerCalculadoraBoton}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        source={{
                            uri: 'https://cdn-icons-png.flaticon.com/512/318/318504.png'
                        }}
                        style={styles.botonRegresar} />
                </TouchableOpacity>
            </View>

            <View style={styles.containerForm}>
                <TitleComponent title='CASIO.APP' />
                <TextComponent title='Ingrese el primer numero' />
                {/*componente reutilizable imput para ingresar el primer numero*/}
                <InputComponent placeholder='Valor 1' KeyboardType='numeric' value={num1} onChangeText={setNum1}/>
                <TextComponent title='Ingrese el segundo numero' />
                {/*componente reutilizable imput para ingresar el segundo numero*/}
                <InputComponent placeholder='Valor 2' KeyboardType='numeric' value={num2} onChangeText={setNum2}/>
            </View>

            <TouchableOpacity
                style={styles.botonEstilo}
                onPress={calcularDivision}>
                <TextButtonComponent title='Calcular división' />
            </TouchableOpacity>
            {/*metodo ternario*/}
            {resultado ? (
                <Text style={styles.subtitulo}>{resultado}</Text>
            ) : null}
        </View>
    )
}
