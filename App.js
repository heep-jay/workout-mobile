import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import ExerciseListItem from "./src/components/ExerciseListItem";
import exercises from "./assets/data/exercises.json";
// import { FlatList } from "react-native-web";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 10 }}
        data={exercises}
        keyExtractor={(item) => item.name}
        renderItem={({ item, index }) => <ExerciseListItem item={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    // alignItems: "center",
    justifyContent: "center",
    padding: 15,
    paddingTop: 70,
  },
});
