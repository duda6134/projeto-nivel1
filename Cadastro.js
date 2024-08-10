import React, {useState} from "react";
import {Pressable, Text, TextInput, View, Image} from "react-native";
import {launchImageLibrary} from "react-native-image-picker";
import styles from './StyleSheets';

const Cadastro= ({salvaItem}) => {
    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [contato, setContato] = useState('');
    const [categoria, setCategoria] = useState('');
    const [imagem, setImagem] = useState(null);
   
    const Item = () => {
      if (!nome || !endereco || !contato || !categoria) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
      const item = { nome, endereco, contato, categoria, imagem};
        salvaItem(item);
        setNome('');
        setEndereco('');
        setContato('');
        setCategoria('');
        setImagem(null); 
    };

    const selecionarImagem = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
          if (response.didCancel) {
            console.log('Usuário cancelou a seleção de imagem.');
          } else if (response.errorCode) {
            console.log('Erro:', response.errorMessage);
          } else {
            const uri = response.assets[0].uri;
            setImagem(uri);
          }
        });
      };
    
    return (
        <View style={{alignItems: 'center'}}>
            <Text style={styles.titulo}>Cadastro</Text>
            <TextInput
             style={styles.entrada}
             value={nome}
             onChangeText={setNome}
             placeholder="Nome"
            />
            <TextInput
             style={styles.entrada}
             value={endereco}
             onChangeText={setEndereco}
             placeholder="Endereço"
            />
            <TextInput
             style={styles.entrada}
             value={contato}
             onChangeText={setContato}
             placeholder="Contato"
            />
            <TextInput
             style={styles.entrada}
             value={categoria}
             onChangeText={setCategoria}
             placeholder="Categoria de produtos"
            />
            <Pressable  style={[styles.entrada, {backgroundColor: 'rgb(111, 211, 247)', borderWidth: 0}]} onPress={selecionarImagem}>
                <Text style={[styles.textoBotao, {fontSize: 16, paddingTop: 7}]}>Salvar imagem</Text>
            </Pressable>
            {imagem && (
                <Image
                    source={{ uri: imagem }}
                    style={{ width: 100, height: 100, marginTop: 10 }}
                />
            )}
            <Pressable style={styles.botao} onPress={Item}>
                <Text style={styles.textoBotao}>Adicionar</Text>
            </Pressable>
        </View>
    )
}
export default Cadastro;