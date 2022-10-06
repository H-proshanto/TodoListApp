import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { RoundedButton } from "./RoundedButton";

export const TodoForm = ({ addTask }) => {
  const [input, setInput] = useState("");
  const onSubmit = () => {
    if (input !== "") {
      setInput("");
      addTask({ task: input, status: "pending" });
    }
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={setInput}
        onSubmitEditing={onSubmit}
        style={styles.textInput}
        label="Add a todo"
        value={input}
      />
      <View style={styles.button}>
        <RoundedButton
          style={styles.button}
          title="+"
          size={50}
          onPress={onSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    marginRight: 8,
  },
  button: {
    justifyContent: "center",
  },
});
