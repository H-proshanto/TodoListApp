import { View, StyleSheet, FlatList } from "react-native";
import { TodoView } from "./Todo";

export const TodoList = ({ list }) => {
  const renderItem = ({ item }) => (
    <TodoView task={item.task} status={item.status} />
  );

  return (
    <View style={styles.listContainer}>
      <FlatList data={list} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 0.7,
  },
});
