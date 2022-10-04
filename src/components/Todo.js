import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

export const TodoView = ({ task, status }) => {
  return (
    <View style={styles.todoConatainer}>
      <TouchableOpacity style={styles.touchablebutton}>
        <Text
          style={
            status === "done"
              ? {
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid",
                }
              : {}
          }
        >
          {task}
        </Text>
      </TouchableOpacity>
      <Button
        icon="application-edit"
        mode="contained"
        color="white"
        style={styles.buttonContainer}
      />
      <Button
        icon="close"
        mode="contained"
        color="white"
        style={styles.buttonContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  touchablebutton: {
    flex: 0.9,
    backgroundColor: "orange",
    borderRadius: 8,
    padding: 10,
  },
  todoConatainer: {
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  buttonContainer: {
    flexDirection: "column-reverse",
  },
});
