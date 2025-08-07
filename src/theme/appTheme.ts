import { StyleSheet } from "react-native";

//genstion de estilos
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212ff',
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
    containerForm:{
        position: 'relative',
        width: '80%',
        bottom: 0,
        
    },
    titulo: {
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#ffffffff',
    },
    imagen: {
        top: 60,
        width: '100%',
        height: '55%',
        borderRadius: 20
    },
    botonRegresar: {
        position: 'absolute',
        alignContent: 'flex-start',
        width: 60,
        height: 60,
        borderRadius: 60,
        backgroundColor: 'white',
    },
    input: {
        height: 50,
        width: '100%',
        marginVertical: 10,
        borderWidth: 1,
        paddingHorizontal: 15,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#ecececff',
    },
    subtitulo: {
        alignSelf: 'baseline',
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        marginHorizontal: 20,
        marginTop: 10,
        color: 'white'
    },
    botonEstilo: {
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 20,
        alignSelf: 'center',
    },
    textoBotonEstilo: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },

})