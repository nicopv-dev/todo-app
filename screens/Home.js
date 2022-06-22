import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TodoList from "../components/TodoList";
import todos from "../data/todos";

export default function Home() {
  const [localData, setLocalData] = useState(
    todos.sort((a, b) => a.isCompleted - b.isCompleted)
  );
  const [todayData, setTodayData] = useState([]);
  const [tomorrowData, setTomorrowData] = useState([]);

  useEffect(() => {
    setTimeout(() => setTodayData(todos.filter((todo) => todo.isToday)), 2000);
  }, []);

  useEffect(() => {
    setTomorrowData(todos.filter((todo) => !todo.isToday));
  }, []);

  const onChangeIsCompletedTodo = (id, isCompleted) => {
    const newData = todayData.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: isCompleted };
      }

      return todo;
    });

    setTodayData(newData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.user}>Hola Nicolas!!!</Text>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2022/06/15/13/27/cup-7263953_960_720.jpg",
          }}
          style={styles.pic}
          borderRadius={20}
        />
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.title}>Today</Text>
          <TouchableOpacity>
            <Text style={{ color: "#3478f6" }}>Hide Completed</Text>
          </TouchableOpacity>
        </View>
        <TodoList
          data={todayData}
          onChangeIsCompletedTodo={onChangeIsCompletedTodo}
        />
      </View>

      <Text style={styles.title}>Tomorrow</Text>
      <TodoList data={tomorrowData} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight * 1.3,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  user: {
    fontSize: 30,
  },
  pic: {
    width: 42,
    height: 42,
    alignSelf: "flex-end",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 12,
  },
  button: {
    width: 44,
    height: 44,
    borderRadius: 21,
    backgroundColor: "#000",
    position: "absolute",
    bottom: 50,
    right: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  plus: {
    fontSize: 42,
    color: "#fff",
    position: "absolute",
    top: -8,
    left: 9,
  },
});
