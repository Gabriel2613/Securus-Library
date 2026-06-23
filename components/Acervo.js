import { View, Text, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import styles from '../styles/Estilos';
import livros from '../data/livros';

export default function Acervo() {
  const [pesquisa, setPesquisa] = useState('');

  const livrosFiltrados = livros.filter((livro) => {
    const termo = pesquisa.toLowerCase();
    return (
      livro.nome.toLowerCase().includes(termo) ||
      livro.autor.toLowerCase().includes(termo) ||
      livro.categoria.toLowerCase().includes(termo)
    );
  });

  const abrirPdf = async (livro) => {
    try {
      await WebBrowser.openBrowserAsync(livro.pdf);
    } catch (erro) {
      Alert.alert(
        'Não foi possível abrir o PDF',
        'Verifique sua conexão com a internet e tente novamente.'
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ width: '100%' }}>
        <Text style={styles.titulo}>Acervo</Text>

        <TextInput
          style={styles.inputPesquisa}
          placeholder="🔍  Buscar por título, autor ou categoria..."
          value={pesquisa}
          onChangeText={setPesquisa}
        />

        {livrosFiltrados.length === 0 && (
          <Text style={[styles.texto, { textAlign: 'center', marginTop: 20 }]}>
            Nenhum livro encontrado para "{pesquisa}".
          </Text>
        )}

        {livrosFiltrados.map((livro) => (
          <View key={livro.id} style={styles.card}>
            <Image source={{ uri: livro.capa }} style={styles.capa} />

            <View style={styles.infoLivro}>
              <Text style={styles.tagCategoria}>{livro.categoria}</Text>
              <Text style={styles.nomeLivro}>{livro.nome}</Text>
              <Text style={styles.autorLivro}>{livro.autor}</Text>

              <TouchableOpacity
                style={styles.botaoPdf}
                onPress={() => abrirPdf(livro)}
                activeOpacity={0.8}
              >
                <Ionicons name="document-text-outline" size={16} color="#ffffff" />
                <Text style={styles.textoBotaoPdf}>Ler PDF</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
