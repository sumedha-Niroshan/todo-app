import { StyleSheet, View, Text } from "react-native";

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 38,
    height: 80,
    backgroundColor: "coral",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
