import { StyleSheet, Text, View } from "react-native";
import Checkbox from "./Checkbox";
import { MotiView } from "moti";

export default function Todo({
  id,
  text,
  isCompleted,
  isToday,
  hour,
  onChangeIsCompletedTodo,
}) {
  return (
    <View style={styles.container}>
      <Checkbox
        id={id}
        text={text}
        isCompleted={isCompleted}
        isToday={isToday}
        hour={hour}
        onChangeIsCompletedTodo={onChangeIsCompletedTodo}
      />
      <View>
        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ type: "timing", duration: 0.5 }}
        >
          <Text
            style={
              isCompleted
                ? [
                    styles.text,
                    { textDecorationLine: "line-through", color: "#737373" },
                  ]
                : styles.text
            }
          >
            {text}
          </Text>
        </MotiView>

        <Text style={styles.time}>{hour}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
  time: {
    fontSize: 13,
  },
});
