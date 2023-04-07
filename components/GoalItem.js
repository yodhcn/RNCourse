import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem(props) {
  /* function deleteGoalHandler() {
    props.onDeleteItem(props.id);
  } */

  return (
    // <Pressable onPress={deleteGoalHandler}>
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
