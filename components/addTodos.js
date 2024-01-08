import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodos({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    return setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo ...."
        onChangeText={changeHandler}
      />
      <Button onPress={() => submitHandler(text)} title="Add todo" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
