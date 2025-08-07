import React from 'react'
import { KeyboardTypeOptions, StyleSheet, TextInput } from 'react-native'


//componente reutuliable
interface Props {    //recibe propiedades de los componentes
    placeholder: string;
    KeyboardType: KeyboardTypeOptions;
    value: string;
    onChangeText: (text: string) => void;
}


export const InputComponent = ({ placeholder, KeyboardType, value, onChangeText }: Props) => {
    return (
        <TextInput
            style={styles.inputText}
            placeholder={placeholder}
            keyboardType={KeyboardType}
            value={value}
            onChangeText={onChangeText}
            >
        </TextInput>
    )
}

const styles = StyleSheet.create({
    inputText: {
        height: 50,
        width: '100%',
        marginVertical: 10,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#ecececff',
    },
})