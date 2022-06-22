import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, StyleSheet, View } from "react-native";

export default function Checkbox({
  id,
  text,
  isCompleted,
  isToday,
  hour,
  onChangeIsCompletedTodo,
}) {
  const onChangeIsCompleted = () => {
    if (!isCompleted) {
      onChangeIsCompletedTodo(id, true);
    } else {
      onChangeIsCompletedTodo(id, false);
    }
  };

  return isToday ? (
    <TouchableOpacity
      style={isCompleted ? styles.checked : styles.unChecked}
      onPress={onChangeIsCompleted}
    >
      {isCompleted && <Entypo name="check" size={18} color="#FAFAFA" />}
    </TouchableOpacity>
  ) : (
    <View style={styles.isToday} />
  );
}

const styles = StyleSheet.create({
  checked: {
    width: 22,
    height: 22,
    marginRight: 13,
    borderRadius: 4,
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  unChecked: {
    width: 22,
    height: 22,
    marginRight: 13,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    borderRadius: 4,
    backgroundColor: "#fff",
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  isToday: {
    width: 10,
    height: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#262626",
    marginRight: 13,
    marginLeft: 15,
  },
});
