import { Button, Text, View, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Tile } from "../../components/tile";
import { increment, decrement } from "./gameSlice";

export function Game() {
  const myNumber = useSelector((state) => state.game.value);
  const tileGrid = useSelector((state) => state.game.tileGrid);
  const dispatch = useDispatch();

  //   console.log("tileGrid is: ", tileGrid);

  return (
    <>
      {/* <Text>My number is: {myNumber}</Text>
      <View>
        <Button title="+" onPress={() => dispatch(increment())} />
        <Button title="-" onPress={() => dispatch(decrement())} />
      </View> */}
      <View style={styles.grid}>
        {tileGrid.map((tile) => (
          <Tile id={tile.id} key={tile.id} />
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  grid: {
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    // alignItems: "center",
    justifyContent: "space-between",
  },
});
