import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import * as Notifications from "expo-notifications";

export default function App() {
  const enviarMensagem = () => {};

  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Text>Exemplo de notificação local</Text>
        <Button title="Disparar notificação" onPress={enviarMensagem} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
