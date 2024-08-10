import React, {useState} from 'react';
import {Platform, View, Image, ImageBackground} from 'react-native';
import styles from './StyleSheets';
import Cadastro from './Cadastro'; 
import ListaFornecedores from './Lista';

export default function App() {
  const [data, setData] = useState([]);
  const salvaItem = (item) => {
    setData([...data, item]);
  };

  return (
    <View style={styles.containerG}>
    <ImageBackground
      source={{ uri: 'https://get.wallhere.com/photo/1920x1080-px-blue-clouds-landscape-Mount-Everest-mountains-nature-sky-snow-1287833.jpg' }}
      style={Platform.OS === 'web' ? styles.backgroundWeb : styles.background}
    >
      <View 
        style={Platform.OS === 'web' ? styles.containerWeb : styles.container}>
        <Cadastro salvaItem={salvaItem} />

        <View 
        style={Platform.OS === 'web' ? styles.containerListaWeb : styles.containerLista}> 
          <ListaFornecedores data={data} />
        </View>
      </View>

    </ImageBackground>
  </View>

  )
}