import {StyleSheet} from "react-native";

export default StyleSheet.create({
    //Containers------------------------------
    containerG: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    flex: 1
    },
    backgroundWeb: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    },
    containerWeb: {
    height: '100vh',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    maxWidth: 605,
    minWidth: 300,
    alignItems: 'center',
    flex: 1
    },
    container: {
        paddingTop: 50,
        padding: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        maxWidth: 605,
        minWidth: 300,
        alignItems: 'center',
        flex: 1
    },
    //Titulo e Inputs--------------------------
    titulo: {
        fontSize:22,
        marginBottom:10,
        color: '#0D47A1'
    },
    entrada: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 8,
        borderRadius: 5,
        backgroundColor: '#E1F5FE',
        paddingLeft: 7,
        color: '#0D47A1'
    },
    pesquisaAndroid: {
        height: 40,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 8,
        borderRadius: 5,
        backgroundColor: '#E1F5FE',
        paddingLeft: 7,
        color: '#0D47A1',
        fontSize: 18
    },
    //Botões-----------------------------
    botao: {
        height:50,
        width: 320,
        margin: 20,
        borderRadius: 5,
        backgroundColor: '#1565C0',
        alignItems: 'center',
        justifyContent: 'center'
    },
     textoBotao: {
        color: 'white',
        fontSize: 20,
    },
    //Filtro-------------------------------------
    picker: {
        height: 40,
        width: 80,
        backgroundColor: '#1565C0',
        borderRadius: 5,
        fontSize: 16,
        color: 'white'
    },
    pickerItem: {
        color: 'white',
        backgroundColor: '#1565C0',
    },
    //Lista-------------------------------------------------
    containerListaWeb: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        padding: 10,
        flex: 1,
    },
    containerLista: {
        flexDirection: 'column',
        padding: 10,
        flex: 1,
        alignItems: 'center'
    },
    lista: {
        margin: 4,
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderColor: 'rgba(111, 211, 247, 0.8)',
    },
    listap:{
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        width: 250,
        minHeight: 30,
        fontSize: 16,
        color: '#0D47A1',
        padding: 8,
        borderTopWidth: 3,
        borderColor: 'rgba(111, 211, 247, 0.8)',
        flexWrap: 'wrap'
    },
    listaImg: {
        alignSelf: 'center',
        width: 100,
        height: 100,
        backgroundColor: 'white',
    }
})