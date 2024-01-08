import { useState } from "react";
import { StyleSheet, View, FlatList, Alert,TouchableWithoutFeedback, Keyboard } from "react-native";
import Header from "./components/Headers";
import TodoItem from "./components/TodoItem";
import AddTodos from "./components/addTodos";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Opps!", "Todo must 4 charachters", [{ text: "Cansel" }]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <AddTodos submitHandler={submitHandler} />

        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
