import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: '#0b1f3a',
  },

  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f4f1ea',
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0b1f3a',
    marginBottom: 16,
    marginTop: 10,
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 15,
    color: '#5a5a5a',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 21,
  },

  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  capa: {
    width: 60,
    height: 84,
    borderRadius: 6,
    marginRight: 14,
    backgroundColor: '#0b1f3a',
  },

  infoLivro: {
    flex: 1,
  },

  nomeLivro: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0b1f3a',
  },

  autorLivro: {
    fontSize: 13,
    color: '#777',
    marginTop: 2,
    marginBottom: 6,
  },

  tagCategoria: {
    fontSize: 11,
    color: '#b8860b',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  botaoPdf: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0b1f3a',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 8,
    alignSelf: 'flex-start',
  },

  textoBotaoPdf: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '600',
    marginLeft: 6,
  },

  inputPesquisa: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },

  texto: {
    fontSize: 16,
    textAlign: 'left',
    color: '#333',
    lineHeight: 24,
  },

  selo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eef3ff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 18,
  },

  seloTexto: {
    fontSize: 13,
    color: '#0b1f3a',
    marginLeft: 8,
    flex: 1,
  },
});

export const drawerStyles = {
  headerStyle: {
    backgroundColor: '#0b1f3a',
  },

  headerTintColor: '#ffffff',

  headerTintStyle: {
    fontWeight: 'bold',
  },

  drawerStyle: {
    backgroundColor: '#0b1f3a',
    width: 250,
  },

  drawerActiveTintColor: '#ffffff',

  drawerActiveBackgroundColor: '#1c3a63',

  drawerInactiveTintColor: '#a9b6cc',

  drawerLabelStyle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
};
