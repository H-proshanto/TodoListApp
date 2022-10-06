import React from "react";
import { TouchableWithoutFeedback,View, Text, StyleSheet } from "react-native";

export const ClearButton = ({
  clearAllTasks
}) => {
  return (
    <View style={styles.body}>
<TouchableWithoutFeedback onPress={() => clearAllTasks([])}>
    <View style={styles.clearButton}>
      <Text style={styles.text}>CLEAR</Text>
    </View>
  </TouchableWithoutFeedback>
    </View>
    
  );
};

const styles = 
  StyleSheet.create({
    body: {
        alignItems:'center'
    },
    clearButton: {
        backgroundColor: "#03396c",
        padding:7,
        width:60,
    },
    text: {
        color: "white",
    fontSize: 16,
    textAlign: "center",
    }
  });
