import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';
// Components
import Formulario from './components/Formulario';

export default function App() {
  // states
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Administrador de Citas {''}
          <Text style={styles.tituloBold}>Veterinaria</Text>
        </Text>

        <Pressable
          style={styles.btnNuevaCita}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.btnTextNuevaCita}>Nueva Cita</Text>
        </Pressable>
        <Formulario
          showModal={modalVisible}
          setShowNodal={setModalVisible}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '600'
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9'
  },
  btnNuevaCita: {
    backgroundColor: '#6D28D9',
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextNuevaCita: {
    textAlign: 'center',
    color: '#FFF',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase'
  }
});
