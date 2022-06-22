import { FlatList, ScrollView, Text } from "react-native";
import Todo from "./Todo";
import { Skeleton } from "moti/skeleton";
import { MotiView } from "moti";

const Spacer = ({ height }) => <MotiView style={{ height }} />;

function MySkeleton() {
  return (
    <>
      <Skeleton width={"50%"} height={20} colorMode={"light"} />
      <Spacer height={6} />
      <Skeleton width={"16%"} height={14} colorMode={"light"} />
    </>
  );
}

export default function TodoList({ data, onChangeIsCompletedTodo }) {
  return data.length ? (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Todo {...item} onChangeIsCompletedTodo={onChangeIsCompletedTodo} />
      )}
      style={{ height: "40%" }}
    />
  ) : (
    <>
      <MySkeleton />
      <Spacer height={14} />
      <MySkeleton />
      <Spacer height={14} />
      <MySkeleton />
      <Spacer height={14} />
      <MySkeleton />
    </>
  );
}
