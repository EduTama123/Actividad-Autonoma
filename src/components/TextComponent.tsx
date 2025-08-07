import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

//componente reutuliable
interface Props {    //propiedades
    title: string;
}

export const TextComponent = ({ title }: Props) => {
    return (
        <Text style={{...styles.text,}}>
            {title}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        alignSelf: 'baseline',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        marginHorizontal: 20,
        marginTop: 10,
        color: 'white'
    }
});