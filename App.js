import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { TodoForm } from "./src/components/TodoForm";
import { TodoList } from "./src/components/TodoList";
import { ClearButton } from "./src/components/ClearButton";

export default function App() {
  const [currentTask, setCurrentTask] = useState({});
  const [tasks, setTasks] = useState([]);

  const onCompleteTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id == id) task.status = "done";
      return task;
    });
    setTasks(newTasks);
  };

  const destroyTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  useEffect(() => {
    if (Object.keys(currentTask).length !== 0) {
      currentTask.id = tasks.length;
      setTasks([...tasks, currentTask]);
    }
  }, [currentTask]);

  return (
    <SafeAreaView style={styles.container}>
      <TodoForm addTask={setCurrentTask} />
      <TodoList
        list={tasks}
        onCompleteTask={onCompleteTask}
        destroyTask={destroyTask}
      />
      <ClearButton clearAllTasks={setTasks}/>
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
