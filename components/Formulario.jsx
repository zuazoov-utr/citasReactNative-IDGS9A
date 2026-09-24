import {
    Modal,
    Text,
    View,
    ScrollView,
    Pressable,
    StyleSheet
} from 'react-native';

const Formulario = ({
    showModal,
    setShowNodal
}) => {
    // Toda la funcionalidad

    // return la vista
    return (
        <Modal
            animationType='slide'
            visible={showModal}
        >
            <Text>Hola Mundo desde modal</Text>
            <Pressable
                style={styles.btnCerrarModal}
                onPress={() => setShowNodal(false)}
            >
                <Text style={styles.textoCerrarModal}>Cerrar</Text>
            </Pressable>
        </Modal>
    )
}

const styles = StyleSheet.create({
    btnCerrarModal: {
        backgroundColor: '#6D28D9',
        padding: 15,
        marginTop: 30,
        marginHorizontal: 20,
        borderRadius: 10
    },
    textoCerrarModal: {
        textAlign: 'center',
        color: '#FFF',
        fontSize: 18,
        fontWeight: '900',
        textTransform: 'uppercase'
    }
});

export default Formulario;