import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { store } from "./src/app/store";
import { Provider } from "react-redux";
import { Game } from "./src/features/game/game";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <Provider store={store}>
      <LinearGradient style={styles.container} colors={["#d1009d", "#582e77"]}>
        <Game />
        <StatusBar style="auto" />
      </LinearGradient>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
