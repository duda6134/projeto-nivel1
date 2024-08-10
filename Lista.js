import React, {useState} from 'react';
import {FlatList, Text, Image, View, TextInput, Pressable, Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './StyleSheets';

const ListaFornecedores = ({ data }) => {  

  const [procurar, setProcurar] = useState('')
  const [criterio, setCriterio] = useState('nome')

  const filtrado = procurar.length > 0 ? 
    data.filter(item => {
      const campo = item[criterio].toLowerCase()
      return campo.includes(procurar.toLowerCase())

    })
    : data

  return (
    <View style={{ flex: 1 }}>
      <View style={{flexDirection: 'row', marginTop: 20, alignItems: 'center', margin: 20}}>
        <TextInput
          style={Platform.OS === 'web' ? [styles.entrada, {height: 40, fontSize: 18}] : styles.pesquisaAndroid}
          placeholder='Pesquisar...'
          value={procurar}
          onChangeText={setProcurar}
        />
        <View style={{flexDirection: 'column'}}>
          <Picker
            selectedValue={criterio}
            style={styles.picker}
            onValueChange={(itemValue) => setCriterio(itemValue)}
          >
            <Picker.Item label="Nome" value="nome" style={styles.pickerItem}/>
            <Picker.Item label="Endereço" value="endereco" style={styles.pickerItem}/>
            <Picker.Item label="Categoria" value="categoria" style={styles.pickerItem}/>
          </Picker>
        </View>
      </View>
      <FlatList
        data={filtrado}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.lista}>
            {item.imagem && (
              <View style={{
                borderTopWidth: 3,
                borderColor: 'rgba(111, 211, 247, 0.8)',
                backgroundColor: 'white'}}>
                <Image
                  source={{ uri: item.imagem }}
                  style={styles.listaImg}
                />
              </View>
            )}
            <Text style={styles.listap}>Nome: {item.nome}</Text>
            <Text style={styles.listap}>Endereço: {item.endereco}</Text>
            <Text style={styles.listap}>Contato: {item.contato}</Text>
            <Text style={styles.listap}>Categoria: {item.categoria}</Text>
          </View>
        )}
        contentContainerStyle={styles.containerListaWeb}
        style={{flex: 1}}
      />
    </View>
  );
};


export default ListaFornecedores;