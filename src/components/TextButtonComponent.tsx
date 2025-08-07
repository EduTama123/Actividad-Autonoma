import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

//componente reutuliable
interface Props {    //propiedades
    title: string;
}

export const TextButtonComponent = ({ title }: Props) => {
    return (
        <Text style={{...styles.text,}}>
            {title}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
});