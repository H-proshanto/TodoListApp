import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export const TodoView = ({ task, status, id, onCompleteTask, destroyTask }) => {
  return (
    <View style={styles.todoConatainer}>
      <TouchableOpacity
        style={styles.touchablebutton}
        onPress={() => {
          onCompleteTask(id);
        }}
      >
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
      <TouchableWithoutFeedback onPress={() => destroyTask(id)}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>X</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  touchablebutton: {
    flex: 0.8,
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
    backgroundColor: "#03396c",
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
  },
});
