import React from "react"
import { View, Text, StyleSheet, Pressable, Alert, Modal} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons";
import * as Clipboard from 'expo-clipboard'; 


function confirmRemovePassword(item, removePassword) {
    Alert.alert(
      "Confirmar exclusão",
      "Você tem certeza que deseja remover esta senha?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", onPress: removePassword }
      ]
    );
  }

export function PasswordItem({ data, removePassword}) {

  const copyToClipboard = () => {
    Clipboard.setStringAsync(data); // Copia o texto para a área de transferência
    Alert.alert("Copiado!", "Senha copiada para a área de transferência.");
  };
   

    return (
        <Pressable onLongPress={copyToClipboard} style={styles.container}>

        <Text style={styles.text}>{data}</Text>
            <Pressable onPress={() => confirmRemovePassword(data, removePassword)} style={styles.iconContainer}>
                <Icon name="delete" size={24} color="#FF0000" />
            </Pressable>
      </Pressable>
        
       
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0e0e0e",
        padding: 14,
        width: "100%",
        marginBottom: 14,
        borderRadius: 8,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        color: '#fff',
        fontWeight: "bold",
        alignContent: 'center'
    },
    iconContainer: {
        padding: 8,
      },


})