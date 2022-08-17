import { Button, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./gameSlice";

export function Game() {
  const myNumber = useSelector((state) => state.game.value);
  const dispatch = useDispatch();

  return (
    <>
      <Text>My number is: {myNumber}</Text>
      <View>
        <Button title="+" onPress={() => dispatch(increment())} />
        <Button title="-" onPress={() => dispatch(decrement())} />
      </View>
    </>
  );
}
