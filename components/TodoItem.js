import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function TodoItem({ item, pressHandler }) {
  return (
    <View style={styles.item}>
      <AntDesign name="delete" size={24} color="black" />
      <TouchableOpacity>
        <Text style={styles.itemStyle} onPress={() => pressHandler(item.key)}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  itemStyle:{
    paddingLeft:20
  }
});
