import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import exercises from "./assets/data/exercises.json";

export default function App() {
  const exercise = exercises[0];
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return (
    <View style={styles.container}>
      <View style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          {capitalizeFirstLetter(exercise.muscle)} |{" "}
          {capitalizeFirstLetter(exercise.equipment)}
        </Text>
      </View>
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
    padding: 10,
  },
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
});
