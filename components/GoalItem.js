import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  /* function deleteGoalHandler() {
    props.onDeleteItem(props.id);
  } */

  return (
    // <Pressable onPress={deleteGoalHandler}>
    <View style={styles.goalItem}>
      <Pressable
        // android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
