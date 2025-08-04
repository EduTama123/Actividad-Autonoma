import { StyleSheet } from "react-native";

//genstion de estilos
export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 25,
    },
    imagen: {
        width: 150,
        height: 150,
        borderRadius: 150,
    },
    input: {
        height: 50,
        width: '100%',
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