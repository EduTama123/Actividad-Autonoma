import { StyleSheet } from "react-native";

//genstion de estilos
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000ff'
    },
    imagen: {
        width: 250,
        height: 250,
        borderRadius: 150,
    },
    botonRegresar:{
      alignSelf: 'flex-start',
      width: 50,
      height: 50,
      marginBottom: 40
    },
    input: {
        height: 50,
        width: '95%',
        marginVertical: 10,
        borderWidth: 1,
        borderColor: '#000000ff',
        paddingHorizontal: 15,
        borderRadius: 8,
        fontSize: 16,
        backgroundColor: '#ffffff',
    },
    subtitulo: {
        alignSelf: 'baseline',
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 10,
        marginHorizontal: 20,
        marginTop: 10
    },
    botonEstilo: {
        backgroundColor: 'black',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
        alignSelf: 'center',
    },
    textoBotonEstilo: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})