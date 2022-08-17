import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import { Game } from "./src/features/game/game";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Game />
        <StatusBar style="auto" />
      </View>
    </Provider>
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
