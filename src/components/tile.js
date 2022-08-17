import { Text, View, StyleSheet } from "react-native";

export function Tile({ id }) {
  return <View style={styles.tile}></View>;
}

const styles = StyleSheet.create({
  tile: {
    margin: 10,
    padding: 30,
    borderRadius: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
