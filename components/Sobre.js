import { View, Text, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/Estilos';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <Ionicons
          name="library"
          size={64}
          color="#0b1f3a"
          style={{ marginBottom: 12, marginTop: 10 }}
        />

        <Text style={styles.titulo}>Securus Library</Text>

        <Text style={styles.subtitulo}>
          Sua biblioteca digital segura. Leia clássicos da literatura em PDF,
          de forma gratuita e legal, direto no seu celular.
        </Text>

        <View style={styles.selo}>
          <Ionicons name="shield-checkmark" size={20} color="#0b1f3a" />
          <Text style={styles.seloTexto}>
            Todo o acervo é de domínio público, com links oficiais e seguros
            para leitura e download.
          </Text>
        </View>

        <Text style={[styles.texto, { marginBottom: 12, alignSelf: 'flex-start' }]}>
          Como funciona:
        </Text>

        <Text style={[styles.texto, { alignSelf: 'flex-start', marginBottom: 6 }]}>
          📖 Navegue pelo acervo na aba "Acervo".
        </Text>
        <Text style={[styles.texto, { alignSelf: 'flex-start', marginBottom: 6 }]}>
          🔍 Use a busca para encontrar um título ou autor.
        </Text>
        <Text style={[styles.texto, { alignSelf: 'flex-start', marginBottom: 6 }]}>
          📄 Toque em "Ler PDF" para abrir o livro no navegador do app.
        </Text>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600',
          }}
          style={{ width: '100%', height: 160, borderRadius: 14, marginTop: 20 }}
          resizeMode="cover"
        />
      </ScrollView>
    </View>
  );
}
