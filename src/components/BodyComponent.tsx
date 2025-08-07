import React, { ReactNode } from 'react'
import { StyleSheet, useWindowDimensions, View, Keyboard, KeyboardTypeOptions } from 'react-native';



//componente reutilizable
interface Props {
    children: ReactNode; //cualquier elemento de react (texto, imagen, arreglos, inputs, etc)
}

export const BodyComponent = ({ children }: Props) => {

    //hook useWindowDimension permite obtener las dimensiones de la pantalla
    const { height } = useWindowDimensions();

    return (
        <View style={{
            ...styles.container
        }}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212ff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
});