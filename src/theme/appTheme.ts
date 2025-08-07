import { StyleSheet } from "react-native";

//genstion de estilos
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(18, 18, 18, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    containerTitulo: {
        position: 'absolute',
        top: 50,
        width: '90%',
        borderRadius: 10
    },
    containerMenuBoton: {
        position: 'relative',
        top: 70
    },
    containerCalculadoraBoton: {
        position: 'absolute',
        top: 15,
        left: 15,
    },
    containerForm: {
        position: 'relative',
        width: '80%',
        bottom: 0,

    },
    imagenFondo: {
        position: 'absolute',
        alignSelf: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 20,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(18, 18, 18, 0.6)',
        
    },
    imagen: {
        top: 60,
        width: '85%',
        height: '55%',
        borderRadius: 20
    },
    botonRegresar: {
        position: 'absolute',
        alignContent: 'flex-start',
        width: 70,
        height: 50,
        borderRadius: 60,
        backgroundColor: 'white',
    },
    botonEstilo: {
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        alignSelf: 'center',
    },

})