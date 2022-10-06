import { View, StyleSheet, FlatList } from "react-native";
import { TodoView } from "./Todo";

export const TodoList = ({ list, onCompleteTask, destroyTask }) => {
  const renderItem = ({ item }) => (
    <TodoView
      task={item.task}
      status={item.status}
      id={item.id}
      onCompleteTask={onCompleteTask}
      destroyTask={destroyTask}
    />
  );

  return (
    <View style={styles.listContainer}>
      <FlatList data={list} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 0.9,
  },
});
