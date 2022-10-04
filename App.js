import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { TodoForm } from "./src/components/TodoForm";
import { TodoList } from "./src/components/TodoList";

export default function App() {
  const [currentTask, setCurrentTask] = useState({});
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (Object.keys(currentTask).length !== 0)
      setTasks([...tasks, currentTask]);
  }, [currentTask]);

  return (
    <SafeAreaView style={styles.container}>
      <TodoForm addTask={setCurrentTask} />
      <TodoList list={tasks} />
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "rgba(95, 70, 200, 1)",
  },
});
