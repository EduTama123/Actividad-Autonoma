import React from 'react'
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'

//componente reutuliable
interface Props {    //propiedades
    title: string;
}

export const TitleComponent = ({ title }: Props) => {
    return (
        <Text style={{...styles.title,}}>
            {title}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#ffffffff',
    }
});